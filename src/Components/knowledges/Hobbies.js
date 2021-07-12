import React from 'react';
import { useTranslation } from 'react-i18next';

const Hobbies = () => {
  const { t } = useTranslation();
  return (
    <div className="hobbies">
      <h3>{t('interests')}</h3>
      <ul>
        <li className="hobby">
          <i className="fas fa-globe-europe"></i>
          <span>{t('geopolitic')}</span>
        </li>
        <li className="hobby">
          <i className="fas fa-brain"></i>
          <span>{t('psych')}</span>
        </li>  
        <li className="hobby">
          <i className="fas fa-running"></i>
          <span>{t('run')}</span>
        </li>
        <li className="hobby">
          <i className="fas fa-dumbbell"></i>
          <span>{t('bodyb')}</span>
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