import React, { Component } from 'react';

class TodoFooter extends Component {
    constructor(props) {
        super(props);

        this.state = {items_left: 0};
    }

    countItemsLeft() {
        let items_left = this.props.todos.reduce((items_left, todo) =>{
            return items_left + (todo.done ? 0 : 1);
        }, 0);
        return items_left;
    }

    render() {
        return (
            <div>
                <span>{this.countItemsLeft()} items left</span>
                <a style={{float: "right", cursor: "pointer"}} onClick={this.props.markAllComplete}>
                    Mark all as complete
                </a>
            </div>
        );
    }
}

export default TodoFooter;