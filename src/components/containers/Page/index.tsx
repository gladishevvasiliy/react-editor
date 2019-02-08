import * as React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  setData,
  openModalConfirmRemove,
  openModalAddCategory,
  closeModalAddCategory,
  closeModalConfirmRemove,
  closeModalEditSymbol,
  removeSymbol,
} from '../../../actions';

import ShowSymbolsContainer from '../ShowSymbolsContainer/index';
import Header from '../../presentational/Header/index';
import Navigation from '../../presentational/Navigation';
import AddSymbolContainer from '../AddSymbolContainer';
import { API, API_GET_ALL } from '../../../res/constants';
import { getDataFromServer, removeSymbolFromServer } from '../../../res/utils';
import ModalConfirmRemove from '../../presentational/ModalConfirmRemove';
import ModalEditSymbol from '../../presentational/ModalEditSymbol';
import ModalAddCategory from '../../presentational/ModalAddCategory';


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

  handleCloseModalConfirmRemove = () => {
    const { actions } = this.props;
    actions.closeModalConfirmRemove();
  };

  handleCloseModalEditSymbol = () => {
    const { actions } = this.props;
    actions.closeModalEditSymbol();
  };

  removeSymbol = () => {
    const { actions, removingSymbolCategoryId, removingSymbolId } = this.props;
    actions.removeSymbol(removingSymbolCategoryId, removingSymbolId);
    actions.closeModalConfirmRemove();
    const url = `${API}/${removingSymbolCategoryId}/remove/${removingSymbolId}`;
    removeSymbolFromServer(url);
  };

  openModalAddCategory = () => {
    const { actions } = this.props;
    actions.openModalAddCategory();
  };

  closeModalAddCategory = () => {
    const { actions } = this.props;
    actions.closeModalAddCategory();
  };

  addCategory = (e) => {
    e.preventDefault();
    const { actions } = this.props;
    actions.closeModalAddCategory();
    console.log(e.currentTarget)
  }

  render() {
    if (this.props.list.length === 0) return null;
    const { list, showModalConfirmRemove, showModalEditSymbol, showModalAddCategory } = this.props;
    return (
      <div>
        <Header />
        <Container fluid>
          <Row>
            <Col className="sideNav" sm={2}>
              <Navigation
                nameOfCategories={list.map(item => item.name)}
                openModalAddCategory={this.openModalAddCategory}
              />
            </Col>
            <Col className="mainContainer" sm={8}>
              <AddSymbolContainer />
              <ShowSymbolsContainer symbolList={list} />
            </Col>
          </Row>
          <ModalConfirmRemove
            show={showModalConfirmRemove}
            handleCloseModal={this.handleCloseModalConfirmRemove}
            removeSymbol={this.removeSymbol}
          />
          <ModalEditSymbol
            show={showModalEditSymbol}
            handleCloseModal={this.handleCloseModalEditSymbol}
          />
          <ModalAddCategory
            show={showModalAddCategory}
            handleCloseModal={this.closeModalAddCategory}
            addCategory={this.addCategory}
          />
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      setData,
      openModalConfirmRemove,
      closeModalConfirmRemove,
      closeModalEditSymbol,
      removeSymbol,
      openModalAddCategory,
      closeModalAddCategory,
    },
    dispatch
  ),
});

const mapStateToProps = state => ({
  list: state.list,
  showModalConfirmRemove: state.modal.showModalConfirmRemove,
  showModalEditSymbol: state.modal.showModalEditSymbol,
  showModalAddCategory: state.modal.showModalAddCategory,
  removingSymbolCategoryId: state.modal.removingSymbolCategoryId,
  removingSymbolId: state.modal.removingSymbolId,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
