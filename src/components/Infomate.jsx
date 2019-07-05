import React, {Component} from 'react';
import IClass from './class';
import IAssignment from './assignments';
import {connect} from "react-redux";
import Navbar from './Nav';
import IAccount from './account';
import ILogin from './login';
import {Link, withRouter} from "react-router-dom";
import IMessages from './messages';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faScrewdriver} from '@fortawesome/free-solid-svg-icons';
import * as actions from "../store/actions/auth";
import ISignup from './signup';
import './stylez/infomate.css';
import AddCategory from './add_category';
import AddPost from './add_post';
import AddAssignment from './add_assignment';
import NotificationDetailView from './notification_detail_view';
import IDocument from './Document';


class Infomate extends Component {
    signOut = () => {
        this.props.logout();

    }

    componentWillReceiveProps(nextProps, nextContext) {

    }


    render() {
        return (
            <Router>
                <div className="main">
                    <div>
                        <div>


                        </div>

                        <Switch>

                            <Route exact path="/class" component={IClass}/>
                            <Route path="/addmodule" component={AddCategory}/>
                            <Route exact path="/addpost" component={AddPost}/>
                            <Route exact path="/assignments" component={IAssignment}/>
                            <Route exact path="/account" component={IAccount}/>
                            <Route exact path="/messages" component={IMessages}/>
                            <Route exact path="/login" component={ILogin}/>
                            <Route exact path="/signup" component={ISignup}/>
                            <Route exact path="/addassignment" component={AddAssignment}/>
                            <Route exact path="/notification" component={NotificationDetailView}/>
                            <Route exact path="/document" component={IDocument}/>


                        </Switch>
                    </div>
                </div>

            </Router>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(null, mapDispatchToProps)(Infomate);