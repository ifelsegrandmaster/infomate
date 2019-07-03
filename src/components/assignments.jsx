import React, {Component} from 'react';
import './stylez/class.css';
import INotification from './notification';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import axios from 'axios';
import * as actions from "../store/actions/auth";
import {getData} from "../store/actions/auth";
import Navbar from "./Nav";
import IAssignment from "./iassignment";

class Content extends Component {

    state = {
        assignments: [],
        categories:[]
    }




    componentWillMount() {

        if (this.props.token) {

            axios.defaults.headers = {
                'Content-Type': "application/json",
                Authorization: this.props.token
            }
            axios.get('http://127.0.0.1:8000/assignments/')
                .then(res => {
                    const data = res.data;
                    console.log(data);
                    this.setState({assignments: data});

                }).catch(error => {
                console.log(error)
            });

            axios.get('http://127.0.0.1:8000/categories/')
                .then(res => {
                    const data = res.data;
                    console.log(data);
                    this.setState({categories: data});

                }).catch(error => {
                console.log(error)
            });


        }
    }
    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.token){
            axios.defaults.headers = {
                'Content-Type': "application/json",
                Authorization: this.props.token
            }
            axios.get('http://127.0.0.1:8000/categories/')
                .then(res => {
                    const data = res.data;
                    console.log(data);
                    this.setState({categories: data});

                }).catch(error => {
                console.log(error)
            });
            axios.get('http://127.0.0.1:8000/assignments/')
                .then(res => {
                    const data = res.data;
                    console.log(data);
                    this.setState({assignments: data});

                }).catch(error => {
                console.log(error)
            });
        }
    }

    render() {
        return (
            <div>
                <Navbar current = "class"/>
                <div className="container-infomate">
                    <div className="container-class">
                        <div className="feed">
                        <div className="feed-content">
                                <p className="i-heading">Actions</p>

                                <ul>
                            
                                    <li><Link to="/addassignment">Add Assignment</Link></li>

                                </ul>
                            </div>
                            <div className="feed-content">
                                <p className="i-heading">Categories</p>
                                <ul>
                                    {this.state.categories.map(category =>
                                        <li key={category.pk}><span className="u-read-dot u-read-dot--ellipse"></span><span className="content-text">{category.name}</span></li>)}

                                </ul>
                            </div>
                            
                        </div>


                        <div className="notifications">{this.state.assignments.map(assignment =>
                            <IAssignment key={assignment.pk} data={assignment}/>
                        )}

                        </div>


                        <div className="actions">

                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

class IAssignments extends Component {
    signOut = () => {
        this.props.logout();
        this.props.history.push('/login');

    }

    render() {

        return (
            <div>

                <Content token={this.props.token}/>
            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(IAssignments);