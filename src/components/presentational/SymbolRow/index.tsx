import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import { Symbol } from '../../../Models';
import './style.css';

interface Props {
  symbol: Symbol;
  handleClickRemoveButton: Function;
  categoryId: String;
}

const SymbolRow = ({ symbol, categoryId, handleClickRemoveButton }: Props) => {
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
          variant="danger"
        >
          <FontAwesomeIcon icon="trash-alt" />
        </Button>
      </th>
    </tr>
  );
};

export default SymbolRow;
