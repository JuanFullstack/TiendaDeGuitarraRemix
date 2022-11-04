
import { useLoaderData } from '@remix-run/react'
import { getguitarras } from "~/models/guitarras.server"
import ListadoGuitarras from '~/components/listado-guitarras'

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
       <ListadoGuitarras
      guitarras = {guitarras}
      />
    </main>
    

  )
}

export default Tienda