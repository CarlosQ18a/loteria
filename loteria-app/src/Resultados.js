// src/Resultados.js
import React from 'react';
import { Typography } from '@mui/material';

function Resultados({ numerosGanadores, resultado }) {
  return (
    <div style={{ marginTop: 20 }}>
      <Typography variant="h6" align="center">
        Números Ganadores: {numerosGanadores.join(', ')}
      </Typography>
      <Typography variant="h6" align="center" color="secondary">
        {resultado}
      </Typography>
    </div>
  );
}

export default Resultados;
