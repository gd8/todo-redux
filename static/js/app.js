import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TodoInput from './components/todo_input';
import TodoList from './components/todo_list';
import TodoFooter from './components/todo_footer';
import ApiService from './api_service';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {todos: [], todosLoaded: false};
  }
  // Get todos after app renders
  componentDidMount() {
    this.fetchTodos().then(() => {
      this.setState({todosLoaded:true});
    });
  }

  fetchTodos() {
    return ApiService.getTodos().then((result) => {
      this.setState({todos: result});
    });
  }

  addTodo(new_todo){
    ApiService.addTodo(new_todo).then((result) => {
      this.fetchTodos();
    });
  }

  toggleTodo(id, new_status) {
    ApiService.updateTodo(id, new_status).then((result) => {
      this.fetchTodos();
    });
  }

  onDelete(id) {  
    ApiService.deleteTodo(id).then((result) => {
      this.fetchTodos();
    });
  }

  markAllComplete(){
    ApiService.updateTodos().then((result) => {
      this.fetchTodos();
    });
  }

  render() {
    return (
      <div className="main-container card col-md-6 col-md-offset-3 col-xs-12">
        <h2 className="title">Todos</h2>
        <hr />
        <TodoInput onAddTodo={this.addTodo.bind(this)}/>
        <TodoList todos={this.state.todos} onTodoToggle={this.toggleTodo.bind(this)} onDelete={this.onDelete.bind(this)}/>
        <hr />
        {this.state.todosLoaded 
          ? <TodoFooter todos={this.state.todos} markAllComplete={this.markAllComplete.bind(this)}/>
          : null 
        }
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));