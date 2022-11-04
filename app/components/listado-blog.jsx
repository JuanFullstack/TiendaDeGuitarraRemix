
import Post from "./post";

function Listadoblog({post}) {

  return (
      <>
          <h2 className='heading'>Nuestros blog</h2>
          <div>
              {post?.length && (
                  <div className='blog'>
                      {post?.map((post) => (
                          <Post key={post?.id} post={post?.attributes} />
                      ))}
                  </div>
              )}
          </div>
      </>
  );
}

export default Listadoblog