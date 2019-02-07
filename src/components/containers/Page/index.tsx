import * as React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  setData,
  openModalConfirmRemove,
  closeModalConfirmRemove,
  removeSymbol,
} from '../../../actions';

import ShowSymbolsContainer from '../ShowSymbolsContainer/index';
import Header from '../../presentational/Header/index';
import Navigation from '../../presentational/Navigation';
import AddSymbolContainer from '../AddSymbolContainer';
import { API, API_GET_ALL } from '../../../res/constants';
import { getDataFromServer, removeSymbolFromServer } from '../../../res/utils';
import ModalConfirmRemove from '../../presentational/ModalConfirmRemove';
class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    const { actions } = this.props;
    getDataFromServer(API + API_GET_ALL).then(data => {
      actions.setData(data);
    });
  };

  handleCloseModal = () => {
    const { actions } = this.props;
    actions.closeModalConfirmRemove();
  };

  removeSymbol = () => {
    const { actions, removingSymbolCategoryId, removingSymbolId } = this.props;
    actions.removeSymbol(removingSymbolCategoryId, removingSymbolId);
    actions.closeModalConfirmRemove();
    const url = `${API}/${removingSymbolCategoryId}/remove/${removingSymbolId}`
    removeSymbolFromServer(url);
  };

  render() {
    if (this.props.list.length === 0) return null;
    const { list, showModalConfirmRemove } = this.props;
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
          <ModalConfirmRemove
            show={showModalConfirmRemove}
            handleCloseModal={this.handleCloseModal}
            removeSymbol={this.removeSymbol}
          />
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { setData, openModalConfirmRemove, closeModalConfirmRemove, removeSymbol },
    dispatch
  ),
});

const mapStateToProps = state => ({
  list: state.list,
  showModalConfirmRemove: state.modal.showModalConfirmRemove,
  removingSymbolCategoryId: state.modal.removingSymbolCategoryId,
  removingSymbolId: state.modal.removingSymbolId,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
