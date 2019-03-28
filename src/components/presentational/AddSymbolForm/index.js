import * as React from 'react'
import { Form, Col, Button, Card } from 'react-bootstrap'
import { Field } from 'redux-form'
import './style.css'

export default class AddSymbolForm extends React.Component {
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
                title="Название символа"
                placeholder="Параклит Фа с задержкой"
              />
            </Form.Group>
            <Form.Group as={Col} md="3">
              <Field
                name="pitch"
                component={this.renderInputField}
                type="text"
                placeholder="Фа"
                title="Помета"
              />
            </Form.Group>
            <Form.Group as={Col} md="3">
              <Field
                name="sounds"
                component={this.renderInputField}
                type="number"
                placeholder="1"
                title="Кол-во звуков"
              />
            </Form.Group>
            <Form.Group as={Col} md="3">
              <Field
                name="opts"
                component={this.renderInputField}
                type="text"
                placeholder="Равенство,Отсечка"
                title="Опции"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="8">
              <Field
                name="value"
                component={this.renderInputField}
                type="text"
                placeholder="<span>...</span>"
                title="Вид (html)"
              />
            </Form.Group>
            <Form.Group>
              <Field
                name="idOfCategory"
                component={this.renderSelectField}
                title="Вид (html)"
                md="4"
                nameAndIdOfCategories={nameAndIdOfCategories}
              />
            </Form.Group>
          </Form.Row>
          <Button type="submit">
            {isEditing ? 'Сохранить изменения' : 'Добавить символ'}
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
