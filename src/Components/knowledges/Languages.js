import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
  state = {
    languages: [
      {id: 2, value: "Développement Web", xp:2.8},
      {id: 3, value: "Développement Logiciel", xp:2},
      {id: 4, value: "Traitement de données", xp:2},
      {id: 1, value: "P.O.O.", xp:2.6},
      {id: 5, value: "Gestion de Bases de Données Relationnelles", xp:3},
      {id: 6, value: "Gestion Réseaux Informatiques et Configurations", xp:1.8}
    ],
    frameworks: [
      {id: 1, value: "HTML5 / CSS3", xp:2.5,icon:"fas fa-file-code mr-2"},
      {id: 2, value: "Angular JS", xp:2.7,icon:"fab fa-angular mr-2"},
      {id: 3, value: "React JS", xp:2,icon:"fab fa-react mr-2"},
      {id: 4, value: "NodeJS/PHP Symfony/SQL", xp:1.9,icon:"fas fa-server mr-2"},
      {id: 5, value: "Java", xp:0.9,icon:"fab fa-java mr-2"},
      {id: 6, value: "WINDEV/WEBDEV 25", xp:1.5,icon:"fas fa-laptop-code mr-2"},
      {id: 7, value: "Python3", xp:2,icon:"fab fa-python mr-2"},
      {id: 8, value: "Logiciels : Pack office, SciLab, CISCO ASDM/Packet Tracer", xp:2,icon:"fab fa-windows mr-2"},
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