import React from 'react';
import { NavLink } from 'react-router-dom';

import profilPic from "../media/photo_profil.jpg";

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <div className="imgWrap">
                        <img src={profilPic} alt="profil-pic"/>
                    </div>
                    <h3>Tugdual Le Pen</h3>
                </div>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                        <NavLink end to="/" className={({ isActive }) => (isActive ? " navActive" : "")}>
                            <i className='fas fa-home'></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink end to="/knowledges" className={({ isActive }) => (isActive ? " navActive" : "")}>
                            <i className='fas fa-mountain'></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink end to="/portfolio" className={({ isActive }) => (isActive ? " navActive" : "")}>
                            <i className='fas fa-image'></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink end to="/contact" className={({ isActive }) => (isActive ? " navActive" : "")}>
                            <i className='fas fa-address-book'></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/tugdual-le-pen-287752160/" target="_blanck" rel="noopener noreferrer">
                            <i className='fab fa-linkedin'></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Tuckdu" target="_blanck" rel="noopener noreferrer">
                            <i className='fab fa-github'></i>
                        </a>
                    </li>
                </ul>

                <div className="signature">
                <p>Numbers - 2022</p>
            </div>
            </div>
            
        </div>
    );
};

export default Navigation;