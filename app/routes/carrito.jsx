
import React, { useState, useEffect } from 'react';
import { useOutletContext } from '@remix-run/react'
import { ClientOnly } from 'remix-utils'

import style from '~/styles/carrito.css';

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: style
        }
    ];
}


export function meta () {
    return (
      {
        title: 'GuitarLA - Carrito' ,
        description:'venta de guitarras , blog de musica'
  
      }
    )
  }
  

function Carrito() {


  const [total , settotal ] = useState(0)
  const { carrito , actulizarvalor ,  eliminadoguitarra } = useOutletContext()

  useEffect(() => {
    const calculototal = carrito.reduce( (total , producto )=> total+ (producto.cantidad*producto.precio) , 0  )

    settotal (calculototal)

  }, [carrito]);


  return (

    <ClientOnly fallback={'cargando...'} > 

       { ( ) => (  

      <main className='contenedor  '>
          <h1 className='heading'>carrito de compras</h1>
          <div className='contenidoX  '>
              <div className='carrito'>
                  <h2>Articulo</h2>
                  {carrito?.length === 0
                      ? 'carrito vacio '
                      : carrito?.map((producto) => (
                            <div key={producto.id} className='producto'>
                                <div>
                                    <img
                                        src={producto.imagen}
                                        alt={`imagen del producto  ${producto.nombre} `}
                                    />
                                </div>
                                <div>
                                    <p className='nombre'>{producto.nombre} </p>
                                    <p>Cantidad : </p>
                                    <select
                                        value={producto.cantidad}
                                        className='select'
                                        onChange={(e) =>
                                            actulizarvalor({
                                                cantidad: +e.target.value,
                                                id: producto.id,
                                            })
                                        }>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>

                                    <p className='precio'>
                                        {' '}
                                        $<span> {producto.precio} </span>{' '}
                                    </p>
                                    <p className='subtotal'>
                                        {' '}
                                        subtotal $
                                        <span>
                                            {' '}
                                            {producto.cantidad * producto.precio}{' '}
                                        </span>{' '}
                                    </p>
                                </div>
                                <button
                                    type='button'
                                    className='btn_eliminar'
                                    onClick={() => eliminadoguitarra(producto.id)}>
                                    <div className='extra'> X </div>
                                </button>
                            </div>
                        ))}
              </div>
              <aside className='resumen'>
                  <h3>Resumen del pedido</h3>
                  <p>Total a pagar :${total} </p>
              </aside>
          </div>
      </main>

         )}
         
    </ClientOnly>
  );
}

export default Carrito