import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);
    const {data:images ,loading} = useFetchGifs(category);
    //console.log(loading);
  
    // //Sólo se ejecuta la función con useEffect cuando el componente es renderizado por primera vez
    // useEffect(() => {
    //   getGifs(category)
    //     .then( imgs => setImages(imgs));
     
    // }, [category])
    


    //getGifs();
    //console.log("images---->",images);

  return (
      <>
        <h3 className='animate__animated animate__fadeIn'>{category}</h3>
        {/* If ternario, pero sólo para cuando es true, si da false, no haría nada */}
        {loading && <p className='animate__animated animate__flash'>Loading...</p>}
        <div className='card-grid'>
            

            
            {
                
                images.map((img) => 

                <GifGridItem 

                    key={img.id}
                    {...img}
                
                />
                )
            }
            
        </div>
    </>
  )
}
