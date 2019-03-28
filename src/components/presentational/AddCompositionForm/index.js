import * as React from 'react'
import { Form, Col, Button, Card } from 'react-bootstrap'
import { Field } from 'redux-form'
import './style.css'

export default class AddCompositionForm extends React.Component {
  state = {
    length: 1,
  }

  onChangeLength = e => this.setState({ length: e.target.value })

  renderValueFields = length => {
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
      {touched &&
        (error && (
          <Form.Control.Feedback type="invalid" className="feedback-form">
            {error}
          </Form.Control.Feedback>
        ))}
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
        {nameAndIdOfCategories.map(item => (
          <option key={item.idOfCategory} value={item.idOfCategory}>
            {item.nameOfCategory}
          </option>
        ))}
      </Form.Control>
      {touched &&
        (error && (
          <Form.Control.Feedback type="invalid" className="feedback-form">
            {error}
          </Form.Control.Feedback>
        ))}
    </React.Fragment>
  )

  render() {
    const { onSendForm, nameAndIdOfCategories, isEditing, preview } = this.props
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
                placeholder="Параклит Фа с задержкой"
              />
            </Form.Group>
            <Form.Group as={Col} md="3">
              <Field
                name="tone"
                component={this.renderInputField}
                type="text"
                placeholder="8"
                title="Глас(ы)"
              />
            </Form.Group>
            <Form.Group as={Col} md="1">
              <Form.Label>Количество слогов</Form.Label>
              <Form.Control
                name="length"
                type="number"
                value={this.state.length}
                onChange={this.onChangeLength}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group>
              <Field
                name="idOfCategory"
                component={this.renderSelectField}
                title="Категория"
                md="4"
                nameAndIdOfCategories={nameAndIdOfCategories}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            {this.renderValueFields(this.state.length).map(field => (
              <Form.Group as={Col} md="2">
                {field}
              </Form.Group>
            ))}
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
