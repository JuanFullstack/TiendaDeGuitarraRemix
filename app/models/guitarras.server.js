export async function getguitarras() {
   
    const URL = `${process.env.API_URL}/guitarras?populate=imagen`
    const respuesta = await fetch( URL )
    const resultado = await respuesta.json()
    console.log(resultado)
   
    return resultado ;
}
