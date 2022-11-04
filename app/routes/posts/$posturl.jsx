
import { useLoaderData } from '@remix-run/react'
import { getposturl } from "~/models/posts.server"

import styles from '~/styles/guitarras.css'
import {formatearFecha} from '~/utils/helpers'

export function links () {
  return [
      
          {
            rel:'stylesheet',
            href: styles
          }
          
         ]
}

export async function loader({ params }) {

  const { posturl } = params

  const post = await getposturl(posturl)

  if (post.data.length === 0) {
      throw new Response('', {
          status: 404,
          statusText: 'No hay informacion  ',
      });
  }

  return post
}


export function meta ({data}) {

if(!data) {
return {
title: 'GuitarLa - Error: Blog no encontrado ',
description:`Error no hay informacion `

}

}



  return (
    {
      title: `GuitarLA - ${data.data[0].attributes.titulo }`,
      description:`Blog  , blod de  ${data.data[0].attributes.contenido }`

    }
  )
}




function Posturl( ) {
 
  const post = useLoaderData()
  
  const {contenido , imagen, titulo, publishedAt } = post?.data[0].attributes
  

  return (
      <main className='post'>
          <img
              className='imagen'
              src={imagen?.data?.attributes?.url}
              alt={`Imagen de guitarra${titulo}`}
          />
          <div className='contenido '>
              <h3>{titulo}</h3>
              <p className='fecha'> {formatearFecha (publishedAt)} </p>
              <p className='resumen'> {contenido} </p>
          </div>
      </main>
  );

}

export default Posturl

