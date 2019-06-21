import React, {Component} from 'react';
import {Link} from "react-router-dom";


class ILink extends Link{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                {this.props.to}
            </div>
        );
    }
}

export default ILink;