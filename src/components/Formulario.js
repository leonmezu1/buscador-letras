/* eslint-disable jsx-a11y/label-has-associated-control */

const Formulario = () => (
  <div className="bg-info">
    <div className="container">
      <div className="row">
        <div className="col card text-white bg-transparent mb-5 pt-5 pb-2">
          <fieldset>
            <legend className="text-center">
              Buscador de letras y canciones
            </legend>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="artista">Artista</label>
                  <input
                    type="text"
                    name="artista"
                    className="form-control"
                    placeholder="Nombre del artista"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="cancion">Cancion</label>
                  <input
                    type="text"
                    name="cancion"
                    className="form-control"
                    placeholder="Nombre de la cancion"
                  />
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  </div>
);

export default Formulario;
