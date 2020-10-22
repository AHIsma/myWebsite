import React, { Component } from 'react';
import Navigation from '../Components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class contact extends Component {

  render() {
    return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez moi</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Reims | France</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="0676312755">
                <span className="clickInput" onClick={() => { alert('Téléphone copié !'); }}>06 76 31 27 55</span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <a href="mailto:ismail.aithaddou@viacesi.fr" target="_blank" rel="noopener noreferrer">ismail.aithaddou@viacesi.fr</a>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <a href="https://www.linkedin.com/in/ismail-ait-haddou-664324194/" target="_blank" rel="noopener noreferrer">
              <h4>LinkedIn</h4>
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/yPROGGZ" target="_blank" rel="noopener noreferrer">
              <h4>Github</h4>
              <i className="fab fa-github"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
    );
  }
}

export default contact;