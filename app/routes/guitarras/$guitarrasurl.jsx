
import { useLoaderData } from '@remix-run/react'
import { getguitarraurl } from "~/models/guitarras.server"

import styles from '~/styles/guitarras.css'

export function links () {
  return [
      
          {
            rel:'stylesheet',
            href: styles
          }
          
         ]
}

export async function loader({ params }) {

  const { guitarrasurl } = params

  const guitarra = await getguitarraurl(guitarrasurl)

  if (guitarra.data.length === 0) {
      throw new Response('', {
          status: 404,
          statusText: 'Guitarra No encontrada ',
      });
  }

  return guitarra
}


export function meta ({data}) {

if(!data) {
return {
title: 'GuitarLa - Error: Guitarra no encontrada ',
description:`Error no se encontrao guitarra`

}

}



  return (
    {
      title: `GuitarLA - ${data.data[0].attributes.nombre }`,
      description:`venta de guitarras , guitarra ${data.data[0].attributes.descripcion }`

    }
  )
}








function Guitarrasurl() {
 
  const guitarra = useLoaderData()
  
  const { nombre , descripcion , imagen , precio  } = guitarra.data[0].attributes
  

  return (
      <main className='contenedor guitarra'>
          <img
              className='imagen'
              src={imagen.data.attributes.url}
              alt={`Imagen de guitarra${nombre}`}
          />
          <div className='contenido '>
              <h3>{nombre}</h3>
              <p className='descripcion'> {descripcion} </p>
              <p className='precio'> ${precio} </p>
          </div>
      </main>
  );

}

export default Guitarrasurl

