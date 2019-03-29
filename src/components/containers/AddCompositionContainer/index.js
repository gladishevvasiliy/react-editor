import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import { reduxForm, initialize, getFormValues } from 'redux-form'
import { Card } from 'react-bootstrap'
import { isNil, mapValues } from 'lodash'
import AddCompositionForm from '../../presentational/AddCompositionForm'
import { addComposition } from '../../../actions'
import { sendNewCompositionToServer } from '../../../res/utils'
import { API_COMPOSITIONS, API_SEND_NEW } from '../../../res/constants'

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

class AddCompositionContainer extends React.Component {
  constructor(props) {
    super(props)

    const { initializePost } = this.props

    const symbolData = {
      name: '',
      tone: '',
      value: '<span></span>',
      idOfCategory: '',
    }
    initializePost(symbolData)
  }

  onSendForm = event => {
    const { actions, list } = this.props
    event.preventDefault()
    const { name, tone, idOfCategory } = event.target.elements
    const symbols = []
    mapValues(event.target.elements, value => {
      value.name.includes('value') ? symbols.push(value.value) : null
    })

    console.log(symbols)
    const idInCategory =
      list.find(category => category._id === idOfCategory.value).compositions
        .length + 1

    const newComposition = {
      id: idInCategory,
      name: name.value,
      tone: tone.value,
      value: symbols,
    }

    actions.addComposition(newComposition, idOfCategory.value)
    const url = `${API_COMPOSITIONS}/${idOfCategory.value}${API_SEND_NEW}`
    sendNewCompositionToServer(url, newComposition)
  }

  render() {
    const { list, formStates } = this.props
    return (
      <Card>
        <Card.Header>Добавить попевку</Card.Header>
        <AddCompositionForm
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
  actions: bindActionCreators({ addComposition }, dispatch),
  initializePost: function(compositionData) {
    dispatch(initialize('compositionToServer', compositionData))
  },
})

const mapStateToProps = state => ({
  list: state.compositions,
  formStates: getFormValues('compositionToServer')(state),
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({ form: 'compositionToServer', touchOnChange: true })
)(AddCompositionContainer)
