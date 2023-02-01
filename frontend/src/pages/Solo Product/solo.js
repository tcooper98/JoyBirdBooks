import React from 'react'
import './solo.css'
import { ITEM_QUERY } from '../../lib/query'
import { useQuery } from 'urql';


// const client = createClient({url: 'http://localhost:1337/graphql'});


function Solo () {
    //fetch products
    const[results] = useQuery({ query: ITEM_QUERY });
     
     const { data, fetching, error } = results;

     if (fetching) return <p>Loading...</p>;
        if (error) return <p>Oh no... {error.message}</p>;

        const items = data.items.data;
        console.log(items);
    return (
        <>
        
       

        
        <div className="Product">
            <div className="Product-Left">
               <h1>Hello</h1>
               {items.map((item) => (
                 <div key={item.id}>
                 <h1>{item.attributes.name}</h1>
                 </div>
                 ))}
                

            </div>

            <div className="Product-Right">
               <h1>How are you?</h1>
            </div>
           
        </div>

       

        </>
    )
}

export default Solo;