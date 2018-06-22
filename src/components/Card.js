import React from 'react';
import Btn from './Btn';
const Card = ({id , titles , details,userId }) => {
    // Props ที่ได้มาจาก Cardlist 3 ตัว นำมาแสดงผลในหน้า Card
    // console.log(id);
    return (
        <div>      
             <article className="bb b--black-10">
                    <a className="db pv2 ph3 ph0-l no-underline black dim" href= {`/detail/${id}`} >
                    <div className="flex flex-column flex-row-ns">
                        <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                            <img alt="Photo" src={`https://robohash.org/${id}?size=200x200&set=set2`}  className="db" alt="Photo of a whale's tale coming crashing out of the water."/>
                            {/* ค่าจาก Props ของ id */}
                        </div>
                        <div className="w-100 w-60-ns pl3-ns">
                            {/* <h1 className="f3 fw1 baskerville mt0 lh-title">{titles}</h1> */}
                            {/* ค่าจาก Props ของ titles */}
                        <div className="ui grid">
                             <div className="sixteen wide column"><h1 className="f3 fw1 baskerville mt0 lh-title">{titles}</h1></div>
                        </div>
                        <div className="ui grid">
                             <div className="sixteen wide column">
                             <p className="f6 f5-l lh-copy">
                            {details}
                             {/* ค่าจาก Props ของ bodys */}
                        </p></div>
                        </div>
                            {/* <p className="f6 lh-copy mv0">By Robin Darnell</p> */}
                        </div>
                    </div>
                    </a>
                    <p className="f6 lh-copy mv0">By Robin Darnell</p>      
                    <div className="ui grid">
                        <div className="sixteen wide column"><Btn Btn_id={ id } userId={userId}/> </div>
                    </div>
                </article>
        </div>         
    );
} 
export default Card; 