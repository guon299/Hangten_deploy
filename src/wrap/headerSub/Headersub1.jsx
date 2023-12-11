import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Headersub1() {

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
    return (

        <li className={`navBtn-li${state.isNewSub===true?' on':''}`} onMouseEnter={onMouseEnterNew} onMouseLeave={onMouseLeaveNew}>
            <Link className="nav-meun" to="/sub1" >신상품</Link>
            <div className="sub-meun new" onMouseEnter={onMouseEnterNew} onMouseLeave={onMouseLeaveNew}>
                <ul className="sub-wrap">
                    {
                        state.headNavi.map((item,idx)=>{
                            return(
                                <li className="sub-list" key={idx}>
                                    <Link className="sub-tap" to="/sub1">{item.submeun}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </li>

    );
};
