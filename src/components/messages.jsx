import React, {Component} from 'react';
import './stylez/messages.css';
import IMessage from './message';
import IMessagePanel from './messages-panel';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
import Navbar from "./Nav";

class IMessages extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar current = "messages"/>
                <div className="container-messages">
                    <div className="space"></div>
                    <div className="messages-row">
                        <div className="messages-col-md">
                           <ul>
                               <li className="selected"><img  src ="./img_avatar2.png"/>
                               <span className="messages-text">Conversation 1</span>
                               </li>
                               <li><img  src ="./img_avatar2.png"/>
                                   <span className="messages-text">Conversation 2</span><span className="message-count">1</span></li>
                               <li><img src="./img_avatar.png"/>
                                   <span className="messages-text">Conversation 3</span></li>
                               <li><img src="./group.jpg"/>
                                   <span className="messages-text">Group</span><span className="message-count">2453</span> </li>
                           </ul>
                        </div>
                        <div className="messages-col-lg">
                            <div className="messages-conversation">
                                <div className="right-side"> <p>wadii</p></div>
                                <div className="left-side"><p>wadii</p></div>
                                <div className="right-side"><p>Ko ndipowo assignment iya iya</p></div>
                                <div className="left-side"><p>Handisati ndapedza wangu</p></div>
                            </div>
                         <div className="message-input-container">
                             <form>
                             <input type="text" name="messagetext" placeholder="type a message"/>
                             <button type="submit"><FontAwesomeIcon icon={faMailBulk}/>Send</button>
                             </form>
                         </div>
                        </div>
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