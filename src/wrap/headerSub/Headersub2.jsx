import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Headersub2() {
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
    return (

        <li className={`navBtn-li${state.isMenSub===true?' on':''}`} onMouseEnter={onMouseEnterMen} onMouseLeave={onMouseLeaveMen}>
            <Link className="nav-meun" to="/sub2">남성</Link>
            <div className="sub-meun men" onMouseLeave={onMouseLeaveMen} >
                <ul className="sub-wrap">
                    {
                        state.headNavi.map((item,idx)=>{
                            return(
                                <li className="sub-list" key={idx}>
                                    <Link className="sub-tap" to="/sub2">{item.submeun}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </li>

    );
};
