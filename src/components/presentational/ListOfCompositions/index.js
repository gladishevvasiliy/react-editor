import * as React from 'react'
import { Table } from 'react-bootstrap'
import CompositionRow from '../CompositionRow'
import './style.css'

const ListOfCompositions = props => {
  return (
    <Table striped bordered hover className="categoryTable">
      <thead>
        <tr>
          {/* <th>#</th> */}
          <th>Вид</th>
          <th>Название</th>
          <th>Глас</th>

          <th />
        </tr>
      </thead>
      <tbody>
        {props.compositions.map(composition => (
          <CompositionRow
            key={composition._id}
            composition={composition}
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

export default ListOfCompositions
