import * as React from 'react'
import { Modal, Button } from 'react-bootstrap'

const ModalConfirmRemove = ({
  show,
  handleCloseModal,
  remove,
  type = 'знамя',
}) => (
  <Modal show={show} onHide={handleCloseModal}>
    <Modal.Header closeButton>
      <Modal.Title>Подтверждение</Modal.Title>
    </Modal.Header>
    <Modal.Body>Вы действительно хотите удалить это {type}?</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseModal}>
        Отмена
      </Button>
      <Button variant="danger" onClick={remove}>
        Да
      </Button>
    </Modal.Footer>
  </Modal>
)

export default ModalConfirmRemove
