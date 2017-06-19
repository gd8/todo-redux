import React, { Component } from 'react';

class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {new_todo:''};
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
                    <button className="btn add-button" disabled={!this.state.new_todo} onClick={() => this.handleClick()}>Add Todo</button>
                </div>
            </div>
        </div>
        )
    }

    handleClick() {
        this.props.onAddTodo(this.state.new_todo);
        this.setState({new_todo: ''});
    }
}

export default TodoInput;
