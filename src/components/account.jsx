import React, {Component} from 'react';
import './stylez/account.css';
import INofication from './notification';
import IClass from './class';
import {connect} from "react-redux";
import IPAccount from './ipaccount';
import * as actions from "../store/actions/auth";
import Navbar from "./Nav";

class IAccount extends Component{
    render() {
        return(
            <React.Fragment>
                <Navbar current="account"/>
            <div className="container-account">
                <div className="space"></div>
                <IPAccount token ={this.props.token}/>
                <div className="space"></div>
            </div>

            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.token,
        isAuthenticated: state.token !==  null,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getNotifications: (token) => dispatch(actions.getNotifications(token)),
        logout: () =>dispatch(actions.logout()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IAccount);