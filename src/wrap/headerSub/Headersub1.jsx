import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// import { clickSubMeun } from '../../reducer/subClickReducer';
import { isSubMeun1In } from '../../reducer/isSubMeun1Reducer.js';

export default function Headersub1() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [state, setState] = React.useState({
        isNewSub:false,
        headNavi:[]
    });

    React.useEffect(()=>{
        axios({
            url:'./data/sub/sub1.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    headNavi:res.data.submeun1
                })
            }
        })
        .catch((err)=>{
            console.log("AXIOS 오류 !! " + err)
        })
    },[])

    const onMouseEnterNew=(e)=>{
        e.stopPropagation();
        setTimeout(()=>{
            setState({
                ...state,
                isNewSub:true,
            });
        },0)
    }

    const onMouseLeaveNew=(e)=>{
        e.stopPropagation();
        setTimeout(()=>{
            setState({
                ...state,
                isNewSub:false
            });
        },0)
    }

    const onClickSub = (e)=>{
        e.preventDefault();
        dispatch(isSubMeun1In(''));
        navigate("/sub1");
    }

    const onCLickSubTab=(e, idx)=>{
        e.preventDefault();
        dispatch(isSubMeun1In(idx));
        navigate("/sub1");
    }
    return (

        <li className={`navBtn-li${state.isNewSub===true?' on':''}`} onMouseEnter={onMouseEnterNew} onMouseLeave={onMouseLeaveNew}>
            <a className="nav-meun" href="!#" onClick={onClickSub}>신상품</a>
            <div className="sub-meun new" onMouseLeave={onMouseLeaveNew}>
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
