import React, {Component} from 'react';
import './stylez/notification_detail_view.css';
import './stylez/nofication.css';
import Navbar from "./Nav";

class NotificationDetailView extends Component{
    render(){
        return(
            <React.Fragment>
            <Navbar/>
            <div className = "container-notification-detail-view">
                <div className="notification-detail-content-wrapper">
                    <div className="notification-detail-content">
                   <div className="i-notification-header">
                       <h3>Notification title</h3>
                       
                        <div className="i-notify-image-box">
                            <div className="image-wrapper">
                            <img src= 'img_avatar.png' className="i-notify-image"/>
                            </div>
                            <span className="i-notify-info">

                        <span className="i-notify-name">
                           @username
                        </span>
                        <span className="i-notify-date">
                            Date
                        </span>
                    </span>
                        

                    </div>
                </div>
                <div className="i-notification-body">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Cumque quibusdam culpa asperiores, quidem accusantium suscipit 
                        aperiam libero nulla debitis cum
                         
                         </p>
                         <p><b>And </b></p>
                         <p>vero ipsum, quam laboriosam illo cupiditate
                          laudantium itaque saepe assumenda.</p>
                          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Cumque quibusdam culpa asperiores, quidem accusantium suscipit 
                        aperiam libero nulla debitis cum
                         
                         </p>
                </div>
                </div>
                   </div>
                   <div className="notification-detail-related feed-content">
                   <p className="i-notification-heading">Related</p>
                   <ul>
                   <li><span
                                            className="content-text">You are supposed to visit this</span></li>
                    <li><span className="content-text">Another link to visit</span></li>
                    <li><span
                                            className="content-text">Related notification some notification</span></li>
                    <li><span
                                            className="content-text">You are supposed to visit this</span></li>
                    <li><span className="content-text">Another link to visit</span></li>
                    <li><span
                                            className="content-text">Related notification some notification</span></li>
                    <li><span
                                            className="content-text">You are supposed to visit this</span></li>
                    <li><span className="content-text">Another link to visit</span></li>
                    <li><span
                                            className="content-text">Related notification some notification</span></li>
                   </ul>
                </div>
                </div>
                
               
                
            
            </React.Fragment>
        )
    }
}

export default NotificationDetailView;