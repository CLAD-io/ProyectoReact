import { useState } from "react";
import { AlertasSweets2 } from "../assets/SweetAlert";
import { useContext } from "react";
import { articuloContext } from "../contexts/articuloContext";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export default function FormularioProducto() {
  const { agregarProducto } = useContext(articuloContext);
  const [producto, setProducto] = useState({
    name: "",
    price: "",
    description: "",
    avatar: ""
  });
  const { admin } = useContext(AuthContext);

  //USO DESTRUCTURACION
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  // VALIDAR LOS CAMPOS DEL FORMULARIO ALTA DE ARTICULOS
  const [errores, setErrores] = useState({});

  const validarFormulario = () => {
    const nuevosErrores = {};
    if (!producto.name.trim()) {
      nuevosErrores.name = "El nombre es obligatorio.";
      alert("NAME");
    }
    if (!producto.price || producto.price <= 5) {
      nuevosErrores.price = "El precio debe ser mayor a 5.";
      AlertasSweets2(nuevosErrores.price, "error", "Ok");
    }
    if (!producto.description.trim() || producto.description.length < 10) {
      nuevosErrores.description =
        "La descripción debe tener al menos 10 caracteres";
      AlertasSweets2(nuevosErrores.description, "error", "Ok");
    }
    if (!producto.avatar.trim()) {
      nuevosErrores.avatar = "Se debe subir al menos una Imagen";
      AlertasSweets2(nuevosErrores.avatar, "error", "Ok");
    }
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      agregarProducto(producto);
      setProducto({ name: "", price: "", description: "", avatar: "" });
      setErrores({});
    }
    return (
      <>
        {errores.name && <p style={{ color: "red" }}>{errores.nombre}</p>}
        {errores.price && <p style={{ color: "red" }}>{errores.price}</p>}
        {errores.descripcion && (
          <p style={{ color: "red" }}>{errores.descripcion}</p>
        )}
      </>
    );
  };
  //CONDICIONAL QUE HABILITA O NO LA PESTAÑA EL FORMULARIO ARTICULOS, ES DECIR ESTE COMPONENTE
  if (!admin) {
    return (<Navigate to="/login" replace />)
  }

  //FORMULARIO DE ALTA DE ARTICULOS
  
  return (
    <form onSubmit={handleSubmit} className="form-agregarArt">
      
      <h2 className="titulo-agregarArt">Agregar Producto</h2>

      <div className="form-cargaArt">
      
        <label className="carga-img" >Imagen</label>
        <input
        className="carga-imgUrl"
          type="text"
          name="avatar"
          value={producto.avatar}
          onChange={handleChange}
        />

     
        <label className="carga-nombre">Nombre:</label>
        <input
        className="carga-nombreUrl"
          type="text"
          name="name"
          value={producto.name}
          onChange={handleChange}
          required
        />

      
        <label className="carga-precio">Precio:</label>
        <input
        className="carga-precioUrl"
          type="number"
          name="price"
          value={producto.price}
          onChange={handleChange}
          required
          min="0"
        />
     
        <label className="carga-desc">Descripción:</label>
        <textarea
        className="carga-descUrl"
          name="description"
          value={producto.description}
          onChange={handleChange}
          required
          style={{resize:'none'}}
        />
     
      <button type="submit" className="btn-enviar">Agregar Producto</button>
      </div>
    </form>
  );
}
