import { createContext, use, useState } from "react";
import { useEffect } from "react";
import { AlertasSweets } from "../assets/SweetAlert";

export const CarritoContext = createContext();

export function CarritoProvider({ children }) {
  const [carritoGuardado, setCarritoGuardado] = useState([]);

  // AGREGAR PRODUCTOS
  const agregarArticuloCarrito = (artSeleccion, contadorArticulo) => {
    const artExiste = carritoGuardado.find((art) => art.id === artSeleccion.id);
    if (artExiste) {
      const carritoActualizado = carritoGuardado.map((art) => {
        if (art.id === artSeleccion.id) {
          const nuevoValorCantidad = {
            ...art,
            cantidad: art.cantidad + contadorArticulo,
          };
          console.log("carrito actualizado", nuevoValorCantidad);
          return nuevoValorCantidad;
        } else {
          return art;
        }
      });
      setCarritoGuardado(carritoActualizado);
    } else {
      setCarritoGuardado([...carritoGuardado, { ...artSeleccion, cantidad: contadorArticulo },]);
    }
     AlertasSweets('Agregado al carrito', 'success', 'Cerrar', 'Vea en la seccion CARRITO las entradas agregadas')
  };
  {
    useEffect(() => {
      console.log("lo que esta en carritoGuardado es : ", carritoGuardado);
    }, [carritoGuardado]);
  }

  // ELIMINAR DEL CARRITO

  const eliminarArticuloCarrito = (item) => {
    const itemBorrado = carritoGuardado.filter((items) => items.id != item);
    setCarritoGuardado(itemBorrado);
     AlertasSweets('Item eliminado', 'warning', 'Cerrar')
  };


  return (
    <CarritoContext.Provider
      value={{
        carritoGuardado,
        agregarArticuloCarrito,
        eliminarArticuloCarrito
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
}
