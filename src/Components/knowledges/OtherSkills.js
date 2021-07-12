import React from 'react';
import { useTranslation } from 'react-i18next';

const OtherSkills = () => {
  const { t } = useTranslation();
  return (
    <div className="otherSkills">
      <h3>{t('skills_alt')}</h3>
      <div className="list">
        <ul>
          <li><i className="fab fa-github mr-2 fa-lg"></i> Github</li>
          <li><i className="fab fa-searchengin mr-2 fa-lg"></i> SEO</li>
          <li><i className="fas fa-recycle mr-2 fa-lg"></i> {t('agile')}</li>
          <li><i className="fas fa-project-diagram mr-2 fa-lg"></i> Merise UML</li>
        </ul> 
        <ul>
          <li><i className="fas fa-check-square mr-2 fa-lg"></i> {t('english')}</li>
          <li><i className="fas fa-cubes mr-2 fa-lg"></i> {t('conception')} (Fusion 360°)</li>
          <li><i className="fas fa-layer-group mr-2 fa-lg"></i> UI/UX Design</li>
          <li><i className="fab fa-windows mr-2 fa-lg"></i> Active Directory</li>
        </ul> 
      </div>
    </div>
  );
};

export default OtherSkills;