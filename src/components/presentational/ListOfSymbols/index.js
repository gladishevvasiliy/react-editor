import * as React from 'react'
import { Table } from 'react-bootstrap'
import SymbolRow from '../SymbolRow'
import './style.css'

const ListOfSymbols = props => {
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
          <th />
        </tr>
      </thead>
      <tbody>
        {props.symbols.map(symbol => (
          <SymbolRow
            key={symbol._id}
            symbol={symbol}
            handleClick={props.handleClick}
            handleClickRemoveButton={props.handleClickRemoveButton}
            handleClickEditButton={props.handleClickEditButton}
            categoryId={props.categoryId}
          />
        ))}
      </tbody>
    </Table>
  )
}

export default ListOfSymbols
