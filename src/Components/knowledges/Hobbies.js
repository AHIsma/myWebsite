import React from 'react';

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Centres d'Intérêts</h3>
      <ul>
        <li className="hobby">
          <i className="fas fa-globe-europe"></i>
          <span>Géopolitique</span>
        </li>
        <li className="hobby">
          <i className="fas fa-brain"></i>
          <span>Psychologie</span>
        </li>  
        <li className="hobby">
          <i className="fas fa-running"></i>
          <span>Course à pied</span>
        </li>
        <li className="hobby">
          <i className="fas fa-dumbbell"></i>
          <span>Musculation</span>
        </li>
        <li className="hobby">
          <i className="fas fa-futbol"></i>
          <span>Football</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;