import React, {Component} from 'react';
import './stylez/ipaccount.css';
import {Link} from "react-router-dom";
import axios from "axios";

class IPAccount extends Component {

    state = {
        user_details:[]
    }

    componentWillMount() {
        if (this.props.token){
            axios.defaults.headers = {
                'Content-Type': "application/json",
                "Authorization":"Token " + this.props.token
            }
            axios.get('http://127.0.0.1:8000/auth/user/')
                .then(res => {
                    const data = res.data;
                    console.log(data);
                    this.setState({user_details:data});

                }).catch(error => {
                console.log(error)
            });
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
         if (nextProps.token){
             axios.defaults.headers = {
                 'Content-Type': "application/json",
                 "Authorization":"Token " + nextProps.token
             }
             axios.get('http://127.0.0.1:8000/auth/user/')
                 .then(res => {
                     const data = res.data;
                     console.log(data);
                     this.setState({user_details:data});

                 }).catch(error => {
                 console.log(error)
             });
         }
    }


    render() {
        return (
            <div>

                <div className="profile">
                    <div className="account-profile">
                        <img src="./chaula-man.png" className="i-account-image"/>
                        <div className="profile-info">
                            <span><span className="keyword">Full Name:</span>
                                {this.state.user_details.first_name} {this.state.user_details.last_name}
                            </span>
                            <span><span className="keyword">Occupation:</span> {this.state.user_details.occupation}</span>
                            <span><span className="keyword">Course:</span> {this.state.user_details.course}</span>
                            <span><span className="keyword">Year:</span>{this.state.user_details.year}</span>
                            <span><span className="keyword">Reg No:</span> {this.state.user_details.reg_no}</span>
                        </div>
                    </div>
                    <div className="profile-accounts">
                        <h3>Bio</h3>
                       <div>
                           {this.state.user_details.bio}
                       </div>
                    </div>
                    <div className="space"></div>
                </div>
            </div>
        )
    }
}

export default IPAccount;