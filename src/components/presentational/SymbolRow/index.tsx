import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import { Symbol } from '../../../Models';
import './style.css';

interface Props {
  symbol: Symbol;
  handleClickRemoveButton: Function;
  handleClickEditButton: Function;
  categoryId: String;
}

const SymbolRow = ({ symbol, categoryId, handleClickRemoveButton, handleClickEditButton }: Props) => {
  return (
    <tr id={symbol._id} key={symbol._id}>
      {/* <th className="symbolId">{symbol._id}</th> */}
      <th>
        <div
          dangerouslySetInnerHTML={{ __html: symbol.value }}
          className="symbol-view"
        />
      </th>
      <th>{symbol.name}</th>
      <th>{symbol.pitch}</th>
      <th>{symbol.sounds}</th>
      <th>{symbol.opts.join(', ')}</th>
      <th>
        <Button
          onClick={props => {
            handleClickRemoveButton(categoryId, symbol._id);
          }}
          className="symbol-row-button"
          variant="danger"
        >
          <FontAwesomeIcon icon="trash-alt" />
        </Button>
        <Button
          onClick={props => {
            handleClickEditButton(categoryId, symbol);
          }}
          variant="primary"
          className="symbol-row-button"
        >
          <FontAwesomeIcon icon="pen" />
        </Button>
      </th>
    </tr>
  );
};

export default SymbolRow;
