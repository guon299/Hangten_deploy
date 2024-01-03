import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { isSubMeun1In } from '../../reducer/isSubMeun1Reducer.js';
import {isSubMeun2In} from '../../reducer/isSubMeun2Reducer.js';

export default function Headersub5() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [state, setState] = React.useState({
        isGirlSub:false,
        headNavi:[]
    });

    React.useEffect(()=>{
        axios({
            url:'./data/sub/sub5.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    headNavi:res.data.submeun2
                })
            }
        })
        .catch((err)=>{
            console.log("AXIOS 오류 !! " + err)
        })
    },[])

    const onMouseEnterGirl=(e)=>{
        e.stopPropagation();
        setTimeout(()=>{
            setState({
                ...state,
                isGirlSub:true
            });  
        },0)
    }

    const onMouseLeaveGirl=(e)=>{
        e.stopPropagation();
        setTimeout(()=>{
            setState({
                ...state,
                isGirlSub:false
            });
        },0)
    }

    const onClickSub = (e)=>{
        e.preventDefault();
        dispatch(isSubMeun1In(4));
        navigate("/sub5");
    }

    const onCLickSubTab=(e, idx)=>{
        e.preventDefault();
        dispatch(isSubMeun1In(4));
        dispatch(isSubMeun2In(idx));
        navigate("/sub5");
    }

    return (

    <li className={`navBtn-li${state.isGirlSub===true?' on':''}`} onMouseEnter={onMouseEnterGirl} onMouseLeave={onMouseLeaveGirl}>
        <a className="nav-meun" href="/sub5" onClick={onClickSub}>여아</a>
        <div className="sub-meun girl" onMouseLeave={onMouseLeaveGirl}>
            <ul className="sub-wrap">
                {
                    state.headNavi.map((item,idx)=>{
                        return(
                            <li className="sub-list" key={idx}>
                                <a className="sub-tap" href="/sub5" onClick={(e)=>onCLickSubTab(e,idx)}>{item.submeun}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </li>

    );
};
