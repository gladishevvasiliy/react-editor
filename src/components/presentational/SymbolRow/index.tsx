import * as React from 'react';
import { Symbol } from '../../../Models';
import './style.css';

interface Props {
  symbol: Symbol;
  handleClick: Function;
}

const SymbolRow = ({ symbol, handleClick}: Props) => {
  return (
    <tr id={symbol._id} key={symbol._id} onClick={handleClick}>
      <th className="symbolId">{symbol._id}</th>
      <th><div dangerouslySetInnerHTML={{ __html: symbol.value }} className="symbol-view" /></th>
      <th>{symbol.name}</th>
      <th>{symbol.pitch}</th>
      <th>{symbol.sounds}</th>
      <th>{symbol.opts.join(", ")}</th>
    </tr>
  );
};

export default SymbolRow;