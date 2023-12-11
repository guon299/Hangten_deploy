import React from 'react';

export default function Section4ComponentChild({상품}) {


    return (
        <div className="container">
            <ul>
                {   
                    상품.map((item,idx)=>{
                        return(
                            <li key={item.번호}>
                                <div className="text-box">
                                    <p>
                                        <span>{item.설명1}</span>
                                        <span>{item.설명2}</span>
                                    </p>
                                </div>
                                <div className="img-box">
                                    <img src={`./images/main/section4/${item.이미지}`} alt="" />
                                </div>
                            </li>
                        )
                    })            

                }
            </ul>
        </div>
    );
};
