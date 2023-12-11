import React from 'react';
import { Link } from 'react-router-dom';

export default function Section1ComponentChild({slide, slidepage}) {
    const slideRef = React.useRef();
    const textRef = React.useRef();
    const [state, setState] = React.useState({
        cnt:0,
        toggle:0,
        textVisible: false
    });
    // 슬라이드
    React.useEffect(()=>{
        slideRef.current.style.transition = 'none'
        slideRef.current.style.width = `${33.33 * slidepage}%`;
    },[slidepage]);

    const mainSlide=()=>{
        slideRef.current.style.transition = 'all 0.5s ease-in-out';
        slideRef.current.style.left = `${-33.33 * state.cnt}%`;
        setState({...state,textVisible:true});
        if(state.cnt!==0){
            returnSlide();
        }
    }
    const returnSlide=()=>{
        if(state.cnt>(slidepage-3)){
            setState({
                ...state,
                toggle:1,
                cnt:1
            });
            slideRef.current.style.transition = 'none';
            slideRef.current.style.left = `${-33.33 * 0}%`
        }
        if(state.cnt<=0){
            setState({
                ...state,
                toggle:1,
                cnt:slidepage-3-1
            });
            slideRef.current.style.transition = 'none';
            slideRef.current.style.left = `${-(33.33 * (slidepage-3))}%`
        }
    }
    React.useEffect(()=>{
        if(state.toggle===0){
            mainSlide();
        }
        else{
            setState({
                ...state,
                toggle:0
            });
            setTimeout(()=>{
                mainSlide();
            },10)
        }
    },[state.cnt]);

    const onClickPrev=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            cnt:state.cnt-1,
            textVisible:false
        })
    }
    const onClickNext=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            cnt:state.cnt+1,
            textVisible:false
        })
    }
    // 슬라이드 텍스트

    const slideText=()=>{
        
    }
    console.log(state.cnt);
    console.log(slidepage);
    return (
        <div className="slide-container">
            <div className="slide-view">
                <ul ref={slideRef} className="slide-wrap" >
                    {
                        slide.map((item, idx)=>{
                            return(
                                <li className="slide slide1" key={item.slideNuber}>
                                    <div ref={textRef} className="img-box">
                                        <div className="text"
                                        style={{opacity: state.textVisible && state.cnt === idx-1 ? 1 : 0,transition: 'opacity 0.5s ease'}}>
                                            <p className='line1'>{item.textLine1}<br/>{}</p>
                                            <p className='line2'>{item.textLine2}<br/>{item.textLine22}</p>
                                            <p className='line3'>{item.textLine3}<br/>{item.textLine32}</p>
                                        </div>
                                        <Link to="/sub2">
                                            <img src={`./images/main/section1/${item.slideImg}`} alt="" />
                                        </Link>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
                <div className="button-box">
                    <button onClick={onClickPrev} className='prev-btn'><i class="material-icons" >keyboard_arrow_left</i></button>
                    <button onClick={onClickNext} className='next-btn'><i class="material-icons" >keyboard_arrow_left</i></button>
                </div>
        </div>
    );
};
