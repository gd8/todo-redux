import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {new_todo:''};
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return (
        <div className="todo-input container">
            <div className="row">
                <div className="col-md-8">
                    <input className="form-control" 
                           placeholder="What needs to be done?"
                           value={this.state.new_todo}
                           onChange={(event) => this.setState({new_todo: event.target.value})}/>
                </div>
                <div className="col-md-4">
                    <button className="btn add-button" 
                            disabled={!this.state.new_todo} 
                            onClick={this.handleClick}>Add Todo</button>
                </div>
            </div>
        </div>
        )
    }

    handleClick() {
        const todo = {done: 0, description: this.state.new_todo};
        this.props.addTodo(todo);
        this.setState({new_todo: ''});
    }
}

export default connect(null, {addTodo})(TodoInput);
