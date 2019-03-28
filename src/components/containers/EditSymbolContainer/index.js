import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import { reduxForm, initialize } from 'redux-form'
import { isNil } from 'lodash'
import AddSymbolForm from '../../presentational/AddSymbolForm'
import { addSymbol, editSymbol } from '../../../actions'
import { editedSymbolSendToServer } from '../../../res/utils'
import { API, API_EDIT_SYMBOL } from '../../../res/constants'

const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Введите название знамени'
  }
  if (!values.pitch) {
    errors.pitch = 'Введите помету (или пометы)'
  }
  if (!values.sounds) {
    errors.sounds = 'Введите количество звуков в знамени'
  } else if (values.sounds < 1) {
    errors.sounds = 'Количество звуков не должно быть меньше 1'
  }
  if (!values.value) {
    errors.value = 'Введите html код знамени'
  }
  if (!values.idOfCategory) {
    errors.name =
      'Выберите категорию крюка - статья, стрела простая, тихий голубчик'
  }
  return errors
}

class EditSymbolContainer extends React.Component {
  constructor(props) {
    super(props)

    const { initializePost, editingSymbol } = this.props
    const symbolData = {
      name: editingSymbol.name,
      pitch: editingSymbol.pitch,
      sounds: editingSymbol.sounds,
      value: editingSymbol.value,
      opts: editingSymbol.opts.join(', '),
      idOfCategory: editingSymbol._id,
    }
    initializePost(symbolData)
  }

  onSendForm = event => {
    const { actions, list, editingSymbol } = this.props
    event.preventDefault()
    const {
      name,
      pitch,
      sounds,
      opts,
      value,
      idOfCategory,
    } = event.target.elements

    const idInCategory =
      list.find(category => category._id === idOfCategory.value).symbols
        .length + 1

    const newSymbol = {
      _id: editingSymbol._id,
      id: idInCategory,
      name: name.value,
      pitch: pitch.value,
      sounds: sounds.value,
      opts:
        opts.value.length === 0
          ? []
          : opts.value.match(/[^,\s][^\,][А-я][^,\s]*/gi),
      value: value.value,
    }
    actions.editSymbol(newSymbol, idOfCategory.value)
    const url = `${API}/${idOfCategory.value}${API_EDIT_SYMBOL}/${
      editingSymbol._id
    }`
    editedSymbolSendToServer(url, newSymbol)
  }

  render() {
    const { list, editingSymbol } = this.props
    return (
      <AddSymbolForm
        onSendForm={this.onSendForm}
        nameAndIdOfCategories={list.map(item => {
          return { nameOfCategory: item.name, idOfCategory: item._id }
        })}
        isEditing={!isNil(editingSymbol)}
      />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ addSymbol, editSymbol }, dispatch),
  initializePost: function(symbolData) {
    dispatch(initialize('symbolToServer', symbolData))
  },
})

const mapStateToProps = state => ({
  list: state.list,
  editingSymbol: state.modal.editingSymbol,
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({ form: 'symbolToServer', touchOnChange: true, validate })
)(EditSymbolContainer)
