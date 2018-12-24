import * as React from 'react';
import { Category } from '../../../Models';
// @ts-ignore
import { Card } from 'react-bootstrap';
import ListOfSymbols from '../ListOfSymbols';
import './style.css';

interface Props {
  handleClick: Function;
}

const CategoryOfSymbols = (props: Category & Props) => {
  return (
    <Card className="categoryOfSymbols">
      <Card.Header id={props.name}>{props.name}</Card.Header>
      <ListOfSymbols symbols={props.symbols} handleClick={props.handleClick} />
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
