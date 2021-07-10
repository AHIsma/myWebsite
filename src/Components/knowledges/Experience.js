import React from 'react';

const Experience = () => {
  return (
    <div className="experience">
      <h3>Expérience Professionnelle</h3>
        <div className="exp-1">
          <h4>Chargé de projets informatiques</h4>
          <h5>Palmer & Co (Avril-Juillet 2020)</h5>
          <h5>-	Objectifs réalisés :</h5>
          <p>Conception des fichiers de données et des maquettes, développement et déploiement sur serveur d’un site intranet de gestion commerciale.</p>
          <br></br>
          <h5>-	Acquis supplémentaires :</h5>
          <p>Analyse de besoin, gestion de base de données, configuration d’une zone démilitarisée du réseau (DMZ).</p>
        </div>
        <div className="exp-2">
          <h4>Restauration et vente</h4>
          <h5>Red's Traiteur (Février-Mai 2019)</h5>
          <p>Garantir un service en salle, personnalisé, avec un sens du détail.</p>
          <br></br>
          <p>Effectuer la remise en ordre en fin de service avec respect des règles HACCP.</p>
          <br></br>
          <p>Avoir la force de proposition pour améliorer la qualité de service.</p>
        </div>
      </div>
  );
};

export default Experience;