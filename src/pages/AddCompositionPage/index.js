import * as React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
/*
TODO
1. Получать от сервера и крюки и попевки в Маин
2. КИдаем это в редакс.
3. В Крюках подключаем крюки, в Попевках - попевки
4. В попевках пока только добавление и удаление
*/
import {
  setData,
  openModalConfirmRemove,
  openModalAddCategory,
  closeModalAddCategory,
  closeModalConfirmRemove,
  closeModalEditSymbol,
  removeSymbol,
} from '../../actions'

import ShowCompositionsContainer from '../../components/containers/ShowCompositionsContainer'
import Navigation from '../../components/presentational/Navigation'
import AddCompositionContainer from '../../components/containers/AddCompositionContainer'
import { API } from '../../res/constants'
import { removeSymbolFromServer } from '../../res/utils'
import ModalConfirmRemove from '../../components/presentational/ModalConfirmRemove'
import ModalEditSymbol from '../../components/presentational/ModalEditSymbol'
import ModalAddCategory from '../../components/presentational/ModalAddCategory'

class AddCompositionPage extends React.Component {
  handleCloseModalConfirmRemove = () => {
    const { actions } = this.props
    actions.closeModalConfirmRemove()
  }

  handleCloseModalEditSymbol = () => {
    const { actions } = this.props
    actions.closeModalEditSymbol()
  }

  removeSymbol = () => {
    const { actions, removingSymbolCategoryId, removingSymbolId } = this.props
    actions.removeSymbol(removingSymbolCategoryId, removingSymbolId)
    actions.closeModalConfirmRemove()
    const url = `${API}/${removingSymbolCategoryId}/remove/${removingSymbolId}`
    removeSymbolFromServer(url)
  }

  openModalAddCategory = () => {
    const { actions } = this.props
    actions.openModalAddCategory()
  }

  closeModalAddCategory = () => {
    const { actions } = this.props
    actions.closeModalAddCategory()
  }

  addCategory = e => {
    e.preventDefault()
    const { actions } = this.props
    actions.closeModalAddCategory()
    console.log(e.currentTarget)
  }

  render() {
    const {
      list,
      showModalConfirmRemove,
      showModalEditSymbol,
      showModalAddCategory,
    } = this.props
    return (
      <div>
        <Container fluid>
          <Row>
            <Col className="sideNav" sm={2}>
              <Navigation
                nameOfCategories={list.map(item => item.name)}
                openModalAddCategory={this.openModalAddCategory}
              />
            </Col>
            <Col className="mainContainer" sm={8}>
              <AddCompositionContainer />
              <ShowCompositionsContainer compositionList={list} />
            </Col>
          </Row>
          {/*<ModalConfirmRemove
            show={showModalConfirmRemove}
            handleCloseModal={this.handleCloseModalConfirmRemove}
            removeSymbol={this.removeSymbol}
          />
          <ModalEditSymbol
            show={showModalEditSymbol}
            handleCloseModal={this.handleCloseModalEditSymbol}
          />
          <ModalAddCategory
            show={showModalAddCategory}
            handleCloseModal={this.closeModalAddCategory}
            addCategory={this.addCategory}
          />*/}
        </Container>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      openModalConfirmRemove,
      closeModalConfirmRemove,
      closeModalEditSymbol,
      removeSymbol,
      openModalAddCategory,
      closeModalAddCategory,
    },
    dispatch
  ),
})

const mapStateToProps = state => ({
  list: state.compositions,
  // showModalConfirmRemove: state.modal.showModalConfirmRemove,
  // removingSymbolCategoryId: state.modal.removingSymbolCategoryId,
  // removingSymbolId: state.modal.removingSymbolId,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCompositionPage)
