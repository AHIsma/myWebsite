import React from 'react';

const ProgressBar = (props) => {
  return (
    <div className={props.className}>
      <h3>{props.title}</h3>
      <div className="years">
        <span>Années d'expérience</span>
        <span>1 an</span>
        <span>2 ans</span>
        <span>3 ans</span>
      </div>
      
      <ul>
        {
          props.languages.map((item) => {
            let xpYears = 3;
            let progressBar = item.xp / xpYears * 100 + '%';

              return (
                <div key={item.id} className="languagesList">
                  
                  <li>
                    <i className={item.icon}></i>
                    <span> {item.value}</span>
                  </li>
                  <div className="progressBar" style={{width:progressBar}}></div>
                </div>
              )
          })
        }
      </ul>
    </div>
  );
};

export default ProgressBar;