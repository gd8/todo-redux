import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchTodos } from '../actions';
import TodoListItem from './todo_list_item';

class TodoList extends Component {
    componentDidMount() {
        this.props.fetchTodos();
    }

    renderTodos(){
        return _.map(this.props.todos, (todo) => {
            return (<TodoListItem  key={todo.id} todo={todo} />);
        });
    }

    render() {
        return (
            <ul className="list-group todo-list">
                {this.renderTodos()}
            </ul>
        );
    }
};

function mapStatesToProps(state) {
    return { todos: state.todos};
}

export default connect(mapStatesToProps, {fetchTodos})(TodoList);