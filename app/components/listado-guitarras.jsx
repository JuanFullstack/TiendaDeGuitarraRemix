import Guitarras from "./guitarras"

function ListadoGuitarras( {guitarras} ) {
  return (

    <>
    <h2
    className='heading'
    >
      Nuestra Coleccion 
    </h2>

    {guitarras?.length && (
                          <div
                          className='guitarras-grid'
                          >
                            { guitarras?.map( guitarras=>(

                              <Guitarras
                              key={guitarras?.id}
                              guitarras={guitarras?.attributes}
                              />
                              
                            ))}
                          </div>
                        )}
    
    
    </>
  )
}

export default ListadoGuitarras