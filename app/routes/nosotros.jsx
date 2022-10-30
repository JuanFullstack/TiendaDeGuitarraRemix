
import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'


export function meta () {
  return (
    {
      title: 'GuitarLA - Sobre Nosotros' ,
      description:'venta de guitarras , blog de musica'

    }
  )
}


export function links () {
  return [
      
          {
            rel:'stylesheet',
            href: styles
          },
          {
            rel:'preload',
            href: imagen ,
            as:'image'
          }
         ]
}


function Nosotros() {
  return (

    <main 
    className='contenedor nosotros ' 
    >
      <h2
      className='heading'
      >
        Nosotros
      </h2>
      <div
      className='contenido'
      >
        <img src={imagen} alt="imagen sobre nosotros" />
        <div>
          <p>
          orem ipsum dolor sit amet, consectetur adipiscing elit. Donec elit leo, gravida id nisl at, elementum cursus dolor. Phasellus at auctor purus. Ut mauris diam, egestas non nibh sed, dictum aliquet ligula. Maecenas 
          </p>

          <p>
          sollicitudin maximus porta. Suspendisse elementum tellus eget felis sodales elementum. Cras condimentum ultricies odio in sollicitudin. Pellentesque convallis lectus at fringilla interdum. Nunc ornare elementum ligula, in cursus sapien gravida sit amet
          </p>
        </div>

      </div>
      
    </main>

    
  )
}

export default Nosotros


