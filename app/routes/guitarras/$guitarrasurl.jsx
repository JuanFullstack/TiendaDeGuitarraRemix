import React, { useState, useEffect } from 'react';


import { useLoaderData , useOutletContext } from '@remix-run/react'

import { getguitarraurl } from "~/models/guitarras.server"


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

  const { agregarcarrito } = useOutletContext()

  const [cantidad , setcantidad] = useState(0)


  
 
  const guitarra = useLoaderData()
  
  const { nombre , descripcion , imagen , precio  } = guitarra.data[0].attributes
  
const handlesubmit = (e) => {
    e.preventDefault();

    if (cantidad < 1) {
        alert('debes seleccion cantidad');
        return;
    } else {
        const guitarraSleccionada = {
            id: guitarra.data[0].id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad,
        };

        agregarcarrito(guitarraSleccionada)
    }
};


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

              <form
              onSubmit={handlesubmit}
              className='formulario'>
                  <label htmlFor='cantidad'>Cantidad</label>
                  <select  
                  onChange={e=> setcantidad(parseInt(e.target.value))}
                  id='cantidad'>
                      <option value='0'>--Seleccione--</option>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4'>4</option>
                      <option value='5'>5</option>
                  </select>
                  <input type='submit' value='agregar carrito ' />
              </form>
              
          </div>
      </main>
  );

}

export default Guitarrasurl

