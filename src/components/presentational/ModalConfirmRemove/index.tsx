import * as React from 'react';
import { Modal, Button } from 'react-bootstrap';

type ModalConfirmRemove = {
  show: boolean,
  handleCloseModal: Function,
  removeSymbol: Function
}

export default ({ show, handleCloseModal, removeSymbol}: ModalConfirmRemove) => (
  <Modal show={show} onHide={handleCloseModal}>
    <Modal.Header closeButton>
      <Modal.Title>Подтверждение</Modal.Title>
    </Modal.Header>
    <Modal.Body>Вы действительно хотите удалить это знамя?</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseModal}>
        Отмена
      </Button>
      <Button variant="danger" onClick={removeSymbol}>
        Да
      </Button>
    </Modal.Footer>
  </Modal>
);
