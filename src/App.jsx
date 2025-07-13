import './App.css'
import './styles/stylesCards.css'
import './styles/styles.css'

import Nav from './components/Nav'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Novedades from './components/Novedades'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Inicio from './layouts/Inicio'
import Articulos from './components/Articulos'
import Nosotros from './components/Nosotros'
import Contacto from './components/Contacto'
import Carrito from './components/Carrito'
import CardsDetalle from './components/CardsDetalle'
import Admin from './components/Admin'
import Login2 from './components/Login2'
import FormularioProducto from './components/FormularioArticulos'
import FormularioEditarArticulos from './components/FormularioEditarArticulos'
import { useContext, useEffect } from 'react'
import { AuthContext } from './contexts/AuthContext'



import './index.css'
import './styles/styles.css'
import './styles/stylesCards.css'
import './App.css'


function App() {
const {verificacionLogeo} =useContext(AuthContext)

useEffect(() => {
    verificacionLogeo();
  }, []);

  return (
    <Router>
      <>
      <Banner/>
      <Nav/>
      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/novedades' element={<Novedades/>} />
        <Route path='/articulos' element={<Articulos/>} />
        <Route path='/nosotros' element={<Nosotros/>} />
        <Route path='/carrito' element={<Carrito/>}/>
        <Route path='contacto' element={<Contacto/>}/>
        <Route path='/card-detalles/:id' element={<CardsDetalle/>}/>
        <Route path='/login' element={<Login2/>}/>
        <Route path='/admin' element={ <Admin/>}/>
        <Route path='/admin/agregarArticulos' element={<FormularioProducto/>}/>
        <Route path='/admin/editarArticulos/:id' element={<FormularioEditarArticulos/>}/>
      </Routes>
      <Footer/>
      </>
    </Router>
  )
}

export default App
