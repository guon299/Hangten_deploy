import React from 'react';
import './scss/sub8SearchIdPw.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Sub8SearchIdComponent() {

    const navigate = useNavigate();

    const [state, setState] = React.useState({
        아이디: '',
        가입일: '',
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
        isSelect: 'individual'
    });

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
            isSelect: e.target.value
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

    const onSubmitSearchIdForm=(e)=>{
        e.preventDefault();
        if(state.isValue==='이메일'){
            if(state.이름===''){
                alert('이름을 입력하세요.');
            }
            else if(state.이메일===''){
                alert('이메일을 입력하세요.');
            }
            else {
                let formData = new FormData();
                formData.append('userName', state.이름);
                formData.append('userEmail', state.이메일);
                axios({
                    url: 'https://agnusdeistore.com/hangten/hangten_search_id_name_email_select.php',
                    method: 'POST',
                    data: formData
                })
                .then((res)=>{
                    if(res.status===200){
                        if(res.data!==''){
                            // console.log(res);
                            // console.log(res.data);
                            setState({
                                ...state,
                                아이디: res.data.아이디,
                                가입일: res.data.가입일
                            });
                            // navigate('/sub8SearchIdResult');
                        }
                        else {
                            alert('입력하신 정보로 가입 된 회원 아이디는 존재하지 않습니다.');
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
                alert('이름을 입력하세요.');
            }
            else if(state.휴대폰===''){
                alert('휴대폰번호를 입력하세요.');
            }
            else{
                let formData = new FormData();
                formData.append('userName', state.이름);
                formData.append('userHp', state.휴대폰);
                axios({
                    url: 'https://agnusdeistore.com/hangten/hangten_search_id_name_hp_select.php',
                    method: 'POST',
                    data: formData
                })
                .then((res)=>{
                    if(res.status===200){
                        if(res.data!==''){
                            //console.log(res);
                            // console.log(res.data);
                            setState({
                                ...state,
                                아이디: res.data.아이디,
                                가입일: res.data.가입일
                            });
                        }
                        else {
                            alert('입력하신 정보로 가입 된 회원 아이디는 존재하지 않습니다.');
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
        if(state.아이디!=='' && state.가입일!==''){
            navigate('/sub8SearchIdResult', {
                state: {
                    아이디: state.아이디,
                    이름: state.이름,
                    이메일: state.이메일,
                    가입일: state.가입일,
                    휴대폰: state.휴대폰
                }
            });
        }
        return;
    },[state.아이디, state.가입일]);

    return (
        <div id='searchId'>
            <div className="container">
                <div className="title">
                    <h2>아이디 찾기</h2>
                    <div className="info">
                        <p>가입하신 방법에 따라 아이디 찾기가 가능합니다.</p>
                        <p>법인사업자 회원 또는 외국인 회원의 경우 법인명과 법인번호 또는</p>
                        <p>이름과 등록번호를 입력해 주세요.</p>
                    </div>
                </div>
                <div className="content">
                    <form action="" onSubmit={onSubmitSearchIdForm}>
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
                                (state.isSelect==='individual' || state.isSelect==='business') && (
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
                                state.isSelect==='corporation' && (
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
                                state.isSelect==='foreigner' && (
                                    <label htmlFor="tabBtnForeignerNum">
                                        <input
                                            type="radio"
                                            name='tabBtn'
                                            id='tabBtnForeignerNum'
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
                                        <option value="individual" selected={state.isSelect.includes('individual')}>개인회원</option>
                                        <option value="business" selected={state.isSelect.includes('business')}>개인 사업자회원</option>
                                        <option value="corporation" selected={state.isSelect.includes('corporation')}>법인 사업자회원</option>
                                        <option value="foreigner" selected={state.isSelect.includes('foreigner')}>외국인회원</option>
                                    </select>
                                </li>
                                <li>
                                    <input
                                        type="text"
                                        name='userName'
                                        id='userName'
                                        value={state.이름}
                                        placeholder={state.isSelect==='corporation'?'법인명':'이름'}
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
