import * as React from 'react';
import { Nav, Form } from 'react-bootstrap';

interface Props {
  nameOfCategories: Array<string>;
}

const Navigation = (props: Props) => (
  <React.Fragment>
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
