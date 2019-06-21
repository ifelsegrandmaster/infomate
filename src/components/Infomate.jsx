import React, {Component} from 'react';
import IClass from './class';
import IAssignment from './assignments';
import Navbar from './Nav';
import IAccount from './account';
import ILogin from './login';
import IMessages from './messages';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

class Infomate extends Component {

    render() {
        return (
            <Router>
                <div className="main">
                    {
                        this.props.isAuthenticated ?
                            <Navbar/>
                            :
                            <span></span>
                    }
                    <Switch>
                        <Route path="/class" exact component={IClass}/>
                        <Route path="/assignments" exact component={IAssignment}/>
                        <Route path="/account" exact component={IAccount}/>
                        <Route path="/messages" exact component={IMessages}/>
                        <Route path="/login" exact component={ILogin}/>
                    </Switch>
                </div>

            </Router>
        );
    }
}

export default Infomate;