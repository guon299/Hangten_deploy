import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Headersub4() {

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
    return (

    <li className={`navBtn-li${state.isBoySub===true?' on':''}`} onMouseEnter={onMouseEnterBoy} onMouseLeave={onMouseLeaveBoy}>
        <Link className="nav-meun" to="/sub4">남아</Link>
        <div className="sub-meun boy" onMouseLeave={onMouseLeaveBoy}>
            <ul className="sub-wrap">
                {
                    state.headNavi.map((item,idx)=>{
                        return(
                            <li className="sub-list" key={idx}>
                                <Link className="sub-tap" to="/sub4">{item.submeun}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </li>

    );
};
