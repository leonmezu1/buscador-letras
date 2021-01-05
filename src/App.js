/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import axios from 'axios';

import Formulario from './components/Formulario';
import Info from './components/Info';
import Cancion from './components/Cancion';

const App = () => {
  const [busquedaLetra, guardarBusquedaLetra] = useState({});
  const [info, guardarInfo] = useState({});
  const [letra, guardarLetra] = useState('');

  useEffect(() => {
    if (Object.keys(busquedaLetra).length === 0) return;

    const consultarApiLetra = async () => {
      const { artista, cancion } = busquedaLetra;
      const url1 = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const letra = await axios.get(url1);
      const informacion = await axios.get(url2);

      console.log(letra, informacion);

      guardarLetra(letra.data.lyrics);
      guardarInfo(informacion.data.artists[0]);

      // guardarLetra(resultado.data.lyrics);'
    };
    consultarApiLetra();
  }, [busquedaLetra]);

  return (
    <>
      <Formulario guardarBusquedaLetra={guardarBusquedaLetra} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info info={info} />
          </div>
          <div className="col-md-6">
            <Cancion letra={letra} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
