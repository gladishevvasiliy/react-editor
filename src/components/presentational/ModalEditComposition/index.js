import * as React from 'react'
import { Modal, Button } from 'react-bootstrap'
import EditCompositionContainer from '../../containers/EditCompositionContainer'

const ModalEditComposition = ({
  show,
  handleCloseModal,
  editingComposition,
  categoryId,
}) => (
  <Modal
    show={show}
    onHide={handleCloseModal}
    aria-labelledby="example-modal-sizes-title-lg"
    size="lg"
  >
    <Modal.Header closeButton>
      <Modal.Title>Редактирование попевки</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <EditCompositionContainer
        categoryId={categoryId}
        editingComposition={editingComposition}
      />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseModal}>
        Отмена
      </Button>
    </Modal.Footer>
  </Modal>
)

export default ModalEditComposition
