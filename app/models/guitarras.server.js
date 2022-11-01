export async function getguitarras() {
    const URL = `${process.env.API_URL}/guitarras?populate=imagen`
    const respuesta = await fetch( URL )
    const resultado = await respuesta.json()
  
   
    return resultado ;
}




export async function getguitarraurl( url ) {

    const URL = `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
    const respuesta = await fetch( URL )
    const resultado = await respuesta.json()
    
   
    return resultado ;
}



