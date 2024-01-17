import React from 'react';
import './scss/sub8SearchIdPw.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUpConfirmModal } from '../../reducer/signUpConfirmModal';

export default function Sub8AdminSearchIdComponent(){

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [state, setState] = React.useState({
        이름: '',
        이메일: '',
        휴대폰: '',
        휴대폰1: '',
        휴대폰2: '',
        휴대폰3: '',
        isValue: '이메일'
    });

    const onChangeIsValue=(e)=>{
        setState({
            ...state,
            isValue: e.target.value
        });
    }

    const onChangeName=(e)=>{
        setState({
            ...state,
            이름: e.target.value
        });
    }

    const onChangeEmail=(e)=>{
        setState({
            ...state,
            이메일: e.target.value
        });
    }

    const onChangeHp1=(e)=>{
        setState({
            ...state,
            휴대폰1: e.target.value
        });
    }

    const onChangeHp2=(e)=>{
        setState({
            ...state,
            휴대폰2: e.target.value
        });
    }

    const onChangeHp3=(e)=>{
        setState({
            ...state,
            휴대폰3: e.target.value
        });
    }

    React.useEffect(()=>{
        if(state.휴대폰1!=='' && state.휴대폰2!=='' && state.휴대폰3!==''){
            let 휴대폰 = `${state.휴대폰1}${state.휴대폰2}${state.휴대폰3}`;
            setState({
                ...state,
                휴대폰: 휴대폰
            });
        }
    },[state.휴대폰1, state.휴대폰2, state.휴대폰3]);

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

    const onSubmitAdminSearchIdForm=(e)=>{
        e.preventDefault();
        if(state.isValue==='이메일'){
            if(state.이름===''){
                SignUpConfirmModalMethod('이름을 입력하세요.');
            }
            else if(state.이메일===''){
                SignUpConfirmModalMethod('이메일을 입력하세요.');
            }
            else {
                let formData = new FormData();
                formData.append('adminName', state.이름);
                formData.append('adminEmail', state.이메일);
                axios({
                    url: 'http://kkoma1221.dothome.co.kr/hangten/hangten_admin_id_email_search.php',
                    method: 'POST',
                    data: formData
                })
                .then((res)=>{
                    if(res.status===200){
                        if(res.data!==''){
                            // console.log(res);
                            // console.log(res.data);
                            const obj = {
                                아이디: res.data.아이디,
                                이름: state.이름,
                                이메일: state.이메일,
                                가입일: res.data.가입일,
                                휴대폰: state.휴대폰
                            }
                            navigate('/sub8AdminSearchIdResult', {state:obj});
                        }
                        else {
                            SignUpConfirmModalMethod('입력하신 정보로 가입 된 회원 아이디는 존재하지 않습니다.');
                        }
                    }
                })
                .catch((err)=>{
                    console.log(err);
                })
            }
        }
        else if(state.isValue==='휴대폰번호'){
            if(state.이름===''){
                SignUpConfirmModalMethod('이름을 입력하세요.');
            }
            else if(state.휴대폰===''){
                SignUpConfirmModalMethod('휴대폰번호를 입력하세요.');
            }
            else {
                let formData = new FormData();
                formData.append('adminName', state.이름);
                formData.append('adminHp', state.휴대폰);
                axios({
                    url: 'http://kkoma1221.dothome.co.kr/hangten/hangten_admin_id_hp_search.php',
                    method: 'POST',
                    data: formData
                })
                .then((res)=>{
                    if(res.status===200){
                        if(res.data!==''){
                            // console.log(res);
                            // console.log(res.data);
                            const obj = {
                                아이디: res.data.아이디,
                                이름: state.이름,
                                이메일: state.이메일,
                                가입일: res.data.가입일,
                                휴대폰: state.휴대폰
                            }
                            navigate('/sub8AdminSearchIdResult', {state:obj});
                        }
                        else {
                            SignUpConfirmModalMethod('입력하신 정보로 가입 된 회원 아이디는 존재하지 않습니다.');
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
        <div id='searchId' className='admin_id_search'>
            <div className="container">
                <div className="title">
                    <h2>관리자 아이디 찾기</h2>
                    <div className="info">
                        <p>가입하신 방법에 따라 아이디 찾기가 가능합니다.</p>
                    </div>
                </div>
                <div className="content">
                    <form action="" onSubmit={onSubmitAdminSearchIdForm}>
                        <div className="tab-button-box">
                            <label htmlFor="tabBtnEmail">
                                <input
                                    type="radio"
                                    name='tabBtn'
                                    id='tabBtnEmail'
                                    value={'이메일'}
                                    checked={state.isValue.includes('이메일')}
                                    onChange={onChangeIsValue}
                                />
                            이메일</label>
                            <label htmlFor="tabBtnHp">
                                <input
                                    type="radio"
                                    name='tabBtn'
                                    id='tabBtnHp'
                                    value={'휴대폰번호'}
                                    checked={state.isValue.includes('휴대폰번호')}
                                    onChange={onChangeIsValue}
                                />
                            휴대폰번호</label>
                            <label htmlFor="tabBtnHpAuthen">
                                <input
                                    type="radio"
                                    name='tabBtn'
                                    id='tabBtnHpAuthen'
                                    value={'휴대폰인증'}
                                    checked={state.isValue.includes('휴대폰인증')}
                                    onChange={onChangeIsValue}
                                />
                            휴대폰인증</label>
                        </div>
                        <div className="input-box">
                            <ul>
                                <li>
                                    <input
                                        type="text"
                                        name='userName'
                                        id='userName'
                                        value={state.이름}
                                        placeholder='이름'
                                        onChange={onChangeName}
                                    />
                                </li>
                                {
                                    state.isValue==='이메일' && (
                                        <li>
                                            <input
                                                type="text"
                                                name='userEmail'
                                                id='userEmail'
                                                value={state.이메일}
                                                placeholder='이메일로 찾기'
                                                onChange={onChangeEmail}
                                            />
                                        </li>
                                    )
                                }
                                {
                                    state.isValue==='휴대폰번호' && (
                                        <li className='hp'>
                                            <input
                                                type="text"
                                                name='userHp'
                                                id='userHp1'
                                                value={state.휴대폰1}
                                                maxLength={3}
                                                onChange={onChangeHp1}
                                            />
                                            <span>-</span>
                                            <input
                                                type="text"
                                                name='userHp'
                                                id='userHp2'
                                                value={state.휴대폰2}
                                                maxLength={4}
                                                onChange={onChangeHp2}
                                            />
                                            <span>-</span>
                                            <input
                                                type="text"
                                                name='userHp'
                                                id='userHp3'
                                                value={state.휴대폰3}
                                                maxLength={4}
                                                onChange={onChangeHp3}
                                            />
                                        </li>
                                    )
                                }
                                {
                                    state.isValue==='휴대폰인증' && (
                                        <li className='hp-authen'>
                                            <p>본인 명의의 휴대폰으로 아이디 찾기를<br />진행할 수 있습니다. 휴대폰 명의자의<br />정보로가입한 아이디 찾기가 가능합니다.</p>
                                            <button className='hpAuthenBtn'><img src="./images/modal/btn_icon_mobile.gif" alt="" /><span>휴대폰 인증</span></button>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                        <div className="button-box admin">
                            <input type="submit" name='submitBtn' id='submitBtn' value={'확인'} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};