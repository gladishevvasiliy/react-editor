import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import { reduxForm, initialize, getFormValues } from 'redux-form'
import { Card } from 'react-bootstrap'
import { isNil, mapKeys, get } from 'lodash'
import AddCompositionForm from '../../presentational/AddCompositionForm'
import { addComposition } from '../../../actions'
import { sendNewCompositionToServer } from '../../../res/utils'
import { API_COMPOSITIONS, API_SEND_NEW } from '../../../res/constants'

const validate = (values) => {
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

    this.state = {
      tones: [],
    }
    const symbolData = {
      name: '',
      tones: [],
      idOfCategory: '',
    }
    initializePost(symbolData)
  }

  onSendForm = (event) => {
    event.preventDefault()

    const { actions, list, formData } = this.props

    const formValues = get(formData, 'values', {})

    const { name, tones, idOfCategory, view } = formValues
    const symbols = []
    const viewSymbols = []
    mapKeys(formValues, (value, key) => {
      key.includes('value') ? symbols.push(value) : null
    })
    mapKeys(formValues, (value, key) => {
      key.includes('view') ? viewSymbols.push(value) : null
    })
    const idInCategory =
      list.find((category) => category._id === idOfCategory.value).compositions
        .length + 1

    const newComposition = {
      id: idInCategory,
      name: name,
      view: viewSymbols,
      tone: tones.map((tone) => tone.value).join(','),
      value: symbols,
    }
    console.log(newComposition)
    actions.addComposition(newComposition, idOfCategory.value)
    const url = `${API_COMPOSITIONS}/${idOfCategory.value}${API_SEND_NEW}`
    sendNewCompositionToServer(url, newComposition)
  }

  render() {
    const { list, formStates } = this.props
    let value = []
    let view = []

    for (const key in formStates) {
      if (key.indexOf('value') !== -1) {
        value.push(formStates[key])
      }
      if (key.indexOf('view') !== -1) {
        view.push(formStates[key])
      }
    }

    return (
      <Card>
        <Card.Header>Добавить попевку</Card.Header>
        <AddCompositionForm
          onSendForm={this.onSendForm}
          handleChangeTones={this.handleChangeTones}
          preview={value.join('  ')}
          viewPreview={formStates ? view.join('  ') : null}
          nameAndIdOfCategories={list.map((item) => {
            return { label: item.name, value: item._id }
          })}
        />
      </Card>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ addComposition }, dispatch),
  initializePost: function (compositionData) {
    dispatch(initialize('compositionToServer', compositionData))
  },
})

const mapStateToProps = (state) => ({
  formData: state.form.compositionToServer,
  list: state.compositions,
  formStates: getFormValues('compositionToServer')(state),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'compositionToServer', touchOnChange: true })
)(AddCompositionContainer)
