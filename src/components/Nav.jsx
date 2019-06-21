import React, {Component} from 'react';
import './Nav.css';
import {Link} from "react-router-dom";
import ILink from './ILink';

class Navbar extends Component {

    state = {
        links: [
            {
                name: 'Class',
                className: 'active-normal',
                to: '/class',
            },
            {
                name: 'Assignments',
                className: 'normal',
                to: '/assignments',
            },
            {
                name: 'Account',
                className: 'normal',
                to: '/account',
            },
            {
                name: 'Messages',
                className: 'normal',
                to: '/messages',
            }
        ]
    }

    raidStyle = (e) => {
        var lastActiveElement = document.querySelector(".active");
        if(lastActiveElement !== null){
            lastActiveElement.className = "";
            console.log(lastActiveElement.childNodes);
            var mytext = lastActiveElement.childNodes[0].childNodes[1];
            console.log(mytext);
            mytext.className = "";
        }
        var myelement = e.target;
        console.log(myelement.getAttribute('name'));
        if(myelement.getAttribute('name') === "svg"){
            console.log(myelement.parentNode);
            var myothertext = myelement.nextSibling;
            var parent = myelement.parentNode.parentNode;
            parent.className = "active";
            myothertext.className = "active-text";
        } else if (myelement.getAttribute('name') === "span"){
            console.log(myelement.parentNode);
            myelement.className = "active-text";
            var parent = myelement.parentNode.parentNode;
            parent.className = "active";
        }  else if(myelement.getAttribute('name') === "parentLink") {
            myelement.className = "active";
             var myotherothertext = myelement.childNodes[0].childNodes[1];
             myotherothertext.className = "active-text";
        }  else if(myelement.getAttribute('name') === "reactlink"){
            var xctext = myelement.childNodes[1];
            xctext.className = "active-text";
            var xcparent = myelement.parentNode;
            xcparent.className = 'active';
        }
    }

    render() {


        return (
            <header>
                <div className="container">

                    <ul className="nav-links">
                        <li className="logo">infomate</li>
                        <li name = "parentLink" className="active" onClick={this.raidStyle}><Link to="/class" name = "reactlink">

                            <svg xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 448 512"
                                 name="svg">
                                <path
                                    d="M439.39 362.29c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71zM67.53 368c21.22-27.97 44.42-74.33 44.53-159.42 0-.2-.06-.38-.06-.58 0-61.86 50.14-112 112-112s112 50.14 112 112c0 .2-.06.38-.06.58.11 85.1 23.31 131.46 44.53 159.42H67.53zM224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64z"/>
                            </svg>


                            <span className="active-text" name ="span">Class</span></Link></li>
                        <li
                            onClick={this.raidStyle}
                            name="parentLink"
                        ><Link to="/assignments">

                            <svg xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 576 512"
                                 name="svg"
                            >
                                <path
                                    d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"/>
                            </svg>
                            <span className="" name ="span">
                                Assignments</span></Link></li>
                        <li
                            onClick={this.raidStyle}
                            name="parentLink"
                        ><Link to="/account">

                            <svg xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 448 512"
                                 name="svg"
                            >
                                <path
                                    d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"/>
                            </svg>

                            <span className="" name ="span">Account</span>

                        </Link></li>
                        <li
                            onClick={this.raidStyle}
                            name="parentLink"
                        ><Link to="/messages">

                            <svg xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 512 512"
                                 name = "svg"
                            >
                                <path
                                    d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"/>
                            </svg>
                            <span className = "" name = "span">Messages
                            </span></Link></li>
                        <li>



                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M352 240v32c0 6.6-5.4 12-12 12h-88v88c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-88h-88c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h88v-88c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v88h88c6.6 0 12 5.4 12 12zm96-160v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"/></svg>
                            More
                        </li>
                    </ul>
                </div>
            </header>
        );
    }

}

export default Navbar;