import React, { Component } from 'react';

const TodoListItem = (props) => {
    
    const onTodoToggle = () => {
        let toggledTodo = props.todo;
        toggledTodo.done = !props.todo.done;
        props.onTodoToggle(props.todo.id, props.todo.done  );
    }

    const onClickDelete = () => {
        props.onDelete(props.todo.id);
    }

    return (
        <li className="list-group-item">
            <input type="checkbox" className="pointer" checked={props.todo.done} onChange={onTodoToggle} />
            <label className={props.todo.done ? "doneTodo text-muted" : "notDoneTodo"}>
                {props.todo.description}
            </label>
            <a type="button" className="pointer-right" onClick={onClickDelete}> 
                <span className="fa fa-close"></span> </a>
        </li>
    );
}
export default TodoListItem;