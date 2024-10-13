// src/Loteria.js
import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import NumeroSeleccion from './NumeroSeleccion';
import BotonSortear from './BotonSortear';
import Resultados from './Resultados';

function Loteria() {
  const [numerosSeleccionados, setNumerosSeleccionados] = useState([]);
  const [numerosGanadores, setNumerosGanadores] = useState([]);
  const [resultado, setResultado] = useState(null);

  // Función para manejar la selección de números
  const manejarSeleccionNumero = (numero) => {
    if (numerosSeleccionados.includes(numero)) {
      setNumerosSeleccionados(numerosSeleccionados.filter((n) => n !== numero));
    } else {
      if (numerosSeleccionados.length < 6) {
        setNumerosSeleccionados([...numerosSeleccionados, numero]);
      } else {
        alert('Solo puedes seleccionar hasta 6 números.');
      }
    }
  };

  // Función para realizar el sorteo
  const sortearNumeros = () => {
    const numeros = Array.from({ length: 49 }, (_, i) => i + 1);
    const numerosAleatorios = [];
    while (numerosAleatorios.length < 6) {
      const index = Math.floor(Math.random() * numeros.length);
      numerosAleatorios.push(numeros.splice(index, 1)[0]);
    }
    setNumerosGanadores(numerosAleatorios);
    verificarGanador(numerosAleatorios);
  };

  // Función para verificar si el usuario ganó
  const verificarGanador = (numerosAleatorios) => {
    const aciertos = numerosSeleccionados.filter((numero) =>
      numerosAleatorios.includes(numero)
    ).length;

    if (aciertos === 6) {
      setResultado('¡Felicidades! Has acertado todos los números.');
    } else if (aciertos > 0) {
      setResultado(`Has acertado ${aciertos} número(s).`);
    } else {
      setResultado('No has acertado ningún número.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Sorteo de Lotería
      </Typography>
      <NumeroSeleccion
        numerosSeleccionados={numerosSeleccionados}
        manejarSeleccionNumero={manejarSeleccionNumero}
      />
      <BotonSortear sortearNumeros={sortearNumeros} />
      <Resultados
        numerosGanadores={numerosGanadores}
        resultado={resultado}
      />
    </Container>
  );
}

export default Loteria;
