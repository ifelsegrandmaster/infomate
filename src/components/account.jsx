import React, {Component} from 'react';
import './account.css';
import INofication from './notification';
import IClass from './class';
import IPAccount from './ipaccount';
class IAccount extends Component{
    render() {
        return(
            <React.Fragment>
            <div className="container">
                <div className="space"></div>
                <IPAccount/>
                <div className="space"></div>
            </div>
                <div className="footer">
                    <p>Infomate &copy; 2019</p>
                </div>
            </React.Fragment>
        );
    }
}

export default IAccount;