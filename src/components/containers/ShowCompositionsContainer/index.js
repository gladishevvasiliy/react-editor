import * as React from 'react'
import { isEmpty } from 'lodash'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { openModalConfirmRemove, openModalEditSymbol } from '../../../actions'
import CategoryOfCompositions from '../../presentational/CategoryOfCompositions/index'

class ShowCompositionsContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  openModalConfirmRemove = (symbolId, categoryId) => {
    const { actions } = this.props
    actions.openModalConfirmRemove(symbolId, categoryId)
  }

  openModalEditSymbol = (symbol, categoryId) => {
    const { actions } = this.props
    actions.openModalEditSymbol(categoryId, symbol)
  }

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
              handleClickRemoveButton={this.openModalConfirmRemove}
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
    { openModalConfirmRemove, openModalEditSymbol },
    dispatch
  ),
})

const mapStateToProps = state => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowCompositionsContainer)
