import React from 'react';
import './CriterioItem.css';

const CriterioItem = ({ criterio }) => {
  return (
    <div className="criterio-item">
      <div className="criterio-header">
        <div className="criterio-info">
          <div className="criterio-nombre">{criterio.nombre}</div>
          <div className="criterio-descripcion">{criterio.descripcion}</div>
        </div>
        <div className="criterio-promedio">{criterio.promedio}</div>
      </div>
    </div>
  );
};

export default CriterioItem; 