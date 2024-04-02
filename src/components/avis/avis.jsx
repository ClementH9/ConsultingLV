import React from 'react';
import avisJson from '../../avis.json';

function AvisClients() {
  return (
    <div>
      <h1 className="avis-clients">Avis Clients</h1>
      {avisJson.map(avis => (
        <div key={avis.id}>
          <h3 className="titre-avis">{avis.auteur}</h3>
          <p className="contenu-avis">{avis.contenu}</p>
        </div>
      ))}
    </div>
  );
}

export default AvisClients;