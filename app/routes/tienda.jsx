
import { useLoaderData } from '@remix-run/react'
import { getguitarras } from "~/models/guitarras.server"
import Guitarras from '~/components/guitarras'

export async function loader() {

//Nos traera toda la informacion sin filtrar 
const TodosLosDatos = await getguitarras()

//Filtramos los datos relevantes en data
const guitarras = TodosLosDatos.data

console.log(guitarras)

return guitarras

}


const Tienda = () => {

const guitarras = useLoaderData()
console.log(guitarras)



  return (
   
    <main
    className='contenedor'
    >
      <h2
      className='heading'
      >
        Nuestra Coleccion 
      </h2>

      {guitarras.length && (
        <div
        className='guitarras-grid'
        >
          { guitarras.map( guitarras=>(
            <Guitarras
            key={guitarras.id}
            guitarras={guitarras}
            />
            
          ))}

        </div>

      )}




    </main>
    

  )
}

export default Tienda