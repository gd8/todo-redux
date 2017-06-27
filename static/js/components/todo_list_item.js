import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateTodo, deleteTodo } from '../actions';

class TodoListItem extends Component {
    constructor(props) {
        super(props);
        this.onTodoToggle = this.onTodoToggle.bind(this);
        this.onClickDelete = this.onClickDelete.bind(this);
    }
    onTodoToggle() {
        // NOTE: toggling todo status with bitwise toggle
        const {todo} = this.props;
        const new_todo = {
            id: todo.id,
            done: todo.done ^= 1
        };
        this.props.updateTodo(new_todo);
    }
    onClickDelete() {
        this.props.deleteTodo(this.props.todo.id);
    }
    render() {
        const { todo } = this.props;
        return (
            <li className="list-group-item">
                <input type="checkbox" 
                       className="pointer" 
                       checked={todo.done} 
                       onChange={this.onTodoToggle} />
                <label className={todo.done ? "doneTodo text-muted" : "notDoneTodo"}>
                    {todo.description}
                </label>
                <a type="button" className="pointer-right" onClick={this.onClickDelete}> 
                    <span className="fa fa-close"></span> 
                </a>
            </li>
        )
    }
}

function mapStateToProps(state, ownProps){
    return {
        todo: ownProps.todo
    };
}

export default connect(mapStateToProps, {updateTodo, deleteTodo})(TodoListItem);