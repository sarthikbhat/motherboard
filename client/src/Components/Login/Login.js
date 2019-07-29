import React, { Component } from 'react';
import './Login.scss';
import { TextField } from '@material-ui/core';
import {Link} from 'react-router-dom'


const initstate = {
    name: "",
    pass: "",
    nameerr: "",
    passerr: "",
}


class Login extends Component {

    state = initstate

    change1 = (e) => {
        this.setState({
            name: e.target.value
        })
        console.log(this.state);
    }

    change2 = (e1) => {
        this.setState({
            pass: e1.target.value,
        })
    }

    validate = () => {
        let nameerr = "";
        let passerr = "";

        if (!this.state.name) {
            nameerr = "This field Cannot Be Empty";
            document.getElementById('name').style.display = "block";
            //   document.getElementById('outlined-name').setAttribute("id" , "outlined-error");
        }

        if (!this.state.pass) {
            passerr = "This field cannot be empty";
            document.getElementById('pass').style.display = "block";
        }

        if (nameerr || passerr) {
            this.setState({ nameerr, passerr })
            return false;
        }
        return true;
    };

    handlesubmit = (e) => {
        e.preventDefault();
        const valid = this.validate();
        if (valid) {
            console.log("success");
            localStorage.setItem('mBKey','abc')
            var form = document.getElementById("myform");
            form.reset();
            this.setState({
                initstate
            });
        }
    };
    render() {
        return (
            <div className="login">
                <div className="top"><span className="one" style={{ color: "white" }}>mother</span><span style={{ color: "#414195" }}>Board</span></div>
                <div className="paper">
                    <div className="heads">
                        LOGIN
                    </div>
                    <div className="form">
                        <form action="" onSubmit={this.handlesubmit} id="myform">
                            <TextField
                                id="outlined-name"
                                label="Sap-id"
                                margin="normal"
                                variant="outlined"
                                className="text"
                                autoComplete="off"
                                onChange={this.change1}
                                required
                            />
                            <div className="error1" id="name">{this.state.nameerr}</div>
                            <TextField
                                id="outlined-password-input"
                                type="password"
                                label="Password"
                                margin="normal"
                                variant="outlined"
                                className="text"
                                autoComplete="off"
                                onChange={this.change2}
                                required
                            />
                            <div className="error2" id="pass">{this.state.passerr}</div>
                            <button className="button" onClick={this.handlesubmit}>
                                Sign In
                            </button>
                            <span><h4><Link to="/forgot">Forgot Password?</Link></h4></span>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;