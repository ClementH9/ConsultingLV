import React from 'react';
import '../../assets/css/App.css';

const Compétences = () => {
    return (
        <div className="differentes-competences">
            <div className="homepage">
                <div className="competence">
                    <div className="bloc-titre-competence">
                        <h2 className="titre-competence">Audit</h2>
                    </div>
                    <div className="bloc-description-competence">
                        <p className="description-competence">L'audit est une étude de cas personnalisée qui permet de définir la stratégie SEO qui sera utilisée ensuite. Il permet d'identifier les points forts à consolider et les axes d'amélioration à étudier. De cet audit découleront les préconisations quant à la marche à suivre pour optimiser vos performances SEO.</p>
                    </div>
                </div>
                <div className="competence reverse">
                    <div className="bloc-titre-competence">
                        <h2 className="titre-competence">Mots clés</h2>
                    </div>
                    <div className="bloc-description-competence">
                        <p className="description-competence">Le choix des mots-clés est probablement l'étape la plus importante dans l'élaboration d'une stratégie SEO. L'analyse, grâce à plusieurs outils, permet de choisir les keywords les plus utilisés possible, tout en restant pertinent au maximum. En vous positionnant sur les bons mots-clés, vous aurez beaucoup plus de trafic, mais il sera surtout de meilleure qualité pour une conversion améliorée.</p>
                    </div>
                </div>
                <div className="competence">
                    <div className="bloc-titre-competence">
                        <h2 className="titre-competence">Rédaction</h2>
                    </div>
                    <div className="bloc-description-competence">
                        <p className="description-competence">La rédaction permet de faire fructifier cette recherche SEO grâce à l'utilisation des mots-clés qui ont été choisis. En rédigeant des contenus qualitatifs et pertinents, à la fois pour le lecteur mais également pour les moteurs de recherche, vous remonterez forcément dans les résultats sur Google et donc serez plus visibles.</p>
                    </div>
                </div>
                <div className="competence reverse">
                    <div className="bloc-titre-competence">
                        <h2 className="titre-competence">Maillage</h2>
                    </div>
                    <div className="bloc-description-competence">
                        <p className="description-competence">Avec un maillage interne comme externe, vous augmenterez (encore) votre popularité sur le web. Les liens vers différentes pages améliorent le SEO et permettent également de renforcer les mots clés choisis. Le maître mot reste la pertinence pour gagner en visibilité.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Compétences;