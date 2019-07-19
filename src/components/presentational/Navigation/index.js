import * as React from 'react'
import { Nav, Form, Button, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HashLink as Link } from 'react-router-hash-link'

import './style.css'

const Navigation = props => (
  <React.Fragment>
    <Button
      className="add-category"
      variant="primary"
      size="xs"
      block
      onClick={props.openModalAddCategory}
    >
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
        <Link className="nav-link" key={category} to={`#${category}`}>
          {category}
        </Link>
      ))}
    </Nav>
  </React.Fragment>
)
export default Navigation
