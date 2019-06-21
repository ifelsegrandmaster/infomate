import React, {Component} from 'react';
import './assignments.css';
import IAssignment from './iassignment';
class IAssignments extends Component {
    render() {
        return(
            <React.Fragment>
            <div className="container">
                <div className="space"></div>
               <IAssignment color = "green"/>
               <IAssignment color = "green"/>
               <IAssignment color = "red"/>
                <IAssignment color = "yellow"/>

            </div>
                <div className="footer">
                    <p className="copyright">Infomate &copy; 2019</p>
                </div>
            </React.Fragment>
        );
    }
}

export default IAssignments;