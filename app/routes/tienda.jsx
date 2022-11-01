
import { useLoaderData } from '@remix-run/react'
import { getguitarras } from "~/models/guitarras.server"
import Guitarras from '~/components/guitarras'

import styles from '~/styles/guitarras.css'


export function links () {
  return [
      
          {
            rel:'stylesheet',
            href: styles
          }
          
         ]
}

export function meta () {
  return (
    {
      title: 'GuitarLA - Tienda' ,
      description:'venta de guitarras , blog de musica'

    }
  )
}





export async function loader() {

  //Nos traera toda la informacion sin filtrar 
    const TodosLosDatos = await getguitarras()

  //Filtramos los datos relevantes en data
    const guitarras = TodosLosDatos.data


return guitarras

}








const Tienda = () => {
const guitarras = useLoaderData()

  return (
   
    <main
    className='contenedor'
    >
      <h2
      className='heading'
      >
        Nuestra Coleccion 
      </h2>

      {guitarras?.length && (
                            <div
                            className='guitarras-grid'
                            >
                              { guitarras?.map( guitarras=>(

                                <Guitarras
                                key={guitarras?.id}
                                guitarras={guitarras?.attributes}
                                />
                                
                              ))}
                            </div>
                          )}
    </main>
    

  )
}

export default Tienda