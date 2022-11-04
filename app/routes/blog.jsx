

import { useLoaderData } from '@remix-run/react'
import { getposts } from "~/models/posts.server"
import styles from '~/styles/blog.css'
import Listadoblog from '~/components/listado-blog'

export function links () {
  return [
      
          {
            rel:'stylesheet',
            href: styles
          }
          
         ]
}


export async function loader() {

  //Nos traera toda la informacion sin filtrar 
    const TodosLosDatos = await getposts()

  //Filtramos los datos relevantes en data
    const post = TodosLosDatos.data


return post

}


const Blog = () => {

  const post = useLoaderData()

  return (

    <main
    className='contenedor'
    >
     < Listadoblog
      post= {post}

     />
      
    </main>



  )
}

export default Blog