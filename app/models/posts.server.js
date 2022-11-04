export async function getposts() {
    const URL = `${process.env.API_URL}/posts?populate=imagen`
    const respuesta = await fetch( URL )
    const resultado = await respuesta.json()
  
   
    return resultado ;
}


export async function getposturl( url ) {

    const URL = `${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`
    const respuesta = await fetch( URL )
    const resultado = await respuesta.json()
    
    return resultado ;
}
