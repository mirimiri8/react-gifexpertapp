import React, {useState} from 'react';
import PropTypes from 'prop-types'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ()=>{

    //const categories = ['One Punch','Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);
    
    // const handleAdd = ()=>{
    //     setCategories([...categories,"HunterXHunter"]);
    // }

    return (
        <>
            <h2> GifExpertApp </h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map(category =>{
                        //return <li key={category}>{category}</li>
                    
                        return <GifGrid 
                                    key={category}
                                    category={category}
                                />;
                    })
                }
            </ol>
        </>
    )

};


export default GifExpertApp;