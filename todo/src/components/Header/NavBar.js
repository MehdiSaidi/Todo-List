import React from 'react'
import './../../styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './SideBar'

class NavBar extends React.Component {

    constructor() {
        super()
        this.state = {
            width: '0px'
        }
    }

    handleClick() {
        if (this.state.width == '190px') {
            this.setState({
                width: '0px'
            })
        } else {
            this.setState({
                width: '190px'
            })
        }
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar navbar-light" style={{ backgroundColor: "#00a2ff" }}>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">

                            <li className="nav-item">
                                <a className="nav-link" id="myLists" onClick={this.handleClick.bind(this)}>

                                    <i className="fa fa-bars" aria-hidden="true"></i>
                                </a>
                            </li>

                            <li className=" nav-item active">
                                <a className="nav-link" href="index.html" id="Home"> <i className="fa fa-fw fa-home"></i>Home
                                <span className="sr-only">(current)</span>
                                </a>
                            </li>



                            <li className="nav-item">
                                <a className="nav-link" href="About.html"><i className="fa fa-info" aria-hidden="true"></i>
                            &nbsp; About
                           </a>
                            </li>


                        </ul>

                        <ul className="nav navbar-nav navbar-right">
                            <li className="nav-item" id="login" style={{ float: "right" }}>
                                <a className="nav-link" href="Login"><i className="fa fa-fw fa-user"></i>Login</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <SideBar width={this.state.width} />
            </div>
        )
    }

}



export default NavBar