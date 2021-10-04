import React from 'react';
import ReactDOM from 'react-dom';
import { useFetchVideojuegos } from './componentes/hooks/useFetchVideojuegos';
import { ResultadoVideojuegos } from './componentes/ResultadoVideojuegos';
import './index.css';
import  {VideojuegosApp} from "./VideojuegosApp";

ReactDOM.render(
  <React.StrictMode>
    <VideojuegosApp/>
  </React.StrictMode>,
  document.getElementById('root')
);

