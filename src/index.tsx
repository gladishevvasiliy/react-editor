import * as React from 'react';
import ReactDOM from 'react-dom';
import responce from './res/source.json';
import ShowSymbolsContainer from './components/containers/ShowSymbolsContainer/index';
import Header from './components/presentational/Header/index';
import Navigation from './components/presentational/Navigation';
import { Category } from './Models';
import './style.css';
// @ts-ignore
import { Container, Col, Row } from 'react-bootstrap';

const data = [...responce.symbols];
interface IData {
  data: Array<Category>;
}

const App = (data: IData) => (
  <React.Fragment>
    <Header />
    <Container fluid>
      <Row>
        <Col className="sideNav" sm={2}>
          <Navigation nameOfCategories={data.data.map(item => item.name)} />
        </Col>
        <Col className="mainContainer" sm={8}>
          <ShowSymbolsContainer symbolList={data.data} />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

ReactDOM.render(<App data={data} />, document.getElementById('root'));
