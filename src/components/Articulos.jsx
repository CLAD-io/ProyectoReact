import { useContext, useEffect, useState } from "react";
import { articuloContext } from "../contexts/articuloContext";
import Cards from "./Cards";
import imgCargando from "../assets/loading.gif";
import { AuthContext } from "../contexts/AuthContext";
import { Helmet } from "react-helmet";
import { ImSearch } from "react-icons/im";

export default function Articulos() {
  const { articulos, cargando, error, filtarAticulos } =
    useContext(articuloContext);
  const { verificacionLogeo } = useContext(AuthContext);
  const [filtro, setFiltro] = useState("");
  const articuloPorPagina = 6;
  const [paginaActual, setPaginaActual] = useState(1);
  const indiceUltimoProducto = paginaActual * articuloPorPagina;
  const indicePrimerProducto = indiceUltimoProducto - articuloPorPagina;
  const productosActuales = articulos.slice(
    indicePrimerProducto,
    indiceUltimoProducto
  );

  //USO LA FUNCION VERIFICACIONLOGEO PARA LEER EL LOCALSTORAGE Y VER SI EL USUARIO SIGUE CONECTADO
  useEffect(() => {
    verificacionLogeo();
  }, []);

  useEffect(() => {
    filtarAticulos(filtro);
    console.log("estoy recargado" + filtro.length);
  }, [filtro]);

  const totalPaginas = Math.ceil(articulos.length / articuloPorPagina);
  const cambiarPagina = (numeroPagina) => setPaginaActual(numeroPagina);

  if (cargando) {
    return (
      <>
        <Helmet>
          <title>Entradas | RouteTikcs!</title>
          <meta name="description" content="¡Explora todo los eventos!." />
        </Helmet>
        <img src={imgCargando} alt="" style={{ width: "50px" }} />
        <p>Cargando Items</p>
      </>
    );
  } else if (error) {
    <p>{error}</p>;
  } else {
    return (
      <>
        {/* Filtrar articulos */}
        <div className="barra-busqueda">
          <label htmlFor="busqueda">Busqueda </label>
          <div className="lupa-container">
            <input
              type="text"
              placeholder="Buscar..."
              className="input-buscar"
              value={filtro}
              id="busqueda"
              autoComplete="off"
              onChange={(e) => setFiltro(e.target.value)}
            />
            <ImSearch className="icon-lupa" />
          </div>
        </div>
        <div className="cards">
          {productosActuales.map((producto) => (
            <Cards articulos={producto} />
          ))}
        </div>

        {/* Paginador */}
        <div className="paginador">
          {Array.from({ length: totalPaginas }, (_, index) => (
            <button
              key={index + 1}
              className={`btn mx-1 ${
                paginaActual === index + 1
                  ? "btn-primary"
                  : "btn-outline-primary"
              }`}
              onClick={() => cambiarPagina(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </>
    );
  }
}
