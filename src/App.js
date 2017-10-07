import React, { Component } from 'react';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

import Signup from './containers/signup_form';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <Signup />
      </Provider>
    );
  }
}

export default App;
