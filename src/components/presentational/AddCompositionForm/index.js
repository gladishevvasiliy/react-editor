import * as React from 'react'
import { Form, Col, Button, Card } from 'react-bootstrap'
import { Field } from 'redux-form'
import { RFReactMultiSelect, RFReactSelect } from '../../../res/RFReactSelect'
import { TONES } from '../../../res/constants'
import './style.css'

export default class AddCompositionForm extends React.Component {
  state = {
    valueLength: 1,
    viewLength: 1,
  }

  onChangeValueLength = (e) => this.setState({ valueLength: e.target.value })
  onChangeViewLength = (e) => this.setState({ viewLength: e.target.value })

  renderValueFields = (length) => {
    const fields = []
    let index = 0
    while (index < length) {
      fields.push(
        <Field
          name={`value-${index}`}
          component={this.renderInputField}
          type="text"
          title={`${index + 1}`}
        />
      )
      index = index + 1
    }
    return fields
  }

  renderViewFields = (length) => {
    const fields = []
    let index = 0
    while (index < length) {
      fields.push(
        <Field
          name={`view-${index}`}
          component={this.renderInputField}
          type="text"
          title={`${index + 1}`}
        />
      )
      index = index + 1
    }
    return fields
  }

  renderInputField = ({
    input,
    title,
    type,
    placeholder,
    meta: { touched, error },
  }) => (
    <React.Fragment>
      <Form.Label>{title}</Form.Label>
      <Form.Control
        name={input.name}
        type={type}
        placeholder={placeholder}
        value={input.value}
        onChange={input.onChange}
      />
      {touched && error && (
        <Form.Control.Feedback type="invalid" className="feedback-form">
          {error}
        </Form.Control.Feedback>
      )}
    </React.Fragment>
  )

  renderSelectField = ({
    input,
    title,
    nameAndIdOfCategories,
    md,
    meta: { touched, error },
  }) => (
    <React.Fragment>
      <Form.Label>{title}</Form.Label>
      <Form.Control
        name={input.name}
        as="select"
        md={md}
        value={input.value}
        onChange={input.onChange}
      >
        {nameAndIdOfCategories.map((item) => (
          <option key={item.idOfCategory} value={item.idOfCategory}>
            {item.nameOfCategory}
          </option>
        ))}
      </Form.Control>
      {touched && error && (
        <Form.Control.Feedback type="invalid" className="feedback-form">
          {error}
        </Form.Control.Feedback>
      )}
    </React.Fragment>
  )

  render() {
    const {
      onSendForm,
      nameAndIdOfCategories,
      isEditing,
      preview,
      viewPreview,
      handleChangeTones,
    } = this.props
    return (
      <div>
        <Form className="addSymbolForm" onSubmit={onSendForm}>
          <Form.Row>
            <Form.Group as={Col} md="3">
              <Field
                name="name"
                component={this.renderInputField}
                type="text"
                title="Название попевки"
                placeholder="Площадка"
              />
            </Form.Group>
            <Form.Group as={Col} md="2">
              <Form.Label>{'Глас(ы)'}</Form.Label>
              <Field
                name="tones"
                list="tones"
                options={TONES}
                onChange={handleChangeTones}
                component={RFReactMultiSelect}
                className="input"
              />
            </Form.Group>
            <Form.Group as={Col} md="2">
              <Form.Label>Cлогов в разводе</Form.Label>
              <Form.Control
                name="length"
                type="number"
                value={this.state.valueLength}
                onChange={this.onChangeValueLength}
              />
            </Form.Group>
            <Form.Group as={Col} md="2">
              <Form.Label>Cлогов в куче</Form.Label>
              <Form.Control
                name="length"
                type="number"
                value={this.state.viewLength}
                onChange={this.onChangeViewLength}
              />
            </Form.Group>
            <Form.Group as={Col} md="2">
              <Form.Label>Категория</Form.Label>
              <Field
                name="idOfCategory"
                options={nameAndIdOfCategories}
                component={RFReactSelect}
                className="input"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <p>Тайнозамкненное начертание</p>
          </Form.Row>
          <Form.Row>
            {this.renderViewFields(this.state.viewLength).map(
              (field, index) => (
                <Form.Group as={Col} md="2" key={index}>
                  {field}
                </Form.Group>
              )
            )}
            <div
              dangerouslySetInnerHTML={{ __html: viewPreview }}
              className="symbol-view"
            />
          </Form.Row>
          <Form.Row>
            <p>Развод</p>
          </Form.Row>
          <Form.Row>
            {this.renderValueFields(this.state.valueLength).map(
              (field, index) => (
                <Form.Group as={Col} md="2" key={index}>
                  {field}
                </Form.Group>
              )
            )}
          </Form.Row>
          <Button type="submit">
            {isEditing ? 'Сохранить изменения' : 'Добавить попевку'}
          </Button>
        </Form>
        <Card>
          <Card.Header>Превью</Card.Header>
          <Card.Body>
            <Card.Text>
              <div
                dangerouslySetInnerHTML={{ __html: preview }}
                className="symbol-view"
              />
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  }
}
