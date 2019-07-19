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
      <th>
        <div className="composition-row">
          {composition.value.map((item, index) => (
            <div className="composition-column" key={index}>
              <table className="compositions-category">
                <tr>
                  <th>{index + 1}</th>
                </tr>
                <tr>
                  <th>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item,
                      }}
                      className="composition-view"
                    />
                  </th>
                </tr>
                <tr>
                  <th className="composition-src">{item}</th>
                </tr>
              </table>
            </div>
          ))}
        </div>
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
