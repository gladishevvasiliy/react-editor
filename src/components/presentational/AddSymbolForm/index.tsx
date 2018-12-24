import * as React from 'react';
import { Form, Card, Col, Button } from 'react-bootstrap';
import './style.css';

export default class AddSymbolForm extends React.Component {
  render() {
    const { onSendForm, nameAndIdOfCategories } = this.props;
    console.log(nameAndIdOfCategories);
    return (
      <Card>
        <Card.Header>Добавить символ</Card.Header>
        <Form className="addSymbolForm" onSubmit={onSendForm}>
          <Form.Row>
            <Form.Group as={Col} md="3">
              <Form.Label>Название символа</Form.Label>
              <Form.Control
                name="name"
                required
                type="text"
                placeholder="Название символа"
              />
            </Form.Group>
            <Form.Group as={Col} md="3">
              <Form.Label>Высота</Form.Label>
              <Form.Control
                name="pitch"
                type="text"
                placeholder="Фа"
                required
              />
            </Form.Group>
            <Form.Group as={Col} md="3">
              <Form.Label>Кол-во звуков</Form.Label>
              <Form.Control
                required
                name="sounds"
                type="number"
                placeholder="1"
              />
            </Form.Group>
            <Form.Group as={Col} md="3">
              <Form.Label>Опции</Form.Label>
              <Form.Control
                required
                name="opts"
                type="text"
                placeholder="Равенство,Отсечка"
              />
              <Form.Text className="text-muted">
                Введите список опций через запятую (без пробелов) с заглавной
                буквы.
              </Form.Text>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="8">
              <Form.Label>Вид (html)</Form.Label>
              <Form.Control
                name="value"
                required
                type="text"
                placeholder="<span>...</span>"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Example select</Form.Label>
              <Form.Control as="select" md="4" name="idOfCategory">
                {nameAndIdOfCategories.map(item => (
                  <option key={item.idOfCategory} value={item.idOfCategory}>
                    {item.nameOfCategory}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Button type="submit">Добавить символ</Button>
        </Form>
      </Card>
    );
  }
}
