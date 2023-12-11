import React from "react";
import axios from "axios";
import './scss/section1.scss';
import Section1ComponentChild from "./Section1ComponentChild";

export default function Section1Component(){

    const [state, setState] = React.useState({
        slide:[],
        slidepage:0
    });

    React.useEffect(()=>{
        axios({
            url:'./data/main/section1.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    slide:res.data.slide,
                    slidepage:res.data.slide.length
                });
            }
        })
        .catch((err)=>{
            console.log("AXIOS 오류 " + err );
        })
    },[])

    return(
        <section id="section1">
            <div className="container">
                < Section1ComponentChild slide={state.slide} slidepage={state.slidepage} />
            </div>           
        </section>
    )
}