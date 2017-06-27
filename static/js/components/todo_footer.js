import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { updateTodos } from '../actions';

class TodoFooter extends Component {
    constructor(props) {
        super(props);
        this.markAllComplete = this.markAllComplete.bind(this);
    }

    markAllComplete() {
        this.props.updateTodos();
    }
    
    render() {
        return (
            <div className="footer container">
                <span className="text-muted">{this.props.items_left} items left</span>
                <a  className={this.props.items_left == 0 ? "disabled-link" : "pointer-right"} 
                    onClick={this.markAllComplete}>
                    Mark all as complete
                </a>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        items_left: _.reduce(state.todos, (items_left, todo) => {
                            return items_left + (todo.done ? 0 : 1);
                    }, 0)
    }
}

export default connect(mapStateToProps, { updateTodos })(TodoFooter);
