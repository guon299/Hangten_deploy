import React from 'react';
import { useEffect } from 'react';

export default function Section6ComponentChild({상품,n}) {

    const slideWrap = React.useRef();
    const [cnt, setCnt] = React.useState(0);
    const [toggle, setToggle] = React.useState(0);
    React.useEffect(()=>{
        slideEvent();
    },[cnt])


    const slideEvent=()=>{
        slideWrap.current.style.transition = 'all 0.6s ease-in-out';
        slideWrap.current.style.left = `${-50 * cnt}%`;
        if(cnt!==0){ 
            returnSlide();
        }
    }
        const returnSlide=()=>{
            if(cnt>4){ 
                setToggle(1);
                setCnt(1); 
                slideWrap.current.style.transition = 'none';
                slideWrap.current.style.left = `${0}%`;
            }
            
            if(cnt<0){
                setToggle(1);
                setCnt(3); 
                slideWrap.current.style.transition = 'none';
                slideWrap.current.style.left = `${-(50*4)}%`;
            }
        }

    
    React.useEffect(()=>{
        if(toggle===0){ 
            slideEvent();
        }
        else {  
            setToggle(0); 
            setTimeout(()=>{ 
                slideEvent();
            },100);
        }
    },[cnt]);

    const onClickLeftBtn=(e)=>{
        e.preventDefault();
        setCnt((cnt)=>cnt-1);
    }
    const onClickRightBtn=(e)=>{
        e.preventDefault();
        setCnt((cnt)=>cnt+1);
        console.log(slideWrap.current)

    }



    return (
        <div className='container'>
            <div ref={slideWrap} className="slide-wrap">
                <ul  className="slide-view">
                    {   상품.map((item,idx)=>{
                            return(
                                <li className="slide" key={item.번호}>
                                    <img src={`./images/main/section6/${item.이미지}`} alt="" />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="left-btn" onClick={onClickLeftBtn}>
                <i class="material-icons">navigate_next</i>
            </div>
            <div className="right-btn" onClick={onClickRightBtn}>
                <i class="material-icons">navigate_next</i>
            </div>
        </div>
    );
};
