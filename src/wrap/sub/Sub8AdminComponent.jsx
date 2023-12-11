import React from 'react';
import './scss/sub8Admin.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signIn } from '../../reducer/signIn';
import axios from 'axios';

export default function Sub8AdminComponent() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [state, setState] = React.useState({
        아이디: '',
        비밀번호: '',
        주문자명: '',
        주문번호: '',
        비회원주문비밀번호: '',
        isFocusId: false,
        isFocusPw: false,
        isFocusOrder1: false,
        isFocusOrder2: false,
        isFocusOrder3: false,
        viewPw: false
    });

     // 홈버튼 클릭이벤트
     const onClickGoHomeBtn=(e)=>{
        e.preventDefault();
        navigate('/index');
    }

    // 뒤로가기 클릭이벤트 
    const onClickHistoryBackBtn=(e)=>{
        e.preventDefault();
        window.history.go(-1);
    }




    const onClickSearchIdBtn=(e)=>{
        e.preventDefault();
        navigate('/sub8SearchId');
    }

    const onClickSearchPwBtn=(e)=>{
        e.preventDefault();
        navigate('/sub8SearchPw');
    }

    const onClickGoSignUp=(e)=>{
        e.preventDefault();
        navigate('/sub7AdminSignUp');
    }

    const onClickViewPw=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            viewPw: !state.viewPw
        });
    }

    // 아이디
    const onFocusId=()=>{
        setState({
            ...state,
            isFocusId: true
        });
    }

    const onBlurId=()=>{
        setState({
            ...state,
            isFocusId: false
        });
    }

    const onChageId=(e)=>{
        setState({
            ...state,
            아이디: e.target.value
        });
    }

    // 비밀번호
    const onFocusPw=()=>{
        setState({
            ...state,
            isFocusPw: true
        });
    }

    const onBlurPw=()=>{
        setState({
            ...state,
            isFocusPw: false
        });
    }

    const onChangePw=(e)=>{
        setState({
            ...state,
            비밀번호: e.target.value
        });
    }
    // 회원 onSubtmit 이벤트
    const onSubmitSignIn=(e)=>{
        e.preventDefault();
        if(state.아이디===''){
            alert('아이디 항목은 필수 입력값입니다.');
        }
        else if(state.비밀번호===''){
            alert('패스워드 항목은 필수 입력값입니다.');
        }
        else {
            let formData = new FormData();
            formData.append('adminId', state.아이디);
            formData.append('adminPw', state.비밀번호);
            axios({
                url: 'https://agnusdeistore.com/hangten/hangten_admin_table_select.php',
                method: 'POST',
                data: formData
            })
            .then((res)=>{
                if(res.status===200){
                    //console.log(res.data);
                    if(res.data===0){
                        alert('아이디 또는 비밀번호가 일치하지 않습니다.');
                    }
                    else{
                        const 로그인정보 = {
                            회원등급: '관리자',
                            아이디: res.data.아이디,
                            이름: res.data.이름, 
                            이메일: res.data.이메일,
                            휴대폰: res.data.휴대폰,
                            주소: res.data.주소,
                            생일: res.data.생일
                        }
                        sessionStorage.setItem('HANGTEN_SIGNIN_INFORMATION', JSON.stringify(로그인정보));
                        // console.log(JSON.stringify(로그인정보));
                        dispatch(signIn(로그인정보));
                        navigate('/index');
                    }
                }
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    }

    return (
        <div id='sub8Admin'>
            <div className="container">
                <div className="signin-box">
                <div className="top">
                        <div className="button-box">
                            <button className='go-back-btn' onClick={onClickHistoryBackBtn}></button>
                            <a href="!#" className='go-home-btn blind' onClick={onClickGoHomeBtn}>홈</a>
                        </div>
                        <div className="logo-box">
                            <a href="!#">
                                <img src="./images/modal/icon_logo.png" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="middle">
                        <div className="content">
                            <div className="tab-button-box">
                                <button>행텐 관리자 로그인</button>
                            </div>
                            <form action="" id='member' autoComplete='off' onSubmit={onSubmitSignIn}>
                                <ul className='input-box nomember'>
                                    <li>
                                        <div className="gap">
                                            {
                                                state.isFocusId && (
                                                    <label htmlFor="adminId">아이디</label>
                                                )
                                            }
                                            <input
                                                type="text"
                                                name='adminId'
                                                id='adminId'
                                                onFocus={onFocusId}
                                                onBlur={onBlurId}
                                                value={state.아이디}
                                                onChange={onChageId}
                                                placeholder='아이디'
                                            />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="gap">
                                            {
                                                state.isFocusPw && (
                                                    <label htmlFor="adminPw">비밀번호</label>
                                                )
                                            }
                                            <input
                                                type={state.viewPw?"text":"password"}
                                                name='adminPw'
                                                id='adminPw'
                                                placeholder='비밀번호'
                                                onFocus={onFocusPw}
                                                onBlur={onBlurPw}
                                                value={state.비밀번호}
                                                onChange={onChangePw}
                                            />
                                            <button onClick={onClickViewPw}><img src={`./images/modal/${state.viewPw?'icon_open_eye.png':'icon_close_eye.png'}`} alt="" /></button>
                                        </div>
                                    </li>
                                    <li className='SaveIdCheck'>
                                        <label htmlFor="saveadminId">
                                        <input type="checkbox" name='saveadminId' id='saveadminId' value={'아이디저장'}/>
                                        아이디저장</label>
                                    </li>
                                    <li>
                                        <div className="gap">
                                            <input type="submit" name='submitBtnMember' id='submitBtnMember' value={'로그인'}/>
                                        </div>
                                    </li>
                                    <li className='sign'>
                                        <div className="gap">
                                            <div className="search-box">
                                                <a href="!#" onClick={onClickSearchIdBtn}>아이디 찾기</a>
                                                <span>|</span>
                                                <a href="!#" onClick={onClickSearchPwBtn}>비밀번호 찾기</a>
                                            </div>
                                            <div className="signup-box">
                                                <a href="!#" onClick={onClickGoSignUp}>회원가입</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
