import * as React from 'react';
import isNil from 'lodash';

//redux

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setData } from '../../../actions';
import ShowSymbolsContainer from '../ShowSymbolsContainer/index';
import Header from '../../presentational/Header/index';
import Navigation from '../../presentational/Navigation';
import AddSymbolContainer from '../AddSymbolContainer';
import { API, API_GET_ALL } from '../../../res/constants';
import { Container, Col, Row } from 'react-bootstrap';
import data from '../../../res/source.json';
import { getDataFromServer } from '../../../res/utils';

class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    const { actions } = this.props;
    // getDataFromServer(API + API_GET_ALL).then(data => {
    //   actions.setData(data);
    // });

    actions.setData(data);
  };
  render() {
    if (this.props.list.length === 0) return null;
    const { list } = this.props;
    return (
      <div>
        <Header />
        <Container fluid>
          <Row>
            <Col className="sideNav" sm={2}>
              <Navigation nameOfCategories={list.map(item => item.name)} />
            </Col>
            <Col className="mainContainer" sm={8}>
              <AddSymbolContainer />
              <ShowSymbolsContainer symbolList={list} />
            </Col>
          </Row>
        </Container>
      </div>
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
  mapDispatchToProps
)(Page);
