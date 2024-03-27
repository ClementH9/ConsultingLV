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
                    <li><Link to="/Expertises">Expertises</Link></li>
                    <li className="a-propos">A propos</li>
                    <li className="contact">Contact</li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;