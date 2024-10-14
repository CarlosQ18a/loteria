// src/BotonSortear.js
import React from 'react';
import { Button } from '@mui/material';

function BotonSortear({ sortearNumeros }) {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={sortearNumeros}
      fullWidth
      style={{ marginTop: 20 }}
    >
      Sortear Números
    </Button>
  );
}

export default BotonSortear;


