import * as React from 'react';
import { Table } from 'react-bootstrap';
import { Symbol } from '../../../Models';
import SymbolRow from '../SymbolRow';
import './style.css';

interface Props {
  list: Array<Symbol>;
}

const ListOfSymbols = (props: Props) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Вид</th>
          <th>Название</th>
          <th>Высота</th>
          <th>Кол-во звуков</th>
          <th>Опции</th>
        </tr>
      </thead>
      <tbody>
        {props.list.map(symbol => (
          <SymbolRow symbol={symbol} />
        ))}
      </tbody>
    </Table>
  );
};

export default ListOfSymbols;
