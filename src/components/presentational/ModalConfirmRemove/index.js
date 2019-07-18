import * as React from 'react'
import { Modal, Button } from 'react-bootstrap'
import Loading from '../Loading'

export default class ModalConfirmRemove extends React.Component {
  state = {
    isFetching: false,
  }
  removeButtonHandler = () => {
    this.setState({ isFetching: true })
    const { remove } = this.props
    remove().then(resp => {
      console.log(resp.status)
      this.setState({ isFetching: false })
    })
  }

  render() {
    const { show, handleCloseModal, type = 'знамя' } = this.props
    const { isFetching } = this.state
    return (
      <Modal show={show} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Подтверждение</Modal.Title>
        </Modal.Header>
        <Modal.Body>Вы действительно хотите удалить это {type}?</Modal.Body>
        <Modal.Footer>
          {isFetching ? <Loading size="1x" /> : null}
          <Button variant="secondary" onClick={handleCloseModal}>
            Отмена
          </Button>
          <Button variant="danger" onClick={this.removeButtonHandler}>
            Да
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
