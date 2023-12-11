import React from "react";
import Section4ComponentChild from "./Section4ComponentChild";
import '../main/scss/section4.scss'
import axios from "axios";
export default function Section4Component(){
    const [state,setState] = React.useState({
        상품:[],
        n:0
    })

    React.useEffect(()=>{
        axios({
            url:'./data/main/section4.json',
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
        <section id="section4">
            <Section4ComponentChild 상품={state.상품}/>
        </section>
    )
}