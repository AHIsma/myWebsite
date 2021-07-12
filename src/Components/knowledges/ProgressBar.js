import React from 'react';

const ProgressBar = (props) => {
  return (
    <div className={props.className}>
      <h3>{props.title}</h3>
      <div className="years">
        <span>{props.t('xp_yrs')}</span>
        <span>1 {props.t('yr')}</span>
        <span>2 {props.t('yrs')}</span>
        <span>3 {props.t('yrs')}</span>
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