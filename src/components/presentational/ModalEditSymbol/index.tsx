import * as React from 'react';
import { Modal, Button } from 'react-bootstrap';
import EditSymbolContainer from '../../containers/EditSymbolContainer';

type ModalConfirmRemove = {
  show: boolean,
  handleCloseModal: Function,
  editSymbol: Function
}

export default ({ show, handleCloseModal }: ModalConfirmRemove) => (
  <Modal show={show} onHide={handleCloseModal} aria-labelledby="example-modal-sizes-title-lg" size="lg">
    <Modal.Header closeButton>
      <Modal.Title>Редактирование символа</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <EditSymbolContainer/>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseModal}>
        Отмена
      </Button>
    </Modal.Footer>
  </Modal>
);
