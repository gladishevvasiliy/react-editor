import * as React from 'react'
import { isEmpty } from 'lodash'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { openModalConfirmRemove, openModalEditSymbol } from '../../../actions'
import CategoryOfSymbols from '../../presentational/CategoryOfSymbols/index'

class ShowSymbolsContainer extends React.Component {
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
    const { symbolList } = this.props
    return (
      <React.Fragment>
        {symbolList.map(category => {
          if (isEmpty(category.symbols)) {
            return null
          }
          return (
            <CategoryOfSymbols
              key={category.name}
              categoryId={category._id}
              name={category.name}
              symbols={category.symbols}
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
)(ShowSymbolsContainer)
