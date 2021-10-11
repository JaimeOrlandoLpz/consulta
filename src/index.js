import React from 'react';
import ReactDOM from 'react-dom';
import { useFetchVideojuegos } from './componentes/hooks/useFetchVideojuegos';
import { ResultadoVideojuegos } from './componentes/ResultadoVideojuegos';
import './index.css';
import  {VideojuegosApp} from "./VideojuegosApp";
import {GameCollectionApp} from './componentes/GameCollectionApp'
import { GameLibraryApp } from './componentes/GameLibraryApp';


ReactDOM.render(
  <React.StrictMode>
    <GameLibraryApp></GameLibraryApp>
  </React.StrictMode>,
  document.getElementById('root')
);

