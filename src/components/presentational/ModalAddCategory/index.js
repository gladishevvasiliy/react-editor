import * as React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

export default ({ show, handleCloseModal, addCategory }) => (
  <Modal show={show} onHide={handleCloseModal}>
    <Modal.Header closeButton>
      <Modal.Title>Добавление категории</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={addCategory}>
        <Form.Label>Название категории знамен</Form.Label>
        <Form.Control type="text" placeholder="Параклит" />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseModal}>
        Отмена
      </Button>
    </Modal.Footer>
  </Modal>
)
