import React from 'react';

const DashboardEstadisticas: React.FC = () => {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <div style={{ marginBottom: '20px' }}>
        {/* Icono de estadísticas tipo gráfico de barras */}
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="30" width="8" height="22" rx="2" fill="#8a2be2"/>
          <rect x="24" y="18" width="8" height="34" rx="2" fill="#8a2be2"/>
          <rect x="40" y="10" width="8" height="42" rx="2" fill="#8a2be2"/>
        </svg>
      </div>
      <h1 style={{ color: '#8a2be2' }}>Dashboard de Estadísticas</h1>
      <p>Bienvenido al panel de estadísticas. Aquí podrás visualizar información consolidada y análisis avanzados.</p>
    </div>
  );
};

export default DashboardEstadisticas; 