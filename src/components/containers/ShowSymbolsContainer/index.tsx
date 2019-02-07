import * as React from 'react';
import { isEmpty } from 'lodash';
import { Category } from '../../../Models';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { openModalConfirmRemove } from '../../../actions';
import CategoryOfSymbols from '../../presentational/CategoryOfSymbols/index';

interface IShowSymbolsContainerProps {
  symbolList: Array<Category>;
}

class ShowSymbolsContainer extends React.Component<
  IShowSymbolsContainerProps,
  {}
> {
  constructor(props: IShowSymbolsContainerProps) {
    super(props);
  }

  openModalConfirmRemove = (symbolId, categoryId) => {
    const { actions } = this.props;
    actions.openModalConfirmRemove(symbolId, categoryId);
  };

  render() {
    const { symbolList } = this.props;
    return (
      <React.Fragment>
        {symbolList.map(category => {
          if (isEmpty(category.symbols)) {
            return null;
          }
          return (
            <CategoryOfSymbols
              key={category.name}
              categoryId={category._id}
              name={category.name}
              symbols={category.symbols}
              handleClick={this.onClickRow}
              handleClickRemoveButton={this.openModalConfirmRemove}
            />
          );
        })}
      </React.Fragment>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ openModalConfirmRemove }, dispatch),
});

const mapStateToProps = state => {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowSymbolsContainer);
