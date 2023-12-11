import React from "react";
import Section5ComponentChild from "./Section5ComponentChild";
import '../main/scss/section5.scss';
import axios from "axios";
export default function Section5Component(){
    const [state,setState] = React.useState({
        상품1:[],
        상품2:[],
        상품3:[],
        상품4:[],
        상품5:[],
        상품6:[],
        n:0
    })

    React.useEffect(()=>{
        axios({
            url:'./data/main/section5.json',
            method:'GET'
        })
        .then((res)=>{
            setState({
                ...state,
                상품1:res.data.product1,
                상품2:res.data.product2,
                상품3:res.data.product3,
                상품4:res.data.product4,
                상품5:res.data.product5,
                상품6:res.data.product6
            })
    
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    return(
        <section id="section5">
            <Section5ComponentChild 상품1={state.상품1} 상품2={state.상품2} 상품3={state.상품3} 상품4={state.상품4} 상품5={state.상품5} 상품6={state.상품6}/>            
        </section>
    )
}