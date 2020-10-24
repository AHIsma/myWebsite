import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
  state = {
    languages: [
      {id: 1, value: "P.O.O.", xp:1.6},
      {id: 2, value: "Programmation Web", xp:1.8},
      {id: 3, value: "Gestion de Bases de Données", xp:1.5},
      {id: 4, value: "Gestion Réseaux Informatiques et Configurations", xp:1.8}
    ],
    frameworks: [
      {id: 1, value: "HTML/CSS", xp:1.5,icon:"fas fa-file-code"},
      {id: 2, value: "JavaScript", xp:1.5,icon:"fab fa-js-square"},
      {id: 3, value: "NodeJS/PHP/SQL", xp:0.9,icon:"fas fa-server"},
      {id: 4, value: "Java (POO)", xp:0.9,icon:"fab fa-java"},
      {id: 5, value: "WINDEV/WEBDEV 25", xp:1,icon:"fas fa-laptop-code"},
      {id: 6, value: "Python3 (Robotique)", xp:0.5,icon:"fab fa-python"},
      {id: 7, value: "Logiciels : Pack office, SciLab, CISCO ASDM/Packet Tracer", xp:2,icon:"fab fa-windows"},
    ]
  };

  render() {
    let {languages, frameworks} = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar 
          languages={languages}
          className="languagesDisplay"
          title="Compétences"
        /> 
        <ProgressBar
          languages={frameworks}
          className="frameworksDisplay"
          title="Outils & Frameworks"
        />
      </div>
    );
  }
}

export default Languages;