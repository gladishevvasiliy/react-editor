import * as React from 'react';
import { Category } from '../../../Models';
// @ts-ignore
import { Card } from 'react-bootstrap';
import ListOfSymbols from '../ListOfSymbols';
import './style.css';

const CategoryOfSymbols = (props: Category) => {
  return (
    <Card className="categoryOfSymbols">
      <Card.Header id={props.name}>{props.name}</Card.Header>
      <ListOfSymbols list={props.list} />
      <Card.Body />
    </Card>
  );
};

export default CategoryOfSymbols;

{
  /* <Card.Title>Special title treatment</Card.Title>
<Card.Text>
  With supporting text below as a natural lead-in to additional content.
</Card.Text>
<Button>Go somewhere</Button> */
}
