import React, {Component} from 'react';
import "./stylez/signup.css";
import {connect} from "react-redux";
import * as actions from '../store/actions/auth';
import {Link} from "react-router-dom";

class ISignup extends Component {

    submitData = (e) => {
        e.preventDefault();
        this.props.onAuth(
            document.querySelector('#username').value,
            document.querySelector('#email').value,
            document.querySelector('#password1').value,
            document.querySelector('#password2').value
            );
        this.props.history.push('/class');

    }

    preventDefault = (e) =>{
        e.preventDefault();
    }

    render() {

        let errorMessage = null;

        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }
        return (
            <div className="signup-container">
                <div className="signup-content">
                    <div className="signup-header">
                        <img src='./img_avatar.png'/>
                        <p>Sign in to Infomate</p>
                    </div>
                    <div className="signup-body">
                        <form method="post" onSubmit={this.submitData}>

                            <div className="form-controls">
                                <label htmlFor="username">Username</label>
                                <input type="text"
                                       name="username"
                                       id="username"
                                       required
                                       autoComplete="off"
                                />
                                <label htmlFor="email">Email</label>
                                <input type="email"
                                       name="email"
                                       id="email"
                                       required
                                       autoComplete="off"
                                />
                                <label htmlFor="password1" >Password
                              </label>
                                <input
                                    type="password"
                                    name="password1"
                                    id="password1"
                                    required
                                />
                                <label htmlFor="password2" >Confirm password
                                    </label>
                                <input
                                    type="password"
                                    name="password2"
                                    id="password2"
                                    required/>
                                <div>
                                    <input
                                        type="submit"
                                        value="Sign up"/>
                                </div>
                            </div>

                        </form>
                    </div>
                    <div className="signup-footer">
                        <div>Already have an account? <span className="forgot"><Link to="/login">Sign in</Link></span></div>
                    </div>
                </div>
                <div className="sign-signup-footer">
                    <p>Infomate &copy; 2019</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onAuth: (username, email, password1, password2) =>
            dispatch(actions.authSignup(username, email, password1, password2)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ISignup);