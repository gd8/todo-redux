import React, { Component } from 'react';

class TodoFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {items_left: 0};
    }

    componentDidMount() {
        this.countItemsLeft(this.props.todos);
    }

    componentWillReceiveProps(nextProps) {
        this.countItemsLeft(nextProps.todos);
    }

    countItemsLeft(todos) {
        let items_left = todos.reduce((items_left, todo) =>{
            return items_left + (todo.done ? 0 : 1);
        }, 0);
        this.setState({items_left: items_left});
    }

    render() {
        return (
            <div className="footer container">
                <span className="text-muted">{this.state.items_left} items left</span>
                <a  className={this.state.items_left == 0 ? "disabled-link" : "pointer-right"} 
                    onClick={this.props.markAllComplete}>
                    Mark all as complete
                </a>
            </div>
        );
    }
}

export default TodoFooter;