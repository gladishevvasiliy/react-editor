import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddSymbolForm from '../../presentational/AddSymbolForm';
import { addSymbol } from '../../../actions';
import { sendNewSymbolToServer } from '../../../res/utils';
import { API, API_SEND_NEW_SYMBOL } from '../../../res/constants';

class AddSymbolContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      symbolToStore: {},
    };
  }

  onSendForm = event => {
    const { actions } = this.props;
    //{"name":"sd","pitch":"sd","sounds":"1","opts":["sd"],"value":"sd","categoryId":"5c1d696fd1e96b1c61a3d57d"}
    event.preventDefault();
    const {
      name,
      pitch,
      sounds,
      opts,
      value,
      idOfCategory,
    } = event.target.elements;
    console.log(typeof opts.value);
    const newSymbol = {
      name: name.value,
      pitch: pitch.value,
      sounds: sounds.value,
      opts: opts.value.split(','),
      value: value.value,
      categoryId: idOfCategory.value,
    };

    this.setState({ symbolToStore: newSymbol });
    // actions.addSymbol(newSymbol);
  };

  componentDidUpdate = () => {
    sendNewSymbolToServer(API + API_SEND_NEW_SYMBOL, this.state.symbolToStore);
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
