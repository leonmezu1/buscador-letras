/* eslint-disable jsx-a11y/label-has-associated-control */

import { useState } from 'react';

const Formulario = () => {
  const [busqueda, guardarBusqueda] = useState({
    artista: '',
    cancion: '',
  });

  const [error, guardarError] = useState(false);

  const { artista, cancion } = busqueda;

  // funcion de busqueda

  const actualizarState = e => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  // Pedir informacion a la API

  const buscarInformacion = e => {
    e.preventDefault();

    if (artista.trim === '' || cancion.trim === '') {
      guardarError(true);
      return;
    }

    guardarError(false);
  };

  const showError = (
    <p className="alert alert-danger text-center p-2">
      Todos los campos son obligatorios
    </p>
  );

  const mainForm = (
    <form onSubmit={buscarInformacion}>
      <fieldset>
        <legend className="text-center">Buscador de letras y canciones</legend>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="artista">Artista</label>
              <input
                onChange={actualizarState}
                type="text"
                name="artista"
                className="form-control"
                placeholder="Nombre del artista"
                value={artista}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="cancion">Cancion</label>
              <input
                onChange={actualizarState}
                type="text"
                name="cancion"
                className="form-control"
                placeholder="Nombre de la cancion"
                value={cancion}
              />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary float-right">
          Button
        </button>
      </fieldset>
    </form>
  );

  return (
    <div className="bg-info">
      <div className="container">
        <div className="row">
          <div className="col card text-white bg-transparent mb-5 pt-5 pb-2">
            {error ? showError : null}
            {mainForm}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
