import React from 'react';
import './scss/sub8.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signIn } from '../../reducer/signIn';
import { confirmModal } from '../../reducer/confirmModal';
import axios from 'axios';

export default function Sub8Component() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [state, setState] = React.useState({
        아이디: '',
        비밀번호: '',
        주문자명: '',
        주문번호: '',
        비회원주문비밀번호: '',
        isMember: false,
        isFocusId: false,
        isFocusPw: false,
        isFocusOrder1: false,
        isFocusOrder2: false,
        isFocusOrder3: false,
        viewPw: false
    });

    const onClickModal=(e)=>{
        e.preventDefault();
        dispatch(confirmModal(true));
    }
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

    // 탭메뉴 버튼 클릭이벤트
    const onClickTabBtn=(e, el)=>{
        e.preventDefault();
        let isMember = false;
        if(el==='member'){
            isMember = true;
        }
        else if(el==='nomember'){
            isMember = false;
        }
        setState({
            ...state,
            isMember: isMember
        });
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
        navigate('/sub7');
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

    // 주문자명

    const onFocusOrder1=()=>{
        setState({
            ...state,
            isFocusOrder1: true
        });
    }

    const onBlurOrder1=()=>{
        setState({
            ...state,
            isFocusOrder1: false
        });
    }

    const onChangeOrder1=(e)=>{
        setState({
            ...state,
            주문자명: e.target.value
        });
    }

    // 주문번호
    const onFocusOrder2=()=>{
        setState({
            ...state,
            isFocusOrder2: true
        });
    }

    const onBlurOrder2=()=>{
        setState({
            ...state,
            isFocusOrder2: false
        });
    }

    const onChangeOrder2=(e)=>{
        setState({
            ...state,
            주문번호: e.target.value
        });
    }

    // 비회원주문 비밀번호
    const onFocusOrder3=()=>{
        setState({
            ...state,
            isFocusOrder3: true
        });
    }

    const onBlurOrder3=()=>{
        setState({
            ...state,
            isFocusOrder3: false
        });
    }

    const onChangeOrder3=(e)=>{
        setState({
            ...state,
            비회원주문비밀번호: e.target.value
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
            formData.append('userId', state.아이디);
            formData.append('userPw', state.비밀번호);
            axios({
                url: 'https://agnusdeistore.com/hangten/hangten_signin_select.php',
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
                            회원등급 : '일반',
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

    // 비회원 onSubmit 이벤트
    const onSubmitNomember=(e)=>{
        e.preventDefault();
        const regExp = /[A-Za-z0-9]+-[A-Za-z0-9]+/g;
        let 주문번호 = state.주문번호;

        if(state.주문자명===''){
            alert('주문자명 항목은 필수 입력값입니다.');
        }
        else if(주문번호==='' || regExp.test(주문번호)===false){
            alert('올바른 주문번호가 아닙니다.(주문번호는 하이픈(" - ")을 포함해서 입력해주세요.)');
        }
        else if(state.비회원주문비밀번호===''){
            alert('비회원주문 비밀번호 항목은 필수 입력값입니다.');
        }
        else{
            alert('유효한 주문 번호가 아닙니다.');
        }
    }

    return (
        <div id='sub8'>
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
                        <div className="title-box">
                            <h2>로그인</h2>
                            <p>아이디와 비밀번호 입력하기 귀찮으시죠?</p>
                            <p>1초 회원가입으로 입력없이 간편하게 로그인 하세요.</p>
                            <div className="button-box">
                                <a href="!#"><img src="./images/modal/icon_kakao.svg" alt="" /><span>카카오 1초 로그인/회원가입</span></a>
                            </div>
                        </div>
                        <div className="image-box">
                            <img src="./images/modal/sync-default-banner-img.jpg" alt="" />
                        </div>
                        <div className="content">
                            <div className="tab-button-box">
                                <button onClick={(e)=>onClickTabBtn(e, 'member')} className={state.isMember?'on':''}>기존 회원이세요?</button>
                                <button onClick={(e)=>onClickTabBtn(e, 'nomember')} className={state.isMember?'':'on'}>비회원 배송조회</button>
                            </div>
                            {
                                state.isMember && (
                                    <form action="" id='member' autoComplete='off' onSubmit={onSubmitSignIn}>
                                        <ul className='input-box nomember'>
                                            <li>
                                                <div className="gap">
                                                    {
                                                        state.isFocusId && (
                                                            <label htmlFor="userId">아이디</label>
                                                        )
                                                    }
                                                    <input
                                                        type="text"
                                                        name='userId'
                                                        id='userId'
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
                                                            <label htmlFor="userPw">비밀번호</label>
                                                        )
                                                    }
                                                    <input
                                                        type={state.viewPw?"text":"password"}
                                                        name='userPw'
                                                        id='userPw'
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
                                                <label htmlFor="saveUserId">
                                                <input type="checkbox" name='saveUserId' id='saveUserId' value={'아이디저장'}/>
                                                아이디저장</label>
                                            </li>
                                            <li>
                                                <div className="gap">
                                                    <input type="submit" name='submitBtnMember' id='submitBtnMember' value={'기존 회원 로그인'}/>
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
                                )
                            }
                            {
                                !state.isMember && (
                                    <form action="" id='nomember' autoComplete='off' onSubmit={onSubmitNomember}>
                                        <ul className='input-box nomember'>
                                            <li>
                                                <div className="gap">
                                                    {
                                                        state.isFocusOrder1 && (
                                                        <label htmlFor="orderName">주문자명</label>
                                                        )
                                                    }
                                                    <input
                                                        type="text"
                                                        name='orderName'
                                                        id='orderName'
                                                        placeholder='주문자명'
                                                        onFocus={onFocusOrder1}
                                                        onBlur={onBlurOrder1}
                                                        value={state.주문자명}
                                                        onChange={onChangeOrder1}
                                                    />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="gap">
                                                    {
                                                        state.isFocusOrder2 && (
                                                            <label htmlFor="orderNumber">주문번호</label>
                                                        )
                                                    }
                                                    <input
                                                        type="text"
                                                        name='orderNumber'
                                                        id='orderNumber'
                                                        placeholder='주문번호 (-) 포함'
                                                        onFocus={onFocusOrder2}
                                                        onBlur={onBlurOrder2}
                                                        value={state.주문번호}
                                                        onChange={onChangeOrder2}
                                                    />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="gap">
                                                    {
                                                        state.isFocusOrder3 && (
                                                            <label htmlFor="orderPw">비회원주문 비밀번호</label>
                                                        )
                                                    }
                                                    <input
                                                        type="password"
                                                        name='orderPw'
                                                        id='orderPw'
                                                        placeholder='비회원주문 비밀번호'
                                                        onFocus={onFocusOrder3}
                                                        onBlur={onBlurOrder3}
                                                        value={state.비회원주문비밀번호}
                                                        onChange={onChangeOrder3}
                                                    />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="gap">
                                                    <input type="submit" name='submitBtnNoMember' id='submitBtnNoMember' value={'비회원 배송조회'} />
                                                </div>
                                            </li>
                                        </ul>
                                    </form>
                                )
                            }
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="logo-box">
                            <a href="!#"><img src="./images/modal/icon_apple.svg" alt="" /></a>
                        </div>
                        <div className="text1">
                            <h3>로그인까지 한 번에,</h3>
                            <h3>구매가 빨라지는 <strong>1초회원가입</strong> 이란? <span onClick={onClickModal}></span></h3>
                        </div>
                        <div className="text2">
                            <h4>hangten도 <strong>1초회원가입</strong> 사용 중</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
