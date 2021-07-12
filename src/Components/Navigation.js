import React,{useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import LanguageSelect from './LanguageSelect';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
    const { t } = useTranslation();
    const [scrolled,setScrolled]=React.useState(false);
    const handleScroll=() => {
        const offset=window.scrollY;
        const size=window.innerWidth;
        if(offset > 0 && size < 992){
            setScrolled(true);
        }else{
            setScrolled(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    })
    let navbarClasses=['sidebar'];
        if(scrolled){
            navbarClasses.push('scrolled');
        }
    return (
        <div className={navbarClasses.join(" ")}>
            <div className="id">
                <NavLink exact to="/" activeClassName="navActive">
                    <div className="idContent">
                        <img src="./Media/Initials.png" alt="portrait-me"/>
                    </div>
                </NavLink>
                <div>
                    <LanguageSelect />
                </div>
            </div>
            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                            <i className="fas fa-home"></i>
                            <span>{t('home')}</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/competences" activeClassName="navActive">
                            <i className="fas fa-mountain"></i>
                            <span>{t('skills')}</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/portfolio" activeClassName="navActive">
                            <i className="fas fa-images"></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" activeClassName="navActive">
                            <i className="fas fa-address-book"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="socialNetwork">
                <ul className="wrapper">
                    <a href="mailto:ismail.aithaddou@viacesi.fr" target="_blank" rel="noopener noreferrer">
                        <li className="icon mail">
                            <div className="tooltip">
                                E-mail
                            </div>
                            <span>
                                <i className="fas fa-envelope"></i>
                            </span>
                        </li>
                    </a>
                    <a href="https://github.com/AHIsma" target="_blank" rel="noopener noreferrer">
                        <li className="icon github">
                            <div className="tooltip" >
                                Github
                            </div>
                            <span>
                                <i className="fab fa-github"></i>
                            </span>
                        </li>
                    </a>
                    <a href="https://www.facebook.com/ismailaitt" target="_blank" rel="noopener noreferrer">
                        <li className="icon facebook">
                            <div className="tooltip" >
                                Facebook
                            </div>
                            <span>
                                <i className="fab fa-facebook-f"></i>
                            </span>
                        </li>
                    </a>
                    <a href="https://www.linkedin.com/in/ismail-ait-haddou-664324194/" target="_blank" rel="noopener noreferrer">
                        <li className="icon linkedin">
                            <div className="tooltip">
                                LinkedIn
                            </div>
                            <span>
                                <i className="fab fa-linkedin"></i>
                            </span>
                        </li>
                    </a>
                </ul>
            </div>
            <div className="signature">
                    <img src="./Media/cesico.png" alt="logo-cesi"/>
                    <p>{t('footer')}</p>
            </div>
        </div>
    );
};

export default Navigation;