import * as React from 'react';
import { Symbol } from '../../../Models';
import './style.css';

interface Props {
  symbol: Symbol;
}

const SymbolRow = ({ symbol }: Props) => {
  console.log(symbol);
  return (
    <tr>
      <th>{symbol.id}</th>
      <th dangerouslySetInnerHTML={{ __html: symbol.value }} />
      <th>{symbol.name}</th>
      <th>{symbol.pitch}</th>
      <th>{symbol.sounds}</th>
      <th>{symbol.opts}</th>
    </tr>
  );
};

export default SymbolRow;

// {
// <Card.Title>Special title treatment</Card.Title>
// <Card.Text>
//   With supporting text below as a natural lead-in to additional content.
// </Card.Text>
// }
