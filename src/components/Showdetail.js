import React from 'react';
const Showdetail = ( {show} ) => {
    return (
        <div className='showdetail'>
            <img  alt='robots' src = { `https://robohash.org/${show.id}?size=450x450&set=set2`} />
            
            <div>
                 <h2>{show.title}</h2>
                 <p>{show.body}</p>
            </div> 

        </div>          
    );
} 
export default Showdetail; 