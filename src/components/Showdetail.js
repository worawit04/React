import React from 'react';

const Showdetail = ( {show} ) => {
    return (
        <div className='showdetail'>
            <div className="container">
               <div className="min-height">
                <div>
                    <h2 className="titledetail">{show.title}</h2>
                </div>  
                <div class="ui grid">
                    <div class="four wide column"></div>
                    <div class="four wide column"><img  alt='robots' src = {`https://robohash.org/${show.id}?size=300x300&set=set2`} /></div>
                    <div class="four wide column"> <p className="detail">{show.detail}</p></div>
                    <div class="four wide column"></div>
                 </div> 
               </div>                  
            </div>    
        </div>         
    );
} 
export default Showdetail; 