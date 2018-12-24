import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddSymbolForm from '../../presentational/AddSymbolForm';
import { addSymbol } from '../../../actions';

class AddSymbolContainer extends React.Component {
  onSendForm = event => {
    event.preventDefault();
    const {
      name,
      pitch,
      sounds,
      opts,
      value,
      idOfCategory,
    } = event.target.elements;

    const newSymbol = {
      name: name.value,
      pitch: pitch.value,
      sounds: sounds.value,
      opts: opts.value,
      value: value.value,
      categoryId: idOfCategory.value,
    };

    fetch('http://localhost:1235/kruki/create/symbol', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

      //make sure to serialize your JSON body
      body: JSON.stringify(newSymbol),
    }).then(response => {});
  };

  render() {
    const { list } = this.props;
    return (
      <AddSymbolForm
        onSendForm={this.onSendForm}
        nameAndIdOfCategories={list.map(item => {
          return { nameOfCategory: item.name, idOfCategory: item._id };
        })}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ addSymbol }, dispatch),
});

const mapStateToProps = state => ({
  list: state.list,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSymbolContainer);
