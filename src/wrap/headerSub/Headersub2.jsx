import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isSubMeun1In } from '../../reducer/isSubMeun1Reducer.js';
import {isSubMeun2In} from '../../reducer/isSubMeun2Reducer.js';

export default function Headersub2() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [state, setState] = React.useState({
        isMenSub:false,
        headNavi:[]
    });

    React.useEffect(()=>{
        axios({
            url:'./data/sub/sub2.json',
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
    
    const onMouseEnterMen=(e)=>{
        e.stopPropagation();
        setTimeout(()=>{
            setState({
                ...state,
                isMenSub:true,
            });
        },0)
    }

    const onMouseLeaveMen=(e)=>{
        e.stopPropagation();
        setTimeout(()=>{
            setState({
                ...state,
                isMenSub:false
            });
        },0)
    }

    const onClickSub = (e)=>{
        e.preventDefault();
        dispatch(isSubMeun1In(1));
        navigate("/sub2");
    }

    const onCLickSubTab=(e, idx)=>{
        e.preventDefault();
        dispatch(isSubMeun1In(1));
        dispatch(isSubMeun2In(idx));
        navigate("/sub2");
    }

    return (

        <li className={`navBtn-li${state.isMenSub===true?' on':''}`} onMouseEnter={onMouseEnterMen} onMouseLeave={onMouseLeaveMen}>
            <a className="nav-meun" href="!#" onClick={onClickSub}>남성</a>
            <div className="sub-meun men" onMouseLeave={onMouseLeaveMen} >
                <ul className="sub-wrap">
                    {
                        state.headNavi.map((item,idx)=>{
                            return(
                                <li className="sub-list" key={idx}>
                                    <a className="sub-tap" href="!#" onClick={(e)=>onCLickSubTab(e,idx)}>{item.submeun}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </li>

    );
};
