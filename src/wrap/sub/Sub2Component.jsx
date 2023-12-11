import React from 'react';
import axios from 'axios';
import Title from './subChild/Title';
import Goods from './subChild/Goods';
import './scss/sub1.scss';

import { categoryIn } from '../../reducer/categoryReducer';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

export default function Sub2Component() {
    const location = useLocation();
    const dispatch = useDispatch();
    const [state, setState] = React.useState({
        titleimg:[],
        fileName:''
    });

    //  카테고리 section 정보 불러오기
    React.useEffect(()=>{
        let fileName = location.pathname.split('/')[1];
        axios({
            url:`./data/sub/${fileName}.json`,
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    titleimg:res.data.title,
                    fileName:fileName
                });
                const category={
                    category1:res.data.category1,
                    subMeun1:res.data.submeun1,
                    subMeun2:res.data.submeun2,
                    subMeun3:res.data.submeun3
                };
                dispatch(categoryIn(category));
            }
        })
        .catch((err)=>{
            console.log("AXIOS 오류!!" + err);
        })
    },[]);

    return (
        <div id='sub2' className='sub'>
            <div className="container">
                <Title titleimg={state.titleimg} fileName={state.fileName}/>
                <Goods />
            </div>
        </div>
    );
};
