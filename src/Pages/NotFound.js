import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div className="notFound">
      <div className="notFoundContent">
        <h3 title="404, Page Not Found">404, Page Not Found !</h3>            
        <NavLink exact to="/">
          <i className="fas fa-home"></i>
          <span> {t('home')}</span>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;