import { Modal, Row, Col, Table } from "react-bootstrap";
import React from "react";
import { ButtonsContainer } from "../../utils";
import { SecondaryButton } from "..";
import { useHistory } from "react-router";
export function ModalNumbers({ show, onHandleClose }) {
  const pseudoNumbers =
    localStorage.getItem("pseudo-numbers-modal") &&
    JSON.parse(localStorage.getItem("pseudo-numbers-modal"));
  const refPseudoNumbers = React.createRef(null);
  const refEnd = React.createRef(null);
  const scrollTo = (ref) => {
    if (ref) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const history = useHistory();
  return (
    <Modal show={show} onHide={onHandleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title ref={refPseudoNumbers}>
          Números pseudoaleatorios disponibles
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <>
          <ButtonsContainer className="mt-4">
            <Col sm={6}>
              <SecondaryButton onClick={() => scrollTo(refEnd)}>
                Ir al final de la tabla
              </SecondaryButton>
            </Col>
            <Col sm={6}>
              <SecondaryButton onClick={() => history.push("/exercises/generator")}>
                Generar otros números
              </SecondaryButton>
            </Col>
          </ButtonsContainer>

          <Table striped hover responsive className="table-sm mt-4">
            <thead>
              <tr>
                <th>n</th>
                <th>Rn</th>
                <th>Xn</th>
                <th>Xn+1</th>
              </tr>
            </thead>
            <tbody>
              {pseudoNumbers?.map((item, index) => (
                <tr key={index}>
                  <td>{item.n}</td>
                  <td>{item.rn}</td>
                  <td>{item.xn}</td>
                  <td>{item.xn1}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <SecondaryButton
            className="mb-4"
            ref={refEnd}
            onClick={() => scrollTo(refPseudoNumbers)}
          >
            Regresar al principio
          </SecondaryButton>
        </>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary" onClick={onHandleClose}>
          Cerrar
        </button>
      </Modal.Footer>
    </Modal>
  );
}
