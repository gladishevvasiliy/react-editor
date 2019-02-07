import * as React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import Page from './components/containers/Page/index';
import './style.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashAlt, faPen } from '@fortawesome/free-solid-svg-icons'
 
library.add(faTrashAlt, faPen)

// @ts-ignore
/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

const App = () => (
  <Provider store={store}>
    <Page />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
