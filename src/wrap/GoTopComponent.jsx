import React from 'react';
import './scss/GoTop.scss';

export default function GoTopComponent(){

    const onClickGoTopBtn=(e)=>{
        e.preventDefault();
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        });
    }

    return (
        <div id='goTop'>
            <a href="!#" onClick={onClickGoTopBtn}>
                <img src="./images/modal/btnTop2.png" alt="" />
            </a>
        </div>
    );
};