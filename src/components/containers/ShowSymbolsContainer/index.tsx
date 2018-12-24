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

  onClickRow = ({ target }) => {
    console.log("Open modal edit kruk by id " + target.parentElement.id)
  }

  render() {
    const { symbolList } = this.props;
    return (
      <React.Fragment>
        {symbolList.map(category => {
          return(
          <CategoryOfSymbols
            key={category._id}
            name={category.name}
            symbols={category.symbols}
            handleClick={this.onClickRow}
          />
        )
        })}
      </React.Fragment>
    );
  }
}
