import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="./Media/Initials.png" alt="portrait-me"/>
                </div>
            </div>
            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                            <i className="fas fa-home"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/competences" activeClassName="navActive">
                            <i className="fas fa-mountain"></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/portfolio" activeClassName="navActive">
                            <i className="fas fa-images"></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" activeClassName="navActive">
                            <i className="fas fa-address-book"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="mailto:ismail.aithaddou@viacesi.fr" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-envelope-square"></i></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/ismail-ait-haddou-664324194/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/ismailaitt" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-square"></i></a>
                    </li>
                </ul>
            </div>
            <div className="signature">
                    <img src="./Media/cesico.png" alt="logo-cesi"/>
                    <p>Etudiant au CESI de Reims | France </p>
            </div>
        </div>
    );
};

export default Navigation;