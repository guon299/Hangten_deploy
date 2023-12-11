import React from 'react';
import './scss/sub8SearchIdPw.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Sub8SearchPwComponent() {

    const navigate = useNavigate();

    const [state, setState] = React.useState({
        아이디: '',
        이름: '',
        이메일: '',
        휴대폰: '',
        휴대폰1: '',
        휴대폰2: '',
        휴대폰3: '',
        법인번호: '',
        법인번호1: '',
        법인번호2: '',
        등록번호: '',
        등록번호1: '',
        등록번호2: '',
        isValue: '이메일',
        memberType: 'individual',
        비밀번호: ''
    });

    const onChangeId=(e)=>{
        setState({
            ...state,
            아이디: e.target.value
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

    const onChangeIsValue=(e)=>{
        setState({
            ...state,
            isValue: e.target.value
        });
    }

    const onChangeMemberType=(e)=>{
        setState({
            ...state,
            memberType: e.target.value
        });
    }

    const onChangeCorpNum1=(e)=>{
        setState({
            ...state,
            법인번호1: e.target.value
        });
    }

    const onChangeCorpNum2=(e)=>{
        setState({
            ...state,
            법인번호2: e.target.value
        });
    }

    React.useEffect(()=>{
        if(state.법인번호1!=='' && state.법인번호2!==''){
            let 법인번호 = `${state.법인번호1}-${state.법인번호2}`;
            setState({
                ...state,
                법인번호: 법인번호
            });
        }
    },[state.법인번호1, state.법인번호2]);

    const onChangeForeNum1=(e)=>{
        setState({
            ...state,
            등록번호1: e.target.value
        });
    }

    const onChangeForeNum2=(e)=>{
        setState({
            ...state,
            등록번호2: e.target.value
        });
    }

    React.useEffect(()=>{
        if(state.등록번호1!=='' && state.등록번호2!==''){
            let 등록번호 = `${state.등록번호1}-${state.등록번호2}`;
            setState({
                ...state,
                등록번호: 등록번호
            });
        }
    },[state.등록번호1, state.등록번호2]);


    const onSubmitSearchPw=(e)=>{
        e.preventDefault();
        if(state.isValue==='이메일'){
            if(state.아이디===''){
                alert('아이디 항목은 필수 입력값입니다.');
            }
            else if(state.이름===''){
                alert('이름을 입력하세요.');
            }
            else if(state.이메일===''){
                alert('이메일을 입력하세요.');
            }
            else{
                let formData = new FormData();
                formData.append('userId', state.아이디);
                formData.append('userName', state.이름);
                formData.append('userEmail', state.이메일);
                axios({
                    url: 'https://agnusdeistore.com/hangten/hangten_search_pw_email_select.php',
                    method: 'POST',
                    data: formData
                })
                .then((res)=>{
                    if(res.status===200){
                        console.log(res.data);
                        if(res.data!==''){
                            setState({
                                ...state,
                                비밀번호: res.data.비밀번호
                            });
                        }
                        else{
                            alert('입력하신 정보로 가입 된 회원은 존재하지 않습니다.');
                        }
                    }
                })
                .catch((err)=>{
                    console.log(err);
                })
            }
        }
        else if(state.isValue==='휴대폰번호'){
            if(state.아이디===''){
                alert('아이디 항목은 필수 입력값입니다.');
            }
            else if(state.이름===''){
                alert('이름을 입력하세요.');
            }
            else if(state.휴대폰===''){
                alert('휴대폰번호를 입력하세요.');
            }
            else {
                let formData = new FormData();
                formData.append('userId', state.아이디);
                formData.append('userName', state.이름);
                formData.append('userHp', state.휴대폰);
                axios({
                    url: 'https://agnusdeistore.com/hangten/hangten_search_pw_hp_select.php',
                    method: 'POST',
                    data: formData
                })
                .then((res)=>{
                    if(res.status===200){
                        // console.log(res.data);
                        if(res.data!==''){
                            setState({
                                ...state,
                                비밀번호: res.data.비밀번호
                            });
                        }
                    }
                })
                .catch((err)=>{
                    console.log(err);
                })
            }
        }
    }

    React.useEffect(()=>{
        if(state.가입일!=='' && state.비밀번호!==''){
            navigate('/sub8SearchPwResult', {
                state: {
                    아이디: state.아이디,
                    이름: state.이름,
                    이메일: state.이메일,
                    비밀번호: state.비밀번호,
                    휴대폰: state.휴대폰
                }
            });
        }
        return;
    },[state.가입일, state.비밀번호]);
    
    return (
        <div id='searchId'>
            <div className="container">
                <div className="title">
                    <h2>비밀번호 찾기</h2>
                    <div className="info">
                        <p>가입하신 방법에 따라 비밀번호 찾기가 가능합니다.</p>
                        <p>비밀번호 찾기를 위해 정보를 입력해주세요.</p>
                    </div>
                </div>
                <div className="content">
                    <form action="" autoComplete='off' onSubmit={onSubmitSearchPw}>
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
                            {
                                (state.memberType==='individual' || state.memberType==='business') && (
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
                                )
                            }
                            {
                                state.memberType==='corporation' && (
                                    <label htmlFor="tabBtnCorpNum">
                                        <input
                                            type="radio"
                                            name='tabBtn'
                                            id='tabBtnCorpNum'
                                            value={'법인번호'}
                                            checked={state.isValue.includes('법인번호')}
                                            onChange={onChangeIsValue}
                                        />
                                    법인번호</label>
                                )
                            }
                            {
                                state.memberType==='foreigner' && (
                                    <label htmlFor="tabBtnForeNum">
                                        <input
                                            type="radio"
                                            name='tabBtn'
                                            id='tabBtnForeNum'
                                            value={'등록번호'}
                                            checked={state.isValue.includes('등록번호')}
                                            onChange={onChangeIsValue}
                                        />
                                    등록번호</label>
                                )
                            }
                        </div>
                        <div className="input-box">
                            <ul>
                                <li>
                                    <select name="searchType" id="searchType" onChange={onChangeMemberType}>
                                        <option value="individual" onSelect={state.memberType.includes('individual')}>개인회원</option>
                                        <option value="business" onSelect={state.memberType.includes('business')}>개인 사업자회원</option>
                                        <option value="corporation" onSelect={state.memberType.includes('corporation')}>법인 사업자회원</option>
                                        <option value="foreigner" onSelect={state.memberType.includes('foreigner')}>외국인회원</option>
                                    </select>
                                </li>
                                <li>
                                    <input
                                        type="text"
                                        name='userId'
                                        id='userId'
                                        value={state.아이디}
                                        placeholder='아이디'
                                        onChange={onChangeId}
                                    />
                                </li>
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
                                {
                                    state.isValue==='법인번호' && (
                                        <li className='corp-num'>
                                            <input
                                                type="text"
                                                name='userCorpNum'
                                                id='userCorpNum1'
                                                value={state.법인번호1}
                                                placeholder='법인번호'
                                                onChange={onChangeCorpNum1}
                                            />
                                            <span>-</span>
                                            <input
                                                type="text"
                                                name='userCorpNum'
                                                id='userCorpNum2'
                                                value={state.법인번호2}
                                                onChange={onChangeCorpNum2}
                                            />
                                        </li>
                                    )
                                }
                                {
                                    state.isValue==='등록번호' && (
                                        <li className='fore-num'>
                                        <input
                                            type="text"
                                            name='userForeNum'
                                            id='userForeNum1'
                                            value={state.등록번호1}
                                            placeholder='외국인 등록번호'
                                            onChange={onChangeForeNum1}
                                        />
                                        <span>-</span>
                                        <input
                                            type="text"
                                            name='userForeNum'
                                            id='userForeNum2'
                                            value={state.등록번호2}
                                            onChange={onChangeForeNum2}
                                        />
                                    </li>
                                    )
                                }
                            </ul>
                        </div>
                        <div className="button-box">
                            <input type="submit" name='submitBtn' id='submitBtn' value={'확인'} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
