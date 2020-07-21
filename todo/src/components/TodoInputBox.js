import React from 'react'


class TodoInputBox extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 0,
            todo: '',
        }

    }


    handleChange(e) {
        this.setState(
            {
                todo: e.target.value
            }
        )

    }

    handleClick() {

        this.props.onSubmit({
            todo: this.state.todo,
            id: this.state.counter,
            isCompleted: false,
            visibility: 'visible',
            random : 'suck'
        })

        this.setState(
            {
                counter: this.state.counter + 1
            }
        )

    }


    render() {

        return (
            <div className="input-group justify-content-center" style={{ width: "600px" }} id="input">
                <input type="text" className="form-control " id="inputText" onChange={this.handleChange.bind(this)}></input>
                <span className="input-group-btn">
                    <button className="btn btn-outline-danger" type="button" id="submit" onClick={this.handleClick.bind(this)}>Add</button>
                </span>
            </div>
        )
    }
}

export default TodoInputBox