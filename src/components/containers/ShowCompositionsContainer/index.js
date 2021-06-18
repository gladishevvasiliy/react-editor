import * as React from 'react'
import { isEmpty } from 'lodash'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  openModalConfirmRemoveComposition,
  openModalEditSymbol,
} from '../../../actions'
import CategoryOfCompositions from '../../presentational/CategoryOfCompositions/index'
import ModalEditComposition from '../../presentational/ModalEditComposition'

class ShowCompositionsContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showModalEditComposition: false,
      editingComposition: {},
    }
  }
  openModalConfirmRemoveComposition = (compositionId, categoryId) => {
    const { actions } = this.props
    actions.openModalConfirmRemoveComposition(compositionId, categoryId)
  }

  openModalEditSymbol = (categoryId, composition) => {
    console.log({ categoryId, composition })

    this.setState({
      showModalEditComposition: true,
      editingComposition: composition,
      categoryId,
    })
  }

  handleCloseModalEditSymbol = () => {
    this.setState({ showModalEditComposition: false })
  }

  render() {
    const { compositionList } = this.props

    return (
      <React.Fragment>
        {compositionList.map((category) => {
          if (isEmpty(category.compositions)) {
            return null
          }
          return (
            <CategoryOfCompositions
              key={category.name}
              categoryId={category._id}
              name={category.name}
              compositions={category.compositions}
              handleClick={this.onClickRow}
              handleClickRemoveButton={this.openModalConfirmRemoveComposition}
              handleClickEditButton={this.openModalEditSymbol}
            />
          )
        })}
        <ModalEditComposition
          show={this.state.showModalEditComposition}
          handleCloseModal={this.handleCloseModalEditSymbol}
          editingComposition={this.state.editingComposition}
          categoryId={this.state.categoryId}
        />
      </React.Fragment>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    { openModalConfirmRemoveComposition, openModalEditSymbol },
    dispatch
  ),
})

const mapStateToProps = () => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowCompositionsContainer)
