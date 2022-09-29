import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className='contact'>
            <Navigation/>
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Rennes</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text='0675534811'>
                                <span className="clickInput" onClick={() => alert('Téléphone copié !')}>
                                    06 75 53 48 11
                                </span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className="far fa-envelope"></i>
                            <CopyToClipboard text='tugdual.lp@gmail.com'>
                                <span className="clickInput" onClick={() => alert('E-mail copié !')}>
                                    tugdual.lp@gmail.com
                                </span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                <div className="socialNetwork">
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/tugdual-le-pen-287752160/" target="_blanck" rel="noopener noreferrer">
                                <h4>LinkedIn</h4>
                                <i className='fab fa-linkedin'></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Tuckdu" target="_blanck" rel="noopener noreferrer">
                                <h4>Github</h4>
                                <i className='fab fa-github'></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;