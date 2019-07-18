import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import { reduxForm, initialize, getFormValues } from 'redux-form'
import { Card } from 'react-bootstrap'
import { isNil } from 'lodash'
import AddSymbolForm from '../../presentational/AddSymbolForm'
import { addSymbol } from '../../../actions'
import { sendNewSymbolToServer } from '../../../res/utils'
import { API_KRUK, API_SEND_NEW } from '../../../res/constants'

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
    this.state = {
      options: [],
      pitch: '',
      categoryId: '',
      isFetching: false,
    }
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
    this.setState({ isFetching: true })
    const { actions, list } = this.props
    const { options, pitch, categoryId } = this.state
    event.preventDefault()
    const { name, sounds, value } = event.target.elements
    const idInCategory =
      list.find(category => category._id === categoryId).symbols.length + 1

    const newSymbol = {
      id: idInCategory,
      name: name.value,
      pitch: pitch,
      sounds: sounds.value,
      opts: isNil(options) ? [] : options.map(opt => opt.label),
      value: value.value,
    }

    actions.addSymbol(newSymbol, categoryId)
    const url = `${API_KRUK}/${categoryId}${API_SEND_NEW}`
    sendNewSymbolToServer(url, newSymbol).then(resp => {
      console.log(resp.status)
      this.setState({ isFetching: false })
    })
  }

  handleChangeOptions = selected => {
    this.setState({ options: selected })
  }

  handleChangePitch = selected => {
    this.setState({ pitch: selected.label })
  }

  handleChangeCategory = selected => {
    this.setState({ categoryId: selected.value })
  }

  render() {
    const { list, formStates } = this.props
    const { isFetching } = this.state
    return (
      <Card>
        <Card.Header>Добавить символ</Card.Header>
        <AddSymbolForm
          isFetching={isFetching}
          onSendForm={this.onSendForm}
          handleChangeOptions={this.handleChangeOptions}
          handleChangePitch={this.handleChangePitch}
          handleChangeCategory={this.handleChangeCategory}
          preview={isNil(formStates) ? null : formStates.value}
          nameAndIdOfCategories={list.map(item => {
            return { label: item.name, value: item._id }
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
