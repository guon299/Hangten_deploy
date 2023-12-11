import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Headersub3() {

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
    return (

    <li className={`navBtn-li${state.isWomanSub===true?' on':''}`} onMouseEnter={onMouseEnterWoman} onMouseLeave={onMouseLeaveWoman}>
        <Link className="nav-meun" to="/sub3">여성</Link>
        <div className="sub-meun woman" onMouseLeave={onMouseLeaveWoman}>
            <ul className="sub-wrap">
                {
                    state.headNavi.map((item,idx)=>{
                        return(
                            <li className="sub-list" key={idx}>
                                <Link className="sub-tap" to="/sub3">{item.submeun}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </li>

    );
};
