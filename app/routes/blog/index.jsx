

import { useLoaderData } from '@remix-run/react'
import { getposts } from "~/models/posts.server"
import Listadoblog from '~/components/listado-blog'



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

 
     < Listadoblog
      post= {post}

     />
      
  )
}

export default Blog