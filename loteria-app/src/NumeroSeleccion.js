// src/NumeroSeleccion.js
import React from 'react';
import { Grid, Checkbox } from '@mui/material';

function NumeroSeleccion({ numerosSeleccionados, manejarSeleccionNumero }) {
  return (
    <Grid container spacing={1}>
      {Array.from({ length: 49 }, (_, i) => i + 1).map((numero) => (
        <Grid item key={numero} xs={2}>
          <Checkbox
            checked={numerosSeleccionados.includes(numero)}
            onChange={() => manejarSeleccionNumero(numero)}
            color="primary"
          />
          {numero}
        </Grid>
      ))}
    </Grid>
  );
}

export default NumeroSeleccion;
