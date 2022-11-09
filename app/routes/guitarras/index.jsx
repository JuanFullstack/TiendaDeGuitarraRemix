
import { useLoaderData } from '@remix-run/react'
import { getguitarras } from "~/models/guitarras.server"
import ListadoGuitarras from '~/components/listado-guitarras'



export function meta () {
  return (
    {
      title: 'GuitarLA - Tienda' ,
      description:'venta de guitarras , musica , blog carrito de combras'

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
   
   <ListadoGuitarras
      guitarras = {guitarras}
      />
   
  )
}


export default Tienda