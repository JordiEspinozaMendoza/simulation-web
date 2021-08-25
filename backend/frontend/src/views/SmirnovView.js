import React, { useReducer } from "react";
import { PrimaryButton, SecondaryButton } from "../components";
import { Form, FormGroup, FormLabel, FormControl } from "react-bootstrap";

import { callApi } from "../api";
import { LoaderDots } from "../components";
import { ButtonsContainer, ContainerStyled } from "../utils";
import { ToastAlert } from "../components";
import toast from "react-hot-toast";

import { smirnovActions as actions } from "../actions";
import { smirnovReducers as reducer } from "../reducers";
import { smirnovInitialState as initialState } from "../constants";

import { useHistory } from "react-router-dom";
import styled from "styled-components";

const ResponseContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-top: 2rem;
  width: 80%;
`;
export default function SmirnovView() {
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
        "/api/smirnov/test/",
        "POST",
        {
          pseudoNumbers: pseudoNumbers,
          percent: state?.percent,
          numberGroups: state?.numberGroups,
        },
        {
          SUCCESS: actions.SUCCESS_SMIRNOV,
          FAIL: actions.FAIL_SMIRNOV,
          REQUEST: actions.REQUEST_SMIRNOV,
        },
        dispatch
      ),
      {
        loading: "Realizando prueba de smirnov",
        success: "Prueba finalizada",
        error: (e) => `${e}`,
      }
    );
  };
  return (
    <ContainerStyled>
      <h1>Prueba de Smirnov &#9997;</h1>

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>Porcentaje &#x25;</FormLabel>
          <FormControl
            value={state.percent}
            type="number"
            name="percent"
            onChange={handleChange}
          />
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
              Total de números generados actualmente:{" "}
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
        <ResponseContainer>
          <h2>Resultados 💯</h2>
          <span>
            <b>Di de tablas </b>: {state.response.about}
          </span>
          <br />
          <span>
            <b>Di máximo</b>: {state.response.max}
          </span>
          <br />

          <span>
            <b>Resultado: </b>
            {state.response.message}
          </span>
        </ResponseContainer>
      )}
      <ToastAlert />
    </ContainerStyled>
  );
}
