
import { Link ,  useLocation } from '@remix-run/react'
import logo from '../../public/img/logo.svg'

import carrito from '../../public/img/carrito.png'


function Header() {

    const location = useLocation()

  return (
      <header className='header'>
          <div className='contenedor barra '>
              <Link className='logo' to='/'>
                  <img src={logo} className='logo' alt='Imagen logo' />
              </Link>
              <nav className='navegacion'>
                  <Link to='/' className={location.pathname === '/' ? 'active' : ''}>
                      Inicio
                  </Link>

                  <Link
                      to='/nosotros'
                      className={location.pathname === '/nosotros' ? 'active' : ''}>
                      Nosotros
                  </Link>

                  <Link
                      to='/guitarras'
                      className={location.pathname === '/guitarras' ? 'active' : ''}>
                      Tienda
                  </Link>

                  <Link
                      to='/blog'
                      className={location.pathname === '/blog' ? 'active' : ''}>
                      Blog
                  </Link>

                  <Link to='/carrito'>
                      <img src={carrito} alt='imagen de carrito ' />
                  </Link>
              </nav>
          </div>
      </header>
  );
}

export default Header





