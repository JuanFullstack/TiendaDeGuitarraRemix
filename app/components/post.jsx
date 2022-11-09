import { Link } from '@remix-run/react';
import {formatearFecha} from '~/utils/helpers'


function Post({post}) {

    const {contenido , imagen, titulo, url, publishedAt } = post;

    return (
      
        <articule className='post'>
            <img
                className="imagen"
                src={imagen.data.attributes.url}
                alt={`imagen blog ${titulo}`}
            />
            <div className='contenido'>
                <h3>{titulo}</h3>
                <p className='fecha' >{ formatearFecha (publishedAt) }</p>
                <p className='resumen' >{contenido}</p>
                <Link className='enlaces' to={`/blog/${url}`}> Leer post </Link>
            </div>
        </articule>
    );
}

export default Post ;



