import React from 'react';
import '../sub/scss/sub7SignOk.scss'
import Sub7SignUpOkComponentChild from './Sub7SignUpOkComponentChild'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signIn } from '../../reducer/signIn';
export default function Sub7SignUpOkComponent() {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const[state,setState] = React.useState({
        아이디:location.state.아이디,
        이름:location.state.이름,
        이메일:location.state.이메일
    });
    React.useEffect(()=>{
        const 로그인정보={
            아이디:state.아이디,
            이름:state.이름,
            이메일:state.이메일
        }
        sessionStorage.setItem('HANGTEN_SIGNIN_INFORMATION',JSON.stringify(로그인정보))
        dispatch(signIn(로그인정보))
    },[])
    const onClickOk=(e)=>{
        e.preventDefault();
        navigate('/index')
    }

    return (
        <div id='sub7SignUp'>
            <div className="container">
                <div className="content">
                    <div className="title">
                        <h2>WELCOME</h2>
                        <h3>회원가입이 완료되었습니다.</h3>
                    </div>
                    <div className="signUp">
                        <div className="msg">
                            <h3>저희 쇼핑몰을 이용해 주셔서 감사합니다.</h3>
                            <strong></strong>
                        </div>
                        <div className="info">
                            <div className="img-box">
                                <img src="./images/sub/sub7/sub7_member.gif" alt="" />
                            </div>
                            <div className="info-text">
                                <span>
                                    <p>아이디</p>
                                    <em>{state.아이디}</em>
                                </span>
                                <span>
                                    <p>이름</p>
                                    <em>{state.이름}</em>
                                </span>
                                <span>
                                    <p>이메일</p>
                                    <em>{state.이메일}</em>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="text">
                        <p><strong>{state.이름} 님</strong>은 [FAN 회원] 회원이십니다.</p>
                        <p><strong>0원 이상</strong> 구매시<strong> 2%</strong>을 추가적립 받으실 수 있습니다.</p>
                    </div>
                    <div className="botton-box">
                        <button onClick={onClickOk}>완료</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
