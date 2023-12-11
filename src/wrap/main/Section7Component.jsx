import React from "react";
import './scss/section7.scss';
import axios from "axios";
import Section7ComponentChild from "./Section7ComponentChild.jsx";

export default function Section7Component(){

    const [state, setState] = React.useState({
        title: '',
        content: [],
    });

    React.useEffect(()=>{
        axios({
            url: './data/main/section7.json',
            method: 'GET'
        })
        .then((res)=>{
            if(res.status===200){
                // console.log(res.data);
                // console.log(res.data.content);
                setState({
                    ...state,
                    title: res.data.title,
                    content: res.data.content
                });
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    },[]);

    return(
        <section id="section7">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>{state.title}</h2>
                    </div>
                    <div className="content">
                        <ul>
                            {
                                state.content.map((item, idx)=>{
                                    return (
                                        <li key={item.num} className={`sSlide sSlide${idx+1}`}>
                                            <div className="left">
                                                <a href="!#">
                                                    <img src={`./images/main/section7/${item.leftImage}`} alt="" />
                                                </a>
                                            </div>
                                            <div className="right">
                                                <div className="text-box">
                                                    <h3>{item.text1}</h3>
                                                    <p>{item.text2}</p>
                                                </div>
                                                <Section7ComponentChild n={item.slideLength} slide={item.slide} />
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}