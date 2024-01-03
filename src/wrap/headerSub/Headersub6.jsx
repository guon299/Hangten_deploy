import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// import { clickSubMeun } from '../../reducer/subClickReducer';
import { isSubMeun1In } from '../../reducer/isSubMeun1Reducer.js';

export default function Headersub6() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [state, setState] = React.useState({
        isHT101Sub:false,
        headNavi:[]
    });

    React.useEffect(()=>{
        axios({
            url:'./data/sub/sub6.json',
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
    },[]);

    const onMouseEnterHT101=(e)=>{
        e.stopPropagation();
        setTimeout(()=>{
            setState({
                ...state,
                isHT101Sub:true,
            });
        },0)
    }

    const onMouseLeaveHT101=(e)=>{
        e.stopPropagation();
        setTimeout(()=>{
            setState({
                ...state,
                isHT101Sub:false
            });
        },0)
    }

    const onClickSub = (e)=>{
        e.preventDefault();
        dispatch(isSubMeun1In(''));
        navigate("/sub6");
    }

    const onCLickSubTab=(e, idx)=>{
        e.preventDefault();
        dispatch(isSubMeun1In(idx));
        navigate("/sub6");
    }

    return (

    <li className={`navBtn-li${state.isHT101Sub===true?' on':''}`} onMouseEnter={onMouseEnterHT101} onMouseLeave={onMouseLeaveHT101}>
        <a className="nav-meun" href="/sub6" onClick={onClickSub}>HT 101</a>
        <div className="sub-meun HT101" onMouseLeave={onMouseLeaveHT101}>
            <ul className="sub-wrap">
                {
                    state.headNavi.map((item,idx)=>{
                        return(
                            <li className="sub-list" key={idx}>
                                <a className="sub-tap" href="/sub6" onClick={(e)=>onCLickSubTab(e,idx)}>{item.submeun}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </li>

    );
};
