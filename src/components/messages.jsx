import React, {Component} from 'react';
import './messages.css';
import IMessage from './message';
import IMessagePanel from './messages-panel';

class IMessages extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-messages">
                    <div className="space"></div>
                    <div className="panel">
                        <ul>
                            <li className="active-user"><span className="text">Patrice Chaula</span></li>
                            <li><span className="text">John Doe</span></li>
                            <li><span className="text">Kanye West</span></li>
                            <li><span className="text">Kendrick Lamar</span></li>
                        </ul>
                    </div>

                    <div className="content">
                        <IMessage color="green"/>
                    </div>

                </div>
                <div className="footer-messages">
                    <p>Infomate &copy; 2019</p>
                </div>
            </React.Fragment>
        );
    }
}

export default IMessages;