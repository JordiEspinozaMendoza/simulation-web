import React, { useReducer } from "react";
import { PrimaryButton, SecondaryButton } from "../components";
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Table,
} from "react-bootstrap";

import { callApi } from "../api";
import { LoaderDots } from "../components";
import { ContainerStyled } from "../utils";
import { ToastAlert } from "../components";
import toast from "react-hot-toast";

import { frequencyActions as actions } from "../actions";
import { frequencyReducers as reducer } from "../reducers";
import { frequencyInitialState as initialState } from "../constants";

import { useHistory } from "react-router-dom";
import styled from "styled-components";
const alphaValues = [
  0.001, 0.0025, 0.005, 0.01, 0.025, 0.05, 0.1, 0.25, 0.5, 0.1, 0.15, 0.2, 0.25,
  0.3, 0.35, 0.4, 0.45, 0.5,
];
const ResponseContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-top: 2rem;
  width: 80%;
`;

export default function FrequencyView() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const history = useHistory();
  const pseudoNumbers =
    localStorage.getItem("pseudo-numbers") &&
    JSON.parse(localStorage.getItem("pseudo-numbers"));
  const returnToGenerator = () => {
    history.push("/exercises/generator");
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    dispatch({
      type: actions.UPDATE_VALUE,
      payload: {
        key: name,
        value,
      },
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    toast.promise(
      callApi(
        "/api/frequency/test/",
        "POST",
        {
          pseudoNumbers: pseudoNumbers,
          alpha: state?.alpha,
          numberGroups: state?.numberGroups,
        },
        {
          SUCCESS: actions.SUCCESS_FREQUENCY,
          FAIL: actions.FAIL_FREQUENCY,
          REQUEST: actions.REQUEST_FREQUENCY,
        },
        dispatch
      ),
      {
        loading: "Realizando prueba de frequencia",
        success: "Prueba finalizada",
        error: (e) => `${e}`,
      }
    );
  };
  React.useEffect(() => {
    console.log(state.response);
  }, [state.response])
  return (
    <ContainerStyled>
      <ToastAlert />
      <h1>Prueba de Frecuencia &#9997;</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>Valor de alpha</FormLabel>
          <FormControl
            as="select"
            value={state.alpha}
            name="alpha"
            onChange={handleChange}
          >
            {alphaValues.map((value, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))}
          </FormControl>
        </FormGroup>
        <FormGroup>
          <FormLabel>Número de grupos</FormLabel>
          <FormControl
            value={state?.numberGroups}
            type="number"
            name="numberGroups"
            onChange={handleChange}
          />
        </FormGroup>
        {pseudoNumbers ? (
          <>
            <FormLabel>
              Total de números generados actualmente:
              {pseudoNumbers["n"].length}. <b className="b-link">Ver números</b>
            </FormLabel>
            <br />
            {state.loading ? (
              <LoaderDots />
            ) : (
              <PrimaryButton type="submit">Realizar test</PrimaryButton>
            )}
          </>
        ) : (
          <>
            <FormLabel>
              Aún no tienes números pseudoaleatorios generados 😥
            </FormLabel>
            <br />
            <SecondaryButton onClick={returnToGenerator}>
              Ir a generarlos
            </SecondaryButton>
          </>
        )}
      </Form>
      {state.response && (
        <Table striped hover responsive className="table-sm mt-4">
          <thead>
            <tr>
              <th>Intervalo</th>
              <th>FE</th>
              <th>F0</th>
              <th>Grupo</th>
            </tr>
          </thead>
          <tbody>
            {state.response?.dfFrequency?.map((item, index) => (
              <tr key={index}>
                <td>{item["Interval"]}</td>
                <td>{item["FE"]}</td>
                <td>{item["FO"]}</td>
                <td>{item["Group"]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </ContainerStyled>
  );
}
