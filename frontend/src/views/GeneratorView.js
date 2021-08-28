import React, { useReducer } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Table,
} from "react-bootstrap";
import { PrimaryButton, SecondaryButton } from "../components";

import { generatorReducers as reducer } from "../reducers";
import { generatorInitialState as initialState } from "../constants";
import { generatorActions as actions } from "../actions";

import { callApi } from "../api";
import { LoaderDots } from "../components";
import { ButtonsContainer, ContainerStyled } from "../utils";
import { ToastAlert } from "../components";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";

export default function GeneratorView() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const refPseudoNumbers = React.createRef(null);
  const refEnd = React.createRef(null);
  const history = useHistory();

  const scrollTo = (ref) => {
    if (ref) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
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
  const changePage = (url) => {
    history.push(url);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    toast.promise(
      callApi(
        "/api/generator/generator/",
        "POST",
        {
          x0: state.x0,
          a: state.a,
          c: state.c,
          m: state.m,
        },
        {
          SUCCESS: actions.SUCCESS_GENERATOR,
          FAIL: actions.FAIL_GENERATOR,
          REQUEST: actions.REQUEST_GENERATOR,
        },
        dispatch
      ),
      {
        loading: "Generando números pseudoaleatorios",
        success: "Números pseudoaleatorios generados correctamente",
        error: (e) => `${e}`,
      }
    );
  };

  return (
    <ContainerStyled>
      <ToastAlert />
      <h1>Generador de números pseudoaleatorios &#9997;</h1>
      <div className="usecondary-button-box">
        <SecondaryButton
          onClick={() =>
            dispatch({
              type: actions.SET_DEFAULT_GENERATOR,
            })
          }
        >
          Usar números por default
        </SecondaryButton>
      </div>
      {state && (
        <>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel>
                Valor de <b>X0</b>
              </FormLabel>
              <FormControl
                type="number"
                name="x0"
                value={state.x0}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>
                Valor de <b>a</b>
              </FormLabel>
              <FormControl
                type="number"
                name="a"
                value={state.a}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>
                Valor de <b>c</b>
              </FormLabel>
              <FormControl
                type="number"
                name="c"
                value={state.c}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>
                Valor de <b>m</b>
              </FormLabel>
              <FormControl
                type="number"
                name="m"
                value={state.m}
                onChange={handleChange}
              />
            </FormGroup>
            {state.loading ? (
              <LoaderDots />
            ) : (
              <PrimaryButton
                type="submit"
                onClick={() => scrollTo(refPseudoNumbers)}
              >
                Generar
              </PrimaryButton>
            )}
          </Form>
          <h2 ref={refPseudoNumbers} style={{ marginTop: "1rem" }}>
            {state.response ? "Resultados" : ""}
          </h2>
          {state.response && (
            <>
              <ButtonsContainer className="mt-4">
                <Col sm={3}>
                  <SecondaryButton onClick={() => scrollTo(refEnd)}>
                    Ir al final de la tabla
                  </SecondaryButton>
                </Col>
                <Col sm={3}>
                  <SecondaryButton
                    onClick={() => {
                      dispatch({
                        type: actions.SAVE_PSEUDO_NUMBERS,
                      });
                      toast.success("Números guardados correctamente");
                    }}
                  >
                    Guardar estos números &#x2705;
                  </SecondaryButton>
                </Col>
                <Col sm={3}>
                  <SecondaryButton
                    onClick={() => {
                      changePage("/exercises/tests/smirnov");
                      dispatch({
                        type: actions.SAVE_PSEUDO_NUMBERS,
                      });
                    }}
                  >
                    Realizar prueba Smirnov
                  </SecondaryButton>
                </Col>
                <Col sm={3}>
                  <SecondaryButton
                    onClick={() => {
                      changePage("/exercises/tests/frequency");
                      dispatch({
                        type: actions.SAVE_PSEUDO_NUMBERS,
                      });
                    }}
                  >
                    Realizar prueba frecuencia
                  </SecondaryButton>
                </Col>
              </ButtonsContainer>

              <Table
                striped
                hover
                responsive
                className="table-sm mt-4"
              >
                <thead>
                  <tr>
                    <th>n</th>
                    <th>Rn</th>
                    <th>Xn</th>
                    <th>Xn+1</th>
                  </tr>
                </thead>
                <tbody>
                  {state.response.map((item, index) => (
                    <tr key={index}>
                      <td>{item.n}</td>
                      <td>{item.rn}</td>
                      <td>{item.xn}</td>
                      <td>{item.xn1}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <span className="mb-4">
                Genial! Generaste {state.response.length} números &#128079;
              </span>
              <SecondaryButton
                className="mb-4"
                ref={refEnd}
                onClick={() => scrollTo(refPseudoNumbers)}
              >
                Regresar al principio
              </SecondaryButton>
            </>
          )}
        </>
      )}
    </ContainerStyled>
  );
}
