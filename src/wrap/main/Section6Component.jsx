import React from "react";
import Section6ComponentChild from "./Section6ComponentChild";
import '../main/scss/section6.scss'
import axios from "axios";

export default function Section6Component(){
    const [state,setState] = React.useState({
        상품:[],
        n:0
    })

    React.useEffect(()=>{
        axios({
            url:'./data/main/section6.json',
            method:'GET'
        })
        .then((res)=>{
            setState({
                ...state,
                상품:res.data.product,
                n:res.data.product.length
            })
    
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    return(
        <section id="section6">
            <Section6ComponentChild 상품={state.상품} n={state.n}/>            
        </section>
    )
}