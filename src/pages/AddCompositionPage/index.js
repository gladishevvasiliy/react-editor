import * as React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { isNil } from 'lodash'

import {
  openModalConfirmRemoveComposition,
  openModalAddCategory,
  closeModalAddCategory,
  closeModalConfirmRemoveComposition,
  // closeModalEditSymbol,
  removeComposition,
} from '../../actions'

import ShowCompositionsContainer from '../../components/containers/ShowCompositionsContainer'
import AddCompositionContainer from '../../components/containers/AddCompositionContainer'
import ModalConfirmRemove from '../../components/presentational/ModalConfirmRemove'
import ModalAddCategory from '../../components/presentational/ModalAddCategory'
import Navigation from '../../components/presentational/Navigation'
import {
  API_COMPOSITIONS,
  CREATE_COMPOSITIONS_CATEGORY,
} from '../../res/constants'
import {
  removeSymbolFromServer,
  sendNewCompositionCategoryToServer,
} from '../../res/utils'

// import ModalEditSymbol from '../../components/presentational/ModalEditSymbol'

class AddCompositionPage extends React.Component {
  handleCloseModalConfirmRemove = () => {
    const { actions } = this.props
    actions.closeModalConfirmRemoveComposition()
  }

  // handleCloseModalEditSymbol = () => {
  //   const { actions } = this.props
  //   actions.closeModalEditSymbol()
  // }

  removeComposition = () => {
    const {
      actions,
      removingCompositionCategoryId,
      removingCompositionId,
    } = this.props
    actions.removeComposition(
      removingCompositionCategoryId,
      removingCompositionId
    )
    actions.closeModalConfirmRemoveComposition()
    const url = `${API_COMPOSITIONS}/${removingCompositionCategoryId}/remove/${removingCompositionId}`
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

  addCategoryCompositions = e => {
    e.preventDefault()
    const { actions } = this.props
    const url = `${API_COMPOSITIONS}${CREATE_COMPOSITIONS_CATEGORY}`
    isNil(e.currentTarget[0].value)
      ? null
      : sendNewCompositionCategoryToServer(url, e.currentTarget[0].value)
    actions.closeModalAddCategory()
  }

  render() {
    const {
      list,
      showModalConfirmRemove,
      // showModalEditSymbol,
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
          <ModalConfirmRemove
            show={showModalConfirmRemove}
            handleCloseModal={this.handleCloseModalConfirmRemove}
            remove={this.removeComposition}
            type="попевку"
          />
          {/*<ModalEditSymbol
            show={showModalEditSymbol}
            handleCloseModal={this.handleCloseModalEditSymbol}
          />*/}
          <ModalAddCategory
            show={showModalAddCategory}
            handleCloseModal={this.closeModalAddCategory}
            addCategory={this.addCategoryCompositions}
          />
        </Container>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      openModalConfirmRemoveComposition,
      closeModalConfirmRemoveComposition,
      // closeModalEditSymbol,
      removeComposition,
      openModalAddCategory,
      closeModalAddCategory,
    },
    dispatch
  ),
})

const mapStateToProps = state => ({
  list: state.compositions,
  showModalConfirmRemove: state.modal.showModalConfirmRemoveComposition,
  removingCompositionCategoryId: state.modal.removingCompositionCategoryId,
  removingCompositionId: state.modal.removingCompositionId,
  showModalAddCategory: state.modal.showModalAddCategory,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCompositionPage)
