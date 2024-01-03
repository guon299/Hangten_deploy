import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isSubMeun1In } from '../../reducer/isSubMeun1Reducer.js';
import {isSubMeun2In} from '../../reducer/isSubMeun2Reducer.js';

export default function Headersub3() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [state, setState] = React.useState({
        isWomanSub:false,
        headNavi:[]
    });

    React.useEffect(()=>{
        axios({
            url:'./data/sub/sub3.json',
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

    const onMouseEnterWoman=(e)=>{
        e.stopPropagation();
        setTimeout(()=>{
            setState({
                ...state,
                isWomanSub:true,
            });
        },0)
    }

    const onMouseLeaveWoman=(e)=>{
        e.stopPropagation();
        setTimeout(()=>{
            setState({
                ...state,
                isWomanSub:false
            }); 
        },0)
    }

    const onClickSub = (e)=>{
        e.preventDefault();
        dispatch(isSubMeun1In(2));
        navigate("/sub3");
    }

    const onCLickSubTab=(e, idx)=>{
        e.preventDefault();
        dispatch(isSubMeun2In(idx));
        dispatch(isSubMeun1In(2));
        navigate("/sub3");
    }

    return (

    <li className={`navBtn-li${state.isWomanSub===true?' on':''}`} onMouseEnter={onMouseEnterWoman} onMouseLeave={onMouseLeaveWoman}>
        <a className="nav-meun" href="/sub3" onClick={onClickSub}>여성</a>
        <div className="sub-meun woman" onMouseLeave={onMouseLeaveWoman}>
            <ul className="sub-wrap">
                {
                    state.headNavi.map((item,idx)=>{
                        return(
                            <li className="sub-list" key={idx}>
                                <a className="sub-tap" href="/sub3" onClick={(e)=>onCLickSubTab(e,idx)}>{item.submeun}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </li>

    );
};
