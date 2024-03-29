import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUpConfirmModal } from '../../reducer/signUpConfirmModal';
import axios from 'axios';

export default function Sub8AdminSearchPwResultComponent(){

    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [state, setState] = React.useState({
        회원유형: '관리자',
        새비밀번호1: '',
        새비밀번호2: '',
        findMethod: '임시비밀번호전송',
        isFocus1: false,
        isFocus2: false,
        아이디: location.state.아이디,
        휴대폰: location.state.휴대폰,
        이메일: location.state.이메일
    });

    const onChangeFindeMethod=(e)=>{
        setState({
            ...state,
            findMethod: e.target.value
        });
    }

    const onFocusUserPw1=()=>{
        setState({
            ...state,
            isFocus1: true
        });
    }

    const onBlurUserPw1=()=>{
        setState({
            ...state,
            isFocus1: false
        });
    }

    const onChangeUserPw1=(e)=>{
        setState({
            ...state,
            새비밀번호1: e.target.value
        });
    }

    const onFocusUserPw2=()=>{
        setState({
            ...state,
            isFocus2: true
        });
    }

    const onBlurUserPw2=()=>{
        setState({
            ...state,
            isFocus2: false
        });
    }

    const onChangeUserPw2=(e)=>{
        setState({
            ...state,
            새비밀번호2: e.target.value
        });
    }

    const SignUpConfirmModalMethod=(msg)=>{
        const obj = {
            signUpIsConfirmModal: true,
            signUpConfirmMsg: msg,
            userList:false
        }
        dispatch(signUpConfirmModal(obj));
        const htmlEl = document.getElementsByTagName('html')[0];
        htmlEl.classList.add('on');
    }

    const onClickOkBtn=(e)=>{
        e.preventDefault();
        SignUpConfirmModalMethod('임시 비밀번호를 전송하였습니다. 확인하고 로그인하세요.');
    }

    const onClickCancelBtn=(e)=>{
        e.preventDefault();
        navigate('/index');
    }

    const onSubmitPwReset=(e)=>{
        e.preventDefault();
        if(state.새비밀번호1===''){
            SignUpConfirmModalMethod('새비밀번호를 입력해주세요');
        }
        else if(state.새비밀번호2===''){
            SignUpConfirmModalMethod('새비밀번호를 한 번 더 입력해주세요.');
        }
        else if(state.새비밀번호1!==state.새비밀번호2){
            SignUpConfirmModalMethod('비밀번호가 일치하지 않습니다. 확인하고 다시 시도하세요.');
        }
        else{
            if(location.state.이메일!=='' && location.state.휴대폰===''){
                let formData = new FormData();
                formData.append('adminId', state.아이디);
                formData.append('adminEmail', state.이메일);
                formData.append('adminPw', state.새비밀번호1);
                axios({
                    url: 'http://kkoma1221.dothome.co.kr/hangten/hangten_admin_pw_email_update.php',
                    method: 'POST',
                    data: formData
                })
                .then((res)=>{
                    if(res.status===200){
                        console.log(res.data);
                        if(res.data===1){
                            SignUpConfirmModalMethod('비밀번호를 변경하시겠습니까?');
                        }
                        else if(res.data===0){
                            SignUpConfirmModalMethod('다시 확인하고 시도하세요.');
                        }
                    }
                })
                .catch((err)=>{
                    console.log(err);
                })
            }
            else if(location.state.이메일==='' && location.state.휴대폰!==''){
                let formData = new FormData();
                formData.append('adminId', state.아이디);
                formData.append('adminHp', state.휴대폰);
                formData.append('adminPw', state.새비밀번호1);
                axios({
                    url: 'http://kkoma1221.dothome.co.kr/hangten/hangten_admin_pw_hp_update.php',
                    method: 'POST',
                    data: formData
                })
                .then((res)=>{
                    if(res.status===200){
                        console.log(res.data);
                        if(res.data===1){
                            SignUpConfirmModalMethod('비밀번호를 변경하시겠습니까?');
                        }
                        else if(res.data===0){
                            SignUpConfirmModalMethod('다시 확인하고 시도하세요.');
                        }
                    }
                })
                .catch((err)=>{
                    console.log(err);
                })
            }
        }
    }

    return (
        <div id='ResultIdPw'>
            <section id="su8section1Result">
                <div className="container">
                    <div className="title">
                        <h2>관리자 비밀번호 찾기</h2>
                    </div>
                    <div className="content">
                        <div className="title-box">
                            <h2>비밀번호 찾기</h2>
                        </div>
                        <div className="content-box">
                            <div className="message-box">
                            </div>
                            <div className="info-box">
                                <div className="image-box">
                                    <img src="./images/sub/sub8/img_member_default.gif" alt="" />
                                </div>
                                <div className="information">
                                    <ul>
                                        <li>
                                            <h4 className='left-label'>아이디</h4>
                                            <strong><span>: </span>{location.state.아이디}</strong>
                                        </li>
                                        {
                                            (location.state.이메일!=='' && location.state.휴대폰==='') && (
                                                <li>
                                                    <h4 className='left-label'>이메일</h4>
                                                    <h5><span>: </span> {location.state.이메일}</h5>
                                                </li>
                                            )
                                        }
                                        {
                                            (location.state.휴대폰!=='' && location.state.이메일==='') && (
                                                <li>
                                                    <h4 className='left-label'>휴대폰</h4>
                                                    <h5><span>: </span> {location.state.휴대폰}</h5>
                                                </li>
                                            )
                                        }
                                        <li>
                                            <label htmlFor="findMethod1">
                                                <input
                                                    type="radio"
                                                    name='findMethod'
                                                    id='findMethod1'
                                                    value={'임시비밀번호전송'}
                                                    checked={state.findMethod.includes('임시비밀번호전송')}
                                                    onChange={onChangeFindeMethod}
                                                />
                                                <span>임시비밀번호전송</span>
                                            </label>
                                            <label htmlFor="findMethod2">
                                                <input
                                                    type="radio"
                                                    name='findMethod'
                                                    id='findMethod2'
                                                    value={'비밀번호재설정'}
                                                    checked={state.findMethod.includes('비밀번호재설정')}
                                                    onChange={onChangeFindeMethod}
                                                />
                                                <span>비밀번호재설정</span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <form action="" onSubmit={onSubmitPwReset}>
                            {
                                state.findMethod==='비밀번호재설정' && (
                                    <div className="new-pw">
                                        <div className="gap">
                                            {
                                                state.isFocus1 && (
                                                    <label htmlFor="userPw1"><span>새비밀번호</span></label>
                                                )
                                            }
                                            <input
                                                type="password"
                                                name='userPw1'
                                                id='userPw1'
                                                placeholder='새 비밀번호를 입력해 주세요'
                                                maxLength={16}
                                                value={state.새비밀번호1}
                                                onFocus={onFocusUserPw1}
                                                onBlur={onBlurUserPw1}
                                                onChange={onChangeUserPw1}
                                            />
                                            {
                                                state.isFocus2 && (
                                                    <label htmlFor="userPw2"><span>새비밀번호 확인</span></label>
                                                )
                                            }

                                            <input
                                                type="password"
                                                name='userPw2'
                                                id='userPw2'
                                                placeholder='새 비밀번호를 한 번 더 입력해 주세요.'
                                                maxLength={16}
                                                value={state.새비밀번호2}
                                                onFocus={onFocusUserPw2}
                                                onBlur={onBlurUserPw2}
                                                onChange={onChangeUserPw2}
                                            />
                                        </div>
                                    </div>
                                )
                            }
                                <div className="button-box">
                                    {
                                        state.findMethod==='임시비밀번호전송' && (
                                            <a href="!#" type='button' className='ok' onClick={onClickOkBtn}>확인</a>
                                        )
                                    }
                                    {
                                        state.findMethod==='비밀번호재설정' && (
                                            <button type='submit' className='ok'>전송</button>
                                        )
                                    }
                                    <a href="!#" className='cancel' onClick={onClickCancelBtn}>취소</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
