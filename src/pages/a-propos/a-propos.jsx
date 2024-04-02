
import React from 'react';
import '../../assets/css/App.css';
import Avis from '../../components/avis/avis'

function About() {
    return (
  <body>
    <div className="container-about">
      <main>
        <div className="div-about">
            <h2 className="about">Qui suis-je ?</h2>
            <p className="description">Passionné par le web depuis plus de 10 ans, je mets mes compétences et mes connaissances au service de votre société. Titulaire de plusieurs certifications, je peux vous aider, quels que soient les outils que vous utilisez. De nombreux clients m'ont fait confiance par le passé pour faire fructifier leur projet, et si le prochain était le vôtre ?</p>
            <Avis/>
        </div>
      </main>
    </div>
  </body>
    );
  }

  export default About;