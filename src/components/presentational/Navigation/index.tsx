import * as React from 'react';
import { Nav, Form, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.css';

interface Props {
  nameOfCategories: Array<string>;
}

const Navigation = (props: Props) => (
  <React.Fragment>
    <Button className="add-category" variant="primary" size="xs" block onClick={props.openModalAddCategory}>
      <Row>
        <Col lg="1">
          <FontAwesomeIcon className="add-category-icon" icon="plus" />
        </Col>
        <Col lg="5"> Добавить категорию</Col>
      </Row>
    </Button>
    <Form.Control type="search" placeholder="Название символа..." />
    <Nav className="flex-column">
      {props.nameOfCategories.map(category => (
        <Nav.Link key={category} href={`#${category}`}>
          {category}
        </Nav.Link>
      ))}
    </Nav>
  </React.Fragment>
);
export default Navigation;
