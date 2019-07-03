import React, {Component} from 'react';
import "./stylez/login.css";
import {connect} from "react-redux";
import * as actions from '../store/actions/auth';
import {Link} from "react-router-dom";

class ILogin extends Component {

    submitData = (e) => {
        e.preventDefault();
        this.props.onAuth(document.querySelector('#username').value,
            document.querySelector('#password'
            ).value);
        if(this.props.error !== null){
            this.props.history.push('/login');

        } else {
            this.props.history.push('/class');
        }



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
            <div className="login-parent-container">
           <div className="login-container">
               <div className="login-content">
                   <div className="signup-header">
                       <img src='./img_avatar.png'/>
                       <p className="login-heading">Sign in to Infomate</p>
                   </div>
                   <div className="login-body">
                   <form method="post" onSubmit={this.submitData}>

                       <div className="form-controls">
                           <label htmlFor="username">Username</label>
                           <input type="text"
                                  name="username"
                                  id="username"
                                  onFocus={this.preventDefault}
                                  required
                                  autoComplete="off"
                                  
                                
                           />
                           <label htmlFor="password" >Password
                               <span className="forgot">
                               Forgot Password?
                           </span></label>
                           <input type="password" name="password" id="password" required />
                           <div>
                           <input type="submit" value="Sign in"/>
                           </div>
                       </div>

                   </form>
                   </div>
                   <div className="login-footer">
                       <div>New to Infomate? <span className="forgot"><Link to="/signup">Sign up</Link></span></div>
                   </div>
               </div>
               <div className="login-login-footer">
                   <p>Infomate &copy; 2019</p>
               </div>
           </div>
           </div>
    );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error,
        token: state.token
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ILogin);