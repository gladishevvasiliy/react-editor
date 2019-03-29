import * as React from 'react'
import { isEmpty } from 'lodash'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  openModalConfirmRemoveComposition,
  openModalEditSymbol,
} from '../../../actions'
import CategoryOfCompositions from '../../presentational/CategoryOfCompositions/index'

class ShowCompositionsContainer extends React.Component {
  openModalConfirmRemoveComposition = (compositionId, categoryId) => {
    const { actions } = this.props
    actions.openModalConfirmRemoveComposition(compositionId, categoryId)
  }

  // openModalEditSymbol = (symbol, categoryId) => {
  //   const { actions } = this.props
  //   actions.openModalEditSymbol(categoryId, symbol)
  // }

  render() {
    const { compositionList } = this.props

    return (
      <React.Fragment>
        {compositionList.map(category => {
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
      </React.Fragment>
    )
  }
}
const mapDispatchToProps = dispatch => ({
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
