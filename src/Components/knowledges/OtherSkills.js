import React from 'react';

const OtherSkills = () => {
  return (
    <div className="otherSkills">
      <h3>Autres compétences</h3>
      <div className="list">
        <ul>
          <li><i className="fab fa-github mr-2 fa-lg"></i> Github</li>
          <li><i className="fab fa-searchengin mr-2 fa-lg"></i> SEO</li>
          <li><i className="fas fa-recycle mr-2 fa-lg"></i> Méthodes agiles</li>
          <li><i className="fas fa-project-diagram mr-2 fa-lg"></i> Merise UML</li>
        </ul> 
        <ul>
          <li><i className="fas fa-check-square mr-2 fa-lg"></i> Anglais courant</li>
          <li><i className="fas fa-cubes mr-2 fa-lg"></i> Conception (Fusion 360°)</li>
          <li><i className="fas fa-layer-group mr-2 fa-lg"></i> UI/UX Design</li>
          <li><i className="fab fa-windows mr-2 fa-lg"></i> Active Directory</li>
        </ul> 
      </div>
    </div>
  );
};

export default OtherSkills;