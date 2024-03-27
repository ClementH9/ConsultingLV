import React from 'react';
import '../../assets/css/App.css';
import Etapes from '../../components/etapes/etapes';
import MainBanner from '../../components/main-banner/main-banner';

function App() {
  return (
<body>
  <div class="container">
    <main>
      <MainBanner />
      <Etapes />
    </main>
  </div>
</body>
  );
}

export default App;