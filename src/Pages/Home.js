import React from 'react';
import Navigation from '../Components/Navigation';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();
    return (
        <div className="home">
            <Navigation/>
            <div className="homeContent">
                <div className="content">
                    <h1>{t('welcome')}</h1>
                    <h2>{t('intro')}</h2>
                    <h2>{t('specialty')}</h2>
                    <div className="pdf">
                        <a target="_blank" rel="noreferrer" href={t('link_cv')}>
                            <i className='fas fa-download mr-2'></i>
                            {t('download_CV')}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;