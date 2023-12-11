import React from "react";
import './scss/Header.scss';
import Headersub1 from "./headerSub/Headersub1";
import Headersub2 from "./headerSub/Headersub2";
import Headersub3 from "./headerSub/Headersub3";
import Headersub4 from "./headerSub/Headersub4";
import Headersub5 from "./headerSub/Headersub5";
import Headersub6 from "./headerSub/Headersub6";
import {Link, Outlet } from 'react-router-dom';
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "../reducer/signIn";

export default  function HeaderComponent(){
    const selector = useSelector(state=>(state))
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [state, setState] = React.useState({
        isHeader:true,
    });

    React.useEffect(()=>{
        window.addEventListener('scroll', function(){
            if(window.scrollY!==0){
                setState({
                    ...state,
                    isHeader:false
                });
            }
            else if(window.scrollY===0){
                setState({
                    ...state,
                    isHeader:true
                });
            }
        });
    },[window.scrollY])

    const onClickLogOut=(e)=>{
    e.preventDefault();
    sessionStorage.removeItem('HANGTEN_SIGNIN_INFORMATION');
    dispatch(signIn(null));
    navigate('/index');
    }

    return(
        <>
            <header id="header">
                <div className="container">
                    <div className="top-box">
                        {
                            state.isHeader &&(
                                <div className="top-gap">
                                    <Link className="top-text" to="/index">지금 가입하면 20% 쿠폰발급</Link>
                                </div>
                            )
                        }
                    </div>
                    <div className={`head-content${state.isHeader?'':' fiex'}`}>
                        <div className="content-gap">
                            <div className="content-left">
                                <Link className="logo" to="/index"><img src="./images/header/logo.png" alt="" /></Link>
                            </div>
                            <div className="content-cneter">
                                <div className="center-box">
                                    <ul className="navBtn-ul">
                                        < Headersub1 />
                                        < Headersub2 />
                                        < Headersub3 />
                                        < Headersub4 />
                                        < Headersub5 />
                                        < Headersub6 />
                                    </ul>
                                </div>
                            </div>
                            <div className="content-right">
                                <ul className="right-box">
                                    {  selector.signIn.로그인정보===null &&
                                    <>
                                        <li className="right-list"><Link className="list-btn" to="/sub7">회원가입</Link></li>
                                        <li className="right-list"><Link className="list-btn" to="/sub8">로그인</Link></li>
                                        <li className="right-list"><Link className="list-btn" to="/sub9">장바구니</Link></li>
                                    </>
                                    }
                                    {  selector.signIn.로그인정보!==null &&
                                    <>
                                        <li className="right-list"><Link className="list-btn" to="/sub9">장바구니</Link></li>
                                        <li className="right-list"><Link className="list-btn" to="#">마이쇼핑</Link></li>
                                        <li onClick={onClickLogOut} className="right-list"><Link className="list-btn" to="#">로그아웃</Link></li>
                                    </>
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Outlet />
        </>
    )
}