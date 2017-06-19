import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TodoInput from './components/todo_input';
import TodoList from './components/todo_list';
import TodoFooter from './components/todo_footer';
import ApiService from './api_service';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {todos: []};
    this.addTodo = this.addTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.markAllComplete = this.markAllComplete.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  componentDidMount() {
    this.fetchTodos();
  }
  fetchTodos() {
    ApiService.getTodos().then((result) => {
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
      <div className="container card col-md-6 col-md-offset-3 col-xs-12">
        <h2 className="title">Todos</h2>
        <hr />
        <TodoInput onAddTodo={this.addTodo}/>
        <TodoList todos={this.state.todos} onTodoToggle={this.toggleTodo} onDelete={this.onDelete}/>
        <hr />
        <TodoFooter todos={this.state.todos} markAllComplete={this.markAllComplete}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));