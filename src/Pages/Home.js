import React from 'react';
import Navigation from '../Components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation/>
            <div className="homeContent">
                <div className="content">
                    <h1>Bienvenue!</h1>
                    <h2>Je m'appelle AIT HADDOU Ismail et je suis  :</h2>
                    <h2>Ingénieur chargé de projets informatiques web / logiciels , Développeur</h2>
                    <div className="pdf">
                        <a target="_blank" href="./Media/cv_Ismail_AH(FR).pdf">
                            <i className='fas fa-download mr-2'></i>
                            Téléchargez mon CV !
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;