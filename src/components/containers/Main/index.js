import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from '../../presentational/Header';
import AddSymbolPage from '../../../pages/AddSymbolPage';
import AddCompositionPage from '../../../pages/AddCompositionPage';
import { API, API_GET_ALL } from '../../../res/constants';
import { getDataFromServer } from '../../../res/utils';

import { setData } from '../../../actions';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount = () => {
    const { actions } = this.props;

    getDataFromServer(API + API_GET_ALL).then((data) => {
      actions.setData(data);
      this.setState({ isLoading: false });
    });
  };

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return (
        <React.Fragment>
          <h1 className="title">Ба1за знаме1нъ</h1>
          <FontAwesomeIcon
            icon="spinner"
            spin
            size="6x"
            className="loading-spinner"
          />
        </React.Fragment>
      );
    }
    return (
      <Router>
        <Header />
        <Route exact path="/" component={AddSymbolPage} />
        <Route path="/compositions" component={AddCompositionPage} />
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ setData }, dispatch),
});

const mapStateToProps = state => ({
  list: state.list,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
