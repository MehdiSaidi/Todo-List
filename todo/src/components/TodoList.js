import React from 'react'
import TodoItem from './TodoItem'
import './../styles.css'


class TodoList extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    // addTodo(todo) {
    //     console.log(this.state.todoArray)
    //     this.setState(
    //         {
    //             todoArray: [todo, ...this.state.todoArray]
    //         }
    //     )
    // }



    render() {



        return (
            <div className = 'letter'>

                {this.props.todos.map(todo => (
                    <TodoItem todo={todo} isCompleteMethod={this.props.isCompleteMethod} key = {todo}  />
                ))}

            </div>
        )
    }
}

export default TodoList