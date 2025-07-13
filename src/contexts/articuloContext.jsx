import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AlertasSweets2 } from "../assets/SweetAlert";


export const articuloContext = createContext();

export function ArticuloProvider({ children }) {
  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [artSeleccion, setArtSeleccion] = useState([]);
  const [originalArt, setOriginalArt] = useState("");

  {
    useEffect(() => {
      fetch("https://6817f2995a4b07b9d1cd99fb.mockapi.io/productos")
        .then((resp) => resp.json())
        .then((datos) => {
          setCargando(false);
          setArticulos(datos);
          setOriginalArt(datos)
        })
        .catch((err) => {
          setError("Hubo un error al querer cargar los datos");
          setCargando(false);
        });
    }, []);
  }

  // Agregar productos nuevos a la API
  const agregarProducto = async (producto) => {
    try {
      const respuesta = await fetch(
        "https://6817f2995a4b07b9d1cd99fb.mockapi.io/productos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(producto),
        }
      );
      if (!respuesta.ok) {
        throw new Error("Error al agregar el producto.");
      }
      const data = await respuesta.json();
      console.log("Producto agregado:", data);
      AlertasSweets2("Se agregó el Articulos", "success", "Ok");
    } catch (error) {
      console.error(error.message);
      AlertasSweets2(
        "Hubo un error al cargar el articulo, compruebe la conexion con la API",
        "error",
        "Cerrar"
      );
    }
  };

  function obtenerArticulo(id) {
    if (!cargando) {
      const seleccion = articulos.find((art) => art.id === id);
      setArtSeleccion(seleccion);
    }
  }

  function editarArticulo(artEditar) {
    new Promise(async (res, rej) => {
      try {
        const respuesta = await fetch(
          `https://6817f2995a4b07b9d1cd99fb.mockapi.io/productos/${artEditar.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(artEditar),
          }
        );
        if (!respuesta.ok) {
          throw new Error("Error al actualizar el producto.");
        }
        const data = await respuesta.json();
        res(data);
        console.log("Producto actualizado correctamente.");
      } catch (error) {
        console.error(error.message);
        alert("Hubo un problema al actualizar el producto.");
      }
      rej(error);
    });
  }

  async function borrarArticulo(id) {
    const confirmar = window.confirm("¿Estás seguro de eliminar?" + id);
    if (confirmar) {
      try {
        const respuesta = await fetch(
          `https://6817f2995a4b07b9d1cd99fb.mockapi.io/productos/${id}`,
          {
            method: "DELETE",
          }
        );
        if (!respuesta.ok) throw new Error("Error al eliminar");
        alert("Producto eliminado correctamente.");
      } catch (error) {
        console.error(error.message);
        alert("Hubo un problema al eliminar el producto.");
        console.log("error: " + error.message)
      }
    }
  }

  function filtarAticulos(filtro){
    if(filtro.length > 0){
      console.log("viendo caracteres: " + filtro)
      const buscarArt = articulos.filter((artFiltrar)=>
        artFiltrar.name.toLowerCase().includes(filtro.toLowerCase())
      )
      console.log('articulos en el buscart', buscarArt)
      setArticulos(buscarArt)
    }
    else{
      setArticulos(originalArt)
    }
  }

  return (
    <articuloContext.Provider
      value={{
        cargando,
        articulos,
        error,
        agregarProducto,
        obtenerArticulo,
        artSeleccion,
        editarArticulo,
        borrarArticulo,
        filtarAticulos
      }}
    >
      {children}
    </articuloContext.Provider>
  );
}
