import React, { Component } from 'react';
import TodoListItem from './todo_list_item';

const TodoList = (props) => {
    const todoItems = props.todos.map((todo, index) => {
        return (<TodoListItem 
            key={todo.id}
            todo={todo} 
            onTodoToggle={props.onTodoToggle}
            onDelete={props.onDelete}
        />);
    });
    return (
        <ul className="list-group todo-list">
            {todoItems}
        </ul>
    );
};


export default TodoList;