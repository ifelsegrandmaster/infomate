import React, {Component} from 'react';
import './stylez/add_assignment.css'
import Navbar from "./Nav";
import axios from "axios";
import {connect} from "react-redux";
import { Editor } from '@tinymce/tinymce-react';


class Content extends Component {
    state = {
        categories: []
    }
    ajaxSucess =() =>{
        console.log(this.responseText);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.props.token) {


            var oReq = new XMLHttpRequest();
            oReq.open("POST", 'http://127.0.0.1:8000/assignments/', true);
            //Send header information
            oReq.setRequestHeader("Content-Type", "multipart/form-data");
            oReq.setRequestHeader("Authorization", this.props.token);
            oReq.open("post", e.target.action);
            oReq.onload = this.ajaxSuccess;
            oReq.send(new FormData(e.target));
            
            this.props.onDone();
        }
    }

    componentWillMount() {
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
    }

    render() {
        return (
            <div>
                <Navbar/>

                <div className="container-add-assignment">

                    <h3>Add Assignment</h3>
                    <form encType="multipart/form-data" 
                          className="add-assignment-form"
                          action="http://127.0.0.1:8000/assignments/"
                          method ="post" 
                          onSubmit={this.handleSubmit}>
                        <input type="hidden" name="userid" value={localStorage.getItem('pk')} id="userid"/>


                        <div className="add-assignment-form-selects">
                            <div className="">
                                <label htmlFor="id_category">Module</label>
                                <select name="category" required="" id="id_category">
                                    {
                                        this.state.categories.map(category =>
                                            <option value={category.pk}>{category.name}</option>)
                                    }

                                </select>
                            </div>

                            <div className="priority-container">
                                <label htmlFor="date">Due date</label>
                                <input type="date" name="date"  required=""
                                       id="date"/>
                            </div>
                        </div>


                        <label htmlFor="title">Title</label>
                        <input name="title" id="title" type="text"/>
                        <label htmlFor="description">Add file</label>
                        <input type="file" name="attachment" id="attachment"/>
                        <label htmlFor="notes">Notes</label>
                        <textarea rows="10" id="notes" name="notes"></textarea>
                        <input type="submit" value="Add assignment"/>
                    </form>
                </div>
            </div>
        )
    }
}

class AddAssignment extends Component {

    onFinished = () => {
        window.location.pathname = '/assignments';
    }

    render() {
        return (

            <Content token={this.props.token} onDone={this.onFinished}/>

        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.token,
        isAuthenticated: state.token !== null,
    }
}
export default connect(mapStateToProps)(AddAssignment);