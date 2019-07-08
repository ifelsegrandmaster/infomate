import React, {Component} from 'react';
import './stylez/add_post.css'
import Navbar from "./Nav";
import axios from "axios";
import {connect} from "react-redux";


class Content extends Component {
    state = {
        categories: []
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.props.token) {
            axios.defaults.headers = {
                'Content-Type': "application/json",
                Authorization: this.props.token
            }
            axios.post('http://127.0.0.1:8000/api/', {
                user: document.getElementById('userid').value,
                module: document.getElementById('id_category').value,
                priority: document.getElementById('id_priority').value,
                title: document.getElementById('name').value,
                summary: document.getElementById('description').value,
                content: document.getElementById('content').value,


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

                <div className="container-add-post">

                    <h3>Add Post</h3>
                    <form className="add-post-form" onSubmit={this.handleSubmit}>
                        <input type="hidden" value={localStorage.getItem('pk')} id="userid"/>


                        <div className="add-post-form-selects">
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
                                <label htmlFor="id_priority">Priority</label>
                                <input type="number" name="priority"  className="vIntegerField" required=""
                                       id="id_priority"/>
                            </div>
                        </div>


                        <label htmlFor="name">Title</label>
                        <input name="name" id="name" type="text"/>
                        <label htmlFor="description">Summary</label>
                        <textarea rows="5" id="description" name="description"></textarea>
                        <label htmlFor="content">Body</label>
                        <textarea rows="10" id="content" name="content"></textarea>
                        <input type="submit" value="Add Post"/>
                    </form>
                </div>
            </div>
        )
    }
}

class AddPost extends Component {

    onFinished = () => {
        window.location.pathname = "/class";
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
export default connect(mapStateToProps)(AddPost);