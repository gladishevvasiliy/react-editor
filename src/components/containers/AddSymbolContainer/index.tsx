import React, { Component } from 'react'
import { Form, InputGroup, Col, Button } from 'react-bootstrap'

export default class AddSymbolContainer extends React.Component {
  render() {
    return (
      <div className="addSymbolForm">
        <Form
        onSubmit={e => console.log(e)}
      >
        <Form.Row>
          <Form.Group as={Col} md="3">
            <Form.Label>Название символа</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Название символа"
            />
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Высота</Form.Label>
              <Form.Control
                type="text"
                placeholder="Фа"
                required
              />
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Кол-во звуков</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="1"
              
            />
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Опции</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Равенство,Отсечка"
            />
            <Form.Text className="text-muted">
            Введите список опций через запятую (без пробелов) с заглавной буквы.
            </Form.Text>
          </Form.Group>
        </Form.Row>
        <Form.Row>
        <Form.Group as={Col} md="12">
            <Form.Label>Вид (html)</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="<span>...</span>"
            />
          </Form.Group>
        </Form.Row>
        <Button type="submit">Добавить символ</Button>
      </Form>
      </div>
    )
  }
}
