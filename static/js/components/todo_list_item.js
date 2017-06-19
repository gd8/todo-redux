import React, { Component } from 'react';

class TodoListItem extends Component {
    constructor(props){
        super(props);
        this.state = {todo: props.todo};
        this.onTodoToggle = this.onTodoToggle.bind(this);
        this.onClickDelete = this.onClickDelete.bind(this);
    }

    onTodoToggle(){
        let toggledTodo = this.state.todo;
        toggledTodo.done = !this.state.todo.done;
        this.setState({todo: toggledTodo});
        this.props.onTodoToggle(this.state.todo.id, this.state.todo.done  );
    }

    onClickDelete() {
        this.props.onDelete(this.state.todo.id);
    }

    render() {
        return (
            <li className="list-group-item">
                <input type="checkbox" checked={this.state.todo.done} onChange={this.onTodoToggle} />
                <label className={this.state.todo.done ? "doneTodo text-muted" : "notDoneTodo"}>
                    {this.state.todo.description}
                </label>
                <a type="button" className="deleteLink" onClick={this.onClickDelete}> X </a>
            </li>
        );
    }
}
export default TodoListItem;