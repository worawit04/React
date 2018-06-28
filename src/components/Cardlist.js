import React from 'react';
import Card from './Card';
const Cardlist = ({ addnews }) => {
    // ให้ Cardlist รับ Addnews เข้ามาเพื่อแสดงผล ค่าจาก API แสดงผลตามความต้องการ
    return (
        <div>
            <div className="container">
                <section className="mw7 center avenir">
                    <div className="ui container">
                        <h2 className="baskerville fw1 ph3 ph0-l ">News</h2>
                    </div>
                    <div className="min-height">
                        {
                            addnews.map((paper, i) => {
                                // paper ก็คือข้อมูล 1 ชุดของ Array i คือ key
                                return (
                                    <Card
                                        key={i}
                                        id={paper.id}
                                        titles={paper.title}
                                        details={paper.detail}
                                        userId={paper.user}
                                    />
                                    // หลังจากนั้น วนค่าโดยไปเก็บไว้ เช่น  titles = { paper.title } เพื่อที่จะส่งต่อค่า props ไปให้ Card แสดงผล
                                )
                            })
                        }
                    </div>
                </section>
            </div>
        </div>
    );
}
export default Cardlist; 