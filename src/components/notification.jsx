import React, {Component} from 'react';
import './stylez/nofication.css';
import {Link} from "react-router-dom";

class INotification extends Component {
    colors = [
         '#ff0000', '#ffcc00', '#53ff1a']
     
    render() {
        return (
            <div className="i-notify-container">
                <div className="i-notify-header">
                    <Link to={`nofication/${this.props.data.pk}`}><h3> <svg width="15" height="15">
                        <circle cx="7.5" cy="7.5" r="6" fill={this.colors[this.props.data.color]}/>
                    </svg>{this.props.data.title}</h3></Link>
                   
                </div>
                <div className="clearfix"></div>
                <div className="i-notify">

                    <div className="i-i-notify">
                        <div className="i-notify-image-box">
                            <div className="image-wrapper">
                            <img src={this.props.data.user.profile_pic?this.props.data.user.profile_pic: 'img_avatar.png' } className="i-notify-image"/>
                            </div>
                            <span className="i-notify-info">

                        <span className="i-notify-name">
                           {this.props.data.user.first_name + " "+this.props.data.user.last_name } 
                           {" , " + this.props.data.user.occupation + " in " + this.props.data.user.course}
                        </span>
                        <span className="i-notify-date">
                            {this.props.data.pub_date}
                        </span>
                    </span>
                        </div>

                    </div>
                </div>

                

                <div className="i-notify-body">
                    <p>
                        {this.props.data.summary} </p>
                </div>
                <div className="tags">
                  <span className="tag">#{ new String(this.props.data.category.name).toLowerCase()}</span>
                </div>
            </div>
        )
    }
}

export default INotification;