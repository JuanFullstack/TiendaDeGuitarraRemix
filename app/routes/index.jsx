import { useLoaderData } from '@remix-run/react'
import ListadoGuitarras from '~/components/listado-guitarras'
import Listadoblog from '~/components/listado-blog'
import { getguitarras } from "~/models/guitarras.server"
import { getposts } from "~/models/posts.server"
import stylesGuitarras from '~/styles/guitarras.css'
import stylesPosts from '~/styles/blog.css'

export function links () {
  return [
      
          {
            rel:'stylesheet',
            href: stylesGuitarras
          },
          {
            rel:'stylesheet',
            href: stylesPosts
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

 
const [TodosLosDatos1 , TodosLosDatos2 ]= await Promise.all([
  getguitarras(),
  getposts()
])

    // const TodosLosDatos1 = await getguitarras()
    // const TodosLosDatos2 = await getposts()
 
    const guitarras = TodosLosDatos1.data
    const post = TodosLosDatos2.data



return { guitarras , post }

}





function Index() {

 const { guitarras , post } = useLoaderData( )


  return (
      <>
          <main>
              <ListadoGuitarras guitarras={guitarras} />
          </main>

          <section>
              <Listadoblog post={post} />
          </section>
      </>
  );
}

export default Index