import * as React from 'react'
import { Modal, Button } from 'react-bootstrap'

export default ({ show, handleCloseModal, removeSymbol }) => (
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
)
