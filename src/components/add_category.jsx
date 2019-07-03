import React, {Component} from 'react';
import './stylez/add_category.css'
import Navbar from "./Nav";
import axios from "axios";
import {connect} from "react-redux";


class Content extends Component{

    handleSubmit = (e) =>{
        e.preventDefault();
        if(this.props.token){
            axios.defaults.headers = {
                'Content-Type': "application/json",
                Authorization: this.props.token
            }
            axios.post('http://127.0.0.1:8000/categories/', {
                started_by: document.getElementById('userid').value,
                name: document.getElementById('name').value,
                description: document.getElementById('description').value,

            })
                .then(res => {
                    const data = res.data;
                    console.log(data);

                }).catch(error => {
                console.log(error)
            });
           this.props.onDone();
        }
    }

    render() {
        return(
            <div>
                <Navbar/>

            <div className="container-add-category">

                <h3>Add Module</h3>
                <form className="add-module-form" onSubmit={this.handleSubmit}>
                    <input type="hidden" value={localStorage.getItem('pk')} id="userid"/>
                    <label htmlFor="name">Name</label>
                    <input name="name" id="name" type="text"/>
                    <label htmlFor="description">Description</label>
                    <textarea rows="10" id="description" name="description"></textarea>
                    <input type="submit" value="Add Module"/>
                </form>
            </div>
            </div>
        )
    }
}

class AddCategory extends Component{

    onFinished = () =>{
        this.props.history.push('/class')
    }

    render() {
        return(

            <Content token ={this.props.token} onDone ={this.onFinished}/>

        )
    }
}
const mapStateToProps = state => {
    return {
        token: state.token,
        isAuthenticated: state.token !==  null,
    }
}
export default connect(mapStateToProps)(AddCategory);