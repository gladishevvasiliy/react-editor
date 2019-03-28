import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'react-bootstrap'
import './style.css'

const CompositionRow = ({
  composition,
  categoryId,
  handleClickRemoveButton,
  handleClickEditButton,
}) => {
  return (
    <tr id={composition._id} key={composition._id}>
      {/* <th className="symbolId">{symbol._id}</th> */}
      <th>
        <div
          dangerouslySetInnerHTML={{ __html: composition.value.join(' ') }}
          className="symbol-view"
        />
      </th>
      <th>{composition.name}</th>
      <th>{composition.tone}</th>
      <th>
        <Button
          onClick={props => {
            handleClickRemoveButton(categoryId, composition._id)
          }}
          className="symbol-row-button"
          variant="danger"
        >
          <FontAwesomeIcon icon="trash-alt" />
        </Button>
        <Button
          onClick={props => {
            handleClickEditButton(categoryId, composition)
          }}
          variant="primary"
          className="symbol-row-button"
        >
          <FontAwesomeIcon icon="pen" />
        </Button>
      </th>
    </tr>
  )
}

export default CompositionRow
