import React, {Component} from 'react';
import './nofication.css';

class INotification extends Component {
    render() {
        return (
            <div className="i-notify-container">
                <div className="i-notify-header">
                    <h3>Nofication heading</h3>
                    <svg width="15" height="15">
                        <circle cx="7.5" cy="7.5" r="6" fill={this.props.color}/>
                    </svg>
                </div>
                <div className="clearfix"></div>
                <div className="i-notify">

                    <div className="i-i-notify">
                        <div className="i-notify-image-box">
                            <img src="./chaula-man.png" className="i-notify-image"/>
                            <span className="i-notify-info">

                        <span className="i-notify-name">
                            Patrice Chaula
                        </span>
                        <span className="i-notify-date">
                            {new Date().toDateString()}
                        </span>
                    </span>
                        </div>

                    </div>
                </div>

                <div className="i-notify-body">
                    <p>
                        This is my nofitication text. This
                        is where all the content goes. Description goes here If you want to know more. You can <a
                        className="i-notify-link">know more.</a></p>
                </div>
            </div>
        )
    }
}

export default INotification;