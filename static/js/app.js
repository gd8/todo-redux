import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import TodoInput from './components/todo_input';
import TodoList from './components/todo_list';
import TodoFooter from './components/todo_footer';
import rootReducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class App extends Component {
  render() {
    return (
        <Provider store={createStoreWithMiddleware(rootReducer)}>
          <div className="main-container card col-md-6 col-md-offset-3 col-xs-12">
            <h2 className="title">Todos</h2>
            <hr />
            <TodoInput />
            <TodoList />
            <hr />
            <TodoFooter />
          </div>
        </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));