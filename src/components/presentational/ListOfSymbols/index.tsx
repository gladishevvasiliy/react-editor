import * as React from 'react';
import { Table } from 'react-bootstrap';
import { Symbol } from '../../../Models';
import SymbolRow from '../SymbolRow';
import './style.css';

interface Props {
  symbols: Array<Symbol>;
  handleClick: Function;
}

const ListOfSymbols = (props: Props) => {
  return (
    <Table striped bordered hover className="categoryTable">
      <thead>
        <tr>
          {/* <th>#</th> */}
          <th>Вид</th>
          <th>Название</th>
          <th>Высота</th>
          <th>Кол-во звуков</th>
          <th>Опции</th>
        </tr>
      </thead>
      <tbody>
        {props.symbols.map(symbol => (
          <SymbolRow
            key={symbol._id}
            symbol={symbol}
            handleClick={props.handleClick}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default ListOfSymbols;
