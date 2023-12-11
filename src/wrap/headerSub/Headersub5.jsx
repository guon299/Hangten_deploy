import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Headersub5() {
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
    return (

    <li className={`navBtn-li${state.isGirlSub===true?' on':''}`} onMouseEnter={onMouseEnterGirl} onMouseLeave={onMouseLeaveGirl}>
        <Link className="nav-meun" to="/sub5">여아</Link>
        <div className="sub-meun girl" onMouseLeave={onMouseLeaveGirl}>
            <ul className="sub-wrap">
                {
                    state.headNavi.map((item,idx)=>{
                        return(
                            <li className="sub-list" key={idx}>
                                <Link className="sub-tap" to="/sub5">{item.submeun}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </li>

    );
};
