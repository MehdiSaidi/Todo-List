import React from 'react'
import './../styles.css'


class TodoItem extends React.Component {


    render() {


        return (
            <div className='d-flex justify-content-center'>
                <p className style={{ visibility: this.props.todo.visibility }} >
                    <input type='checkbox' className='todoItem' checked={this.props.todo.isCompleted}
                        onClick={this.props.isCompleteMethod.bind(null, this.props.todo)} />
                    <label className='d-flex justify-content-center'>{this.props.todo.todo}</label>
                </p>

            </div>
        )
    }
}

export default TodoItem