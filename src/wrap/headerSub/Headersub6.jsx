import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Headersub6() {
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
    return (

    <li className={`navBtn-li${state.isHT101Sub===true?' on':''}`} onMouseEnter={onMouseEnterHT101} onMouseLeave={onMouseLeaveHT101}>
        <Link className="nav-meun" to="/sub6">HT 101</Link>
        <div className="sub-meun HT101" onMouseLeave={onMouseLeaveHT101}>
            <ul className="sub-wrap">
                {
                    state.headNavi.map((item,idx)=>{
                        return(
                            <li className="sub-list" key={idx}>
                                <Link className="sub-tap" to="/sub6">{item.submeun}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </li>

    );
};
