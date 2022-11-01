
import { Link } from '@remix-run/react';



function Guitarras({guitarras}) {

    const {descripcion, imagen, nombre, precio, url} = guitarras;

    return (
        <div className='guitarra'>
            <img
                src={imagen.data.attributes.formats.medium.url}
                alt={`imagen guitarra ${nombre}`}
            />
            <div className='contenido'>
                <h3>{nombre}</h3>
                <p className='descripcion' >{descripcion}</p>
                <p className='precio' >${precio}</p>
                <Link className='enlaces' to={`/guitarras/${url}`}> ver producto </Link>
            </div>
        </div>
    );
}

export default Guitarras;
