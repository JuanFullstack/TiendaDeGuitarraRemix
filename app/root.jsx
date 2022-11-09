
import  { useState, useEffect } from 'react';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  useCatch,
  ScrollRestoration,
} from "@remix-run/react";
import styles from '~/styles/index.css'
import Header from '~/components/header';
import Footer from "~/components/footer";





export function meta () {
  return (
    {
      charset:'UTF-8',
      title: 'GuitarLA-Remix' ,
      viewport: 'width=device-width, initial-scale=1.0'

    }
  )
}



export function links () {
  return [
          {
            rel:'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
          },
          {
            rel:'stylesheet',
            href: styles
            
          },
          {
            rel:'preconnect',
            href: 'https://fonts.googleapis.com'
          },
          {
            rel:'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin : 'true'
          },
          {
            rel:'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap',
            
          }

         ]
}



export default function App() {

  
  const carritoLS = typeof window !== 'undefined' ?  JSON.parse( localStorage.getItem('carrito') )??[] : null

  const [carrito ,setcarrito] = useState(carritoLS)
 
  useEffect(() => {
   localStorage.setItem('carrito', JSON.stringify(carrito) )
   
  }, [carrito]);



 const agregarcarrito = (guitarra) => {

     if (carrito.some((GuitarraState) => GuitarraState.id === guitarra.id)) 
     
     {
         const carritoActulizado = carrito.map((GuitarraState) => {
             if (GuitarraState.id === guitarra.id) {
                 GuitarraState.cantidad = guitarra.cantidad;
             }
             return GuitarraState
         });
         setcarrito(carritoActulizado)
     } else {
         setcarrito([...carrito, guitarra]);
     }
 };

 
const actulizarvalor = guitarra => {

      const cantidadactulizada = carrito.map((GuitarraState) => {
        if (GuitarraState.id === guitarra.id) {
            GuitarraState.cantidad = guitarra.cantidad;
        }
        return GuitarraState
});

setcarrito(cantidadactulizada)

}

const eliminadoguitarra = (id) => {

    const cantidadactulizada = carrito.filter((GuitarraState) => GuitarraState.id != id);

    setcarrito(cantidadactulizada);
};

  return (
   <Document>
      < Outlet
          context = 
          {
            {
              agregarcarrito,
              carrito,
              actulizarvalor,
              eliminadoguitarra
           }
         }
          
      />
   </Document>
  );
}



function Document ( {children} ) {

  return (
     
     <html lang="es">
        <head>
          <Meta/>
          <Links/>
        </head>
        <body>
          <Header/>
          {children} 
          <Footer/>
          <Scripts/>
          <LiveReload/>
        </body>
     </html>
  )}



  // MANEJO DE ERRORES 

 
  
  export function CatchBoundary() {

      const error = useCatch();

      return (
          <Document>
              <p className='error'>
                  {error.status} {error.statusText}
              </p>
          </Document>
      );
  }
  
 
  export function ErrorBoundary({error}) {

    return (
        <Document>
            <p className='error'>
                {error.status} {error.statusText}
            </p>
        </Document>
    );
}
