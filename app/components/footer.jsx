
import { Link  } from '@remix-run/react'


function Footer() {


  return (

    <footer className="footer" >
      <div className="contendenor contenido " >
      <nav className='navegacion' >
                <Link 
                to='/'
                >
                Inicio  
                </Link>

                <Link 
                to='/nosotros'
                >
                Nosotros  
                </Link>

                <Link 
                to='/tienda'
                >
                Tienda  
                </Link>

                <Link 
                to='/blog'
                >
                Blog  
                </Link>
        </nav>
        <p
        className="copyright"
        >
        Todos los derechos estan reservados { new Date().getFullYear() }
        </p>
      </div>


    </footer>



  )
}

export default Footer