import { useState, useEffect, useContext } from "react";
import { articuloContext } from "../contexts/articuloContext";
import { useParams } from "react-router-dom";
import { AlertasSweets2 } from "../assets/SweetAlert";
import { ToastContainer, toast } from 'react-toastify';


export default function FormularioEditarArticulos({ onActualizar }) {
  const { artSeleccion, obtenerArticulo, editarArticulo } = useContext(articuloContext);
  const [artEditar, setArtEditar] = useState(artSeleccion);
  const { id } = useParams();
  const [errores, setErrores] = useState({});

  useEffect(() => {
    obtenerArticulo(id);
  }),[id];

  // FUNCION PARA ACTUALIZAR CAPTURAR DATOS DESDE EL INPUT
  const handleChange = (e) => {
    const { name, value } = e.target;
    setArtEditar({ ...artEditar, [name]: value });
  };

  //FUNCION PARA VALIDAR LOS CAMPOS

  const validarFormulario = () => {
    const nuevosErrores = {};
    if (!artEditar.name.trim()) {
      nuevosErrores.name = "El nombre es obligatorio.";
      alert("NAME");
    }
    if (!artEditar.price || artEditar.price <= 5) {
      nuevosErrores.price = "El precio debe ser mayor a 5.";
      AlertasSweets2(nuevosErrores.price, "error", "Ok");
    }
    if (!artEditar.description.trim() || artEditar.description.length < 10) {
      nuevosErrores.description =
        "La descripción debe tener al menos 10 caracteres";
      AlertasSweets2(nuevosErrores.description, "error", "Ok");
    }
    if (!artEditar.avatar.trim()) {
      nuevosErrores.avatar = "Se debe subir al menos una Imagen";
      AlertasSweets2(nuevosErrores.avatar, "error", "Ok");
    }
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  // FUNCION PARA EL ENVIO DEL FORMULARIO
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      editarArticulo(artEditar)
      toast.success("Producto actualizado!!!")
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

  return (
    <form onSubmit={handleSubmit} className="form-agregarArt">
      <h2 className="titulo-editarArt">Editar Producto</h2>
      <div className="form-editarArt">
        <label className="editar-img">Imagen</label>
        <input
          type="text"
          name="avatar"
          value={artEditar.avatar}
          onChange={handleChange}
          className="editar-imgUrl"
        />

      
        <label className="editar-nombre">Nombre:</label>
        <input
          type="text"
          name="name"
          value={artEditar.name || ""}
          onChange={handleChange}
          required
          className="editar-nombreUrl"
        />
      
        <label className="editar-precio">Precio:</label>
        <input
          type="number"
          name="price"
          value={artEditar.price || ""}
          onChange={handleChange}
          required
          min="0"
          className="editar-precioUrl"
        />
     
        <label className="editar-desc">Descripción:</label>
        <textarea
          name="description"
          value={artEditar.description || ""}
          onChange={handleChange}
          required
          className="editar-descUrl"
        />

      <button className="btn-enviar" type="submit">Actualizar Producto</button>
      <ToastContainer/>
      </div>
    </form>
  );
}
