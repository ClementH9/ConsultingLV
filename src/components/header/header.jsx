import React from 'react'
import logoLV from '../../assets/images/lv-logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="logo">
            <img src={logoLV} alt="LV Consulting" className="logo"/>
            </div>
            <nav className="largeur_trait_mobile">
                <ul class="menu">
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/expertises">Expertises</Link></li>
                    <li><Link to="/a-propos">A propos</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;