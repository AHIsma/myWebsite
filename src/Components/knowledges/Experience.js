import React from 'react';
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const { t } = useTranslation();
  return (
    <div className="experience">
      <h3>{t('xp_pro')}</h3>
        <div className="exp-1">
          <h4>{t('xp_1')}</h4>
          <h5>Henley IT {t('date_1')}</h5>
          <h5>{t('tasks')}</h5>
          <p>
            {t('p_1')}
          </p>
          <p>
            {t('p_2')}
          </p>
          <h5>{t('tasks_alt')}</h5>
          <p>
            {t('p_3')}
          </p>
        </div>
        <div className="exp-2">
        <h4>{t('xp_2')}</h4>
          <h5>Palmer & Co {t('date_2')}</h5>
          <h5>{t('tasks')}</h5>
          <p>
          {t('p_4')}
          </p>
          <h5>{t('tasks_alt')}</h5>
          <p>{t('p_5')}</p>
        </div>
      </div>
  );
};

export default Experience;