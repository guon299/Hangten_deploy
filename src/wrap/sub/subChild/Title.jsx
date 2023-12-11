import React from 'react';

export default function Title({titleimg, fileName}){
    return (
        <div className="title" >
            <ul >
                {
                    titleimg.map((item,idx)=>{
                        return(
                            <li key={idx}>
                                <p style={{overflow:'hidden',width:`calc(100% + 120px)`,marginLeft:'-60px'}}>
                                    <img style={{width:`100%`,height:'auto',marginBottom:'70px'}} src={`./images/sub/${fileName}/${item.img}`} alt="" />
                                </p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};
// style={{overflow:'hidden',width:`calc(100% + 120px)`,marginLeft:'-60px'}}