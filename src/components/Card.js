import React from 'react';
const Card = ({id , titles , bodys }) => {
    // Props ที่ได้มาจาก Cardlist 3 ตัว นำมาแสดงผลในหน้า Card
    return (
        <div>
             <article className="bb b--black-10">
                    <a className="db pv4 ph3 ph0-l no-underline black dim" href= {`/detail/${id}`} >
                    <div className="flex flex-column flex-row-ns">
                        <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                            <img alt="Photo" src={`https://robohash.org/${id}?size=200x200&set=set2`}  className="db" alt="Photo of a whale's tale coming crashing out of the water."/>
                            {/* ค่าจาก Props ของ id */}
                        </div>
                        <div className="w-100 w-60-ns pl3-ns">
                            <h1 className="f3 fw1 baskerville mt0 lh-title">{titles}</h1>
                            {/* ค่าจาก Props ของ titles */}
                            
                        <p className="f6 f5-l lh-copy">
                            {bodys}
                             {/* ค่าจาก Props ของ bodys */}
                        </p>
                        <p className="f6 lh-copy mv0">By Robin Darnell</p>
                        </div>
                    </div>
                    </a>
                </article>
        </div>         
    );
} 
export default Card; 