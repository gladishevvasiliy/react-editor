import * as React from 'react';
import { Category } from '../../../Models';
import CategoryOfSymbols from '../../presentational/CategoryOfSymbols/index';

interface IShowSymbolsContainerProps {
  symbolList: Array<Category>;
}

export default class ShowSymbolsContainer extends React.Component<
  IShowSymbolsContainerProps,
  {}
> {
  constructor(props: IShowSymbolsContainerProps) {
    super(props);
  }

  render() {
    const { symbolList } = this.props;

    return (
      <React.Fragment>
        {symbolList.map(category => (
          <CategoryOfSymbols
            key={category.name}
            name={category.name}
            list={category.list}
          />
        ))}
      </React.Fragment>
    );
  }
}
