import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import { reduxForm, initialize, getFormValues } from 'redux-form'
import { get, mapKeys } from 'lodash'
import AddCompositionForm from '../../presentational/AddCompositionForm'
import { addSymbol, editSymbol } from '../../../actions'
import { sendEditedCompositionToServer } from '../../../res/utils'
import { API_COMPOSITIONS, API_EDIT_SYMBOL } from '../../../res/constants'

class EditCompositionContainer extends React.Component {
  constructor(props) {
    super(props)

    const { initializePost, editingComposition, categoryId } = this.props
    const compositionData = {
      name: editingComposition.name,
      tones: editingComposition.tone
        .split(',')
        .map((item) => ({ label: item, value: parseInt(item) })),
      _id: editingComposition._id,
      valueLength: editingComposition?.value?.length,
      viewLength: editingComposition?.view?.length,
      categoryId,
    }

    editingComposition.value.map(
      (item, index) => (compositionData[`value-${index}`] = item)
    )
    editingComposition.view.map(
      (item, index) => (compositionData[`view-${index}`] = item)
    )
    editingComposition.valueText.map(
      (item, index) => (compositionData[`text-${index}`] = item)
    )
    console.log({ compositionData })
    initializePost(compositionData)
  }

  onSendForm = (event) => {
    event.preventDefault()
    const { formState, categoryId } = this.props

    const { name, tones, _id } = formState

    const symbols = []
    const viewSymbols = []
    const valueText = []
    for (let i = 0; i < parseInt(formState.valueLength); i++) {
      valueText.push('-')
    }
    mapKeys(formState, (value, key) => {
      key.includes('value-') ? symbols.push(value) : null
    })
    mapKeys(formState, (value, key) => {
      key.includes('view-') ? viewSymbols.push(value) : null
    })
    mapKeys(formState, (value, key) => {
      key.includes('text-')
        ? (valueText[parseInt(key.split('text-')[1])] = value)
        : null
    })

    // const idInCategory =
    //   list.find((category) => category._id === categoryId).compositions.length +
    //   1

    const newComposition = {
      // id: idInCategory,
      _id,
      name: name,
      view: viewSymbols,
      tone: tones.map((tone) => tone.value).join(','),
      value: symbols,
      valueText,
    }
    console.log({ newComposition })
    // actions.editSymbol(newComposition, categoryId.value)
    const url = `${API_COMPOSITIONS}/${categoryId}${API_EDIT_SYMBOL}/${newComposition._id}`
    sendEditedCompositionToServer(url, newComposition)
  }

  render() {
    const { list, formState } = this.props

    let value = []
    let view = []

    for (const key in formState) {
      if (key.indexOf('value-') !== -1) {
        value.push(formState[key])
      }
      if (key.indexOf('view-') !== -1) {
        view.push(formState[key])
      }
    }

    return (
      <AddCompositionForm
        onSendForm={this.onSendForm}
        preview={value.join('  ')}
        viewPreview={formState ? view.join('  ') : null}
        nameAndIdOfCategories={list.map((item) => {
          return { label: item.name, value: item._id }
        })}
        formState={formState}
        isEditing
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ addSymbol, editSymbol }, dispatch),
  initializePost: function (compositionData) {
    dispatch(initialize('compositionToServer', compositionData))
  },
})

const mapStateToProps = (state) => ({
  list: state.compositions,
  // editingSymbol: state.modal.editingSymbol,
  formState: getFormValues('compositionToServer')(state),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'compositionToServer', touchOnChange: true /* validate*/ })
)(EditCompositionContainer)
