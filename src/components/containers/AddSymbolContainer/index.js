import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import { reduxForm, initialize, getFormValues } from 'redux-form'
import { Card } from 'react-bootstrap'
import { isNil } from 'lodash'
import AddSymbolForm from '../../presentational/AddSymbolForm'
import { addSymbol } from '../../../actions'
import { sendNewSymbolToServer } from '../../../res/utils'
import { API, API_SEND_NEW_SYMBOL } from '../../../res/constants'

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

class AddSymbolContainer extends React.Component {
  constructor(props) {
    super(props)

    const { initializePost } = this.props

    const symbolData = {
      name: '',
      pitch: '',
      sounds: '1',
      value: '<span></span>',
      opts: '',
      idOfCategory: '',
    }
    initializePost(symbolData)
  }

  onSendForm = event => {
    const { actions, list } = this.props
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

    actions.addSymbol(newSymbol, idOfCategory.value)
    const url = `${API}/${idOfCategory.value}${API_SEND_NEW_SYMBOL}`
    sendNewSymbolToServer(url, newSymbol)
  }

  render() {
    const { list, formStates } = this.props
    return (
      <Card>
        <Card.Header>Добавить символ</Card.Header>
        <AddSymbolForm
          onSendForm={this.onSendForm}
          preview={isNil(formStates) ? null : formStates.value}
          nameAndIdOfCategories={list.map(item => {
            return { nameOfCategory: item.name, idOfCategory: item._id }
          })}
        />
      </Card>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ addSymbol }, dispatch),
  initializePost: function(symbolData) {
    dispatch(initialize('symbolToServer', symbolData))
  },
})

const mapStateToProps = state => ({
  list: state.list,
  formStates: getFormValues('symbolToServer')(state),
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({ form: 'symbolToServer', touchOnChange: true, validate })
)(AddSymbolContainer)
