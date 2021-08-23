import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

export const ModalPage = ({
  show,
  children,
  message,
  title,
  hide,
  onHide,
}) => {
  return (
    <Modal
      show={show}
      centered
      onHide={() => {
        if (hide) {
          onHide();
        }
      }}
    >
      <Modal.Header closeButton={hide}>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{whiteSpace: "pre-wrap"}}>{message}</Modal.Body>
      <Modal.Footer>{children}</Modal.Footer>
    </Modal>
  );
};
