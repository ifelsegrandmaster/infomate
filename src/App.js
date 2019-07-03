import React, {Component} from 'react';
import './App.css';
import Infomate from "./components/Infomate";
import {connect} from "react-redux";
import * as actions from './store/actions/auth';

class App extends Component {

    componentDidMount() {
        this.props.onTryAutoSignup();
    }

    render() {

        return (

                <div className="App">
                    <Infomate {...this.props}/>
                </div>

        );
    }
}

const mapStateToTheProps = state => {
    return {
        isAuthenticated: state.token !== null,
    }
}

const mapDispatchToTheProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState())
    }
}

export default connect(mapStateToTheProps, mapDispatchToTheProps)(App);
