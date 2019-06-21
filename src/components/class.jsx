import React, {Component} from 'react';
import './class.css';
import INotification from './notification';

class IClass extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="space">

                </div>
            <div className="container">
                <INotification color="green"/>
                <INotification color="red"/>
                <INotification color="yellow"/>
                <INotification color="red"/>
                <INotification color="green"/>
                <INotification color="red"/>
                <INotification color="yellow"/>
                <INotification color="red"/>

            </div>
                <div className="footer">
                    <p className="copyright">Infomate &copy; 2019</p>
                </div>
            </React.Fragment>
        );
    }
}

export default IClass;