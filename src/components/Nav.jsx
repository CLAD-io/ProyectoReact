import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { FaShoppingCart } from "react-icons/fa";
import { TiThMenuOutline } from "react-icons/ti";
import { useMediaQuery } from "react-responsive";




export default function Nav (){
const {admin} = useContext(AuthContext)
const [menuAbierto, setMennuAbierto] = useState(false)
const ocultar = useMediaQuery({minWidth:900})

const abrirCerrar = () => {
    setMennuAbierto(valor => !valor);

}

    return(
        <>
        <button className="hamburguesa-menu" onClick={abrirCerrar}><TiThMenuOutline className="icon-hamburguesa" /></button>
        <nav className="nav">
            <ul className={`nav-ul ${menuAbierto ? "nav-visible" : ""  }`}>
                <li><Link to='/' className='nav-link' >Inicio</Link> </li>
                { ocultar && <li><Link to='/novedades' className='nav-link'  >Novedades</Link> </li>}
                <li><Link to='/articulos' className='nav-link' >Recitales</Link> </li>
                <li><Link to='/nosotros' className='nav-link' >Nosotros</Link> </li>
                <li><Link to='/carrito' className='nav-link' > Carrito <FaShoppingCart className="carrito-icon"/> </Link> </li>
                <li><Link to='/contacto' className='nav-link' >Contacto</Link></li>
                { admin ? <li><Link to='/admin' className='nav-link' >Admin</Link></li> : <></> }
                <li><Link to='/login' className='nav-link' >Login</Link> </li>
            </ul>
        </nav>
        </>
        
    )
}