
import React from 'react';
import '../../assets/css/App.css';
import Competencies from '../../components/competencies/competencies';
import BannerCompetencies from '../../components/banner-competencies/banner-competencies'

function Expertises() {
    return (
  <body>
    <div class="container">
      <main>
        <BannerCompetencies />
        <Competencies />
      </main>
    </div>
  </body>
    );
  }

  export default Expertises;