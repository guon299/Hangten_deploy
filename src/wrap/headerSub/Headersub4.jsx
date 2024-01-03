import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isSubMeun1In } from '../../reducer/isSubMeun1Reducer.js';
import {isSubMeun2In} from '../../reducer/isSubMeun2Reducer.js';

export default function Headersub4() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [state, setState] = React.useState({
        isBoySub:false,
        headNavi:[]
    });

    React.useEffect(()=>{
        axios({
            url:'./data/sub/sub4.json',
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

    const onMouseEnterBoy=(e)=>{
        e.stopPropagation();
        setTimeout(()=>{
            setState({
                ...state,
                isBoySub:true,
            });
        },0)
    }

    const onMouseLeaveBoy=(e)=>{
        e.stopPropagation();
        setTimeout(()=>{
            setState({
                ...state,
                isBoySub:false
            });
        },0)
    }

    const onClickSub = (e)=>{
        e.preventDefault();
        dispatch(isSubMeun1In(3));
        navigate("/sub4");
    }

    const onCLickSubTab=(e, idx)=>{
        e.preventDefault();
        dispatch(isSubMeun2In(idx));
        dispatch(isSubMeun1In(3));
        navigate("/sub4");
    }
    return (

    <li className={`navBtn-li${state.isBoySub===true?' on':''}`} onMouseEnter={onMouseEnterBoy} onMouseLeave={onMouseLeaveBoy}>
        <a className="nav-meun" href="/sub4" onClick={onClickSub}>남아</a>
        <div className="sub-meun boy" onMouseLeave={onMouseLeaveBoy}>
            <ul className="sub-wrap">
                {
                    state.headNavi.map((item,idx)=>{
                        return(
                            <li className="sub-list" key={idx}>
                                <a className="sub-tap" href="/sub4" onClick={(e)=>onCLickSubTab(e,idx)}>{item.submeun}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </li>

    );
};
