import { useLoaderData } from '@remix-run/react'
import ListadoGuitarras from '~/components/listado-guitarras'
import Listadoblog from '~/components/listado-blog'
import { getguitarras } from "~/models/guitarras.server"
import { getposts } from "~/models/posts.server"
import { getcurso } from '~/models/curso.server'
import stylesGuitarras from '~/styles/guitarras.css'
import stylesPosts from '~/styles/blog.css'
import stylescurso from '~/styles/cursos.css'
import Curso from '~/components/curso'

export function links () {
  return [
      
          {
            rel:'stylesheet',
            href: stylesGuitarras
          },
          {
            rel:'stylesheet',
            href: stylesPosts
          },
          {
            rel:'stylesheet',
            href: stylescurso
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

 
const [TodosLosDatos1 , TodosLosDatos2 , TodosLosDatos3 ]= await Promise.all([
  getguitarras(),
  getposts(),
  getcurso(),
])
    // const TodosLosDatos1 = await getguitarras()
    // const TodosLosDatos2 = await getposts()
    const guitarras = TodosLosDatos1.data
    const post = TodosLosDatos2.data
    const curso = TodosLosDatos3.data

return { guitarras , post , curso }

}



function Index() {

 const { guitarras , post ,curso  } = useLoaderData( )


  return (
      <>
          <main>
              <ListadoGuitarras guitarras={guitarras} />
          </main>

         
          <Curso curso={curso.attributes} />
         

          <section>
              <Listadoblog post={post} />
          </section>


      </>
  );
}

export default Index