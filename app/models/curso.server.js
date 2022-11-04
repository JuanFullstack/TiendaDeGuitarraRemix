

export async function getcurso(  ) {

    const URL = `${process.env.API_URL}/curso?populate=imagen`
    const respuesta = await fetch( URL )
    const resultado = await respuesta.json()
    return resultado ;
}