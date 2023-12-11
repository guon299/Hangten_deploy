import React from 'react';
import './scss/HpComponent.scss'
import { useDispatch } from 'react-redux';
import { hpconfirmModal } from '../reducer/hpConfirmModal';
import { hpsignDate } from '../reducer/hpsignDate';

export default function HpComponent(){
    const dispatch=useDispatch();

    const [state,setState] = React.useState({
        btn1:false,
        btn2:false,
        btn3:false,
        btn4:false,
        전체동의:'',
        이용약관:['개인정보이용동의','고유식별정보처리동의','서비스이용약관동의','통신사이용약관동의'],
        이용약관동의:[],
        isHp:false,
        num:null,
        이름:'',
        생년월일:'',
        휴대폰번호:'',
        보안문자:''

    })

    const onChangeServiceAllCheck=(e)=>{
        let 이용약관동의 = [];
        if(e.target.checked===true){
            이용약관동의 = state.이용약관;
        }
        else{
            이용약관동의 = [];
        }
        setState({
            ...state,
            이용약관동의: 이용약관동의,
        })
    }
    const onChangeService=(e)=>{
        let 이용약관동의 = state.이용약관동의;
        if(e.target.checked===true){
            이용약관동의=[...이용약관동의,e.target.value]
        }
        else {
            이용약관동의 = 이용약관동의.filter((item)=>item !== e.target.value);
        }
        setState({
            ...state,
            이용약관동의: 이용약관동의
        })
    }

    const onClickBtn1=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            btn1:!state.btn1,
            btn2:false,
            btn3:false,
            btn4:false
        })
    }
    const onClickBtn2=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            btn2:!state.btn2,
            btn1:false,
            btn3:false,
            btn4:false
        })
    }
    const onClickBtn3=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            btn3:!state.btn3,
            btn2:false,
            btn1:false,
            btn4:false
        })
    }
    const onClickBtn4=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            btn4:!state.btn4,
            btn2:false,
            btn3:false,
            btn1:false
        })
    }
    const onClikcClose=(e)=>{
        e.preventDefault();
        dispatch(hpconfirmModal(false));
    }
    React.useEffect(()=>{
        if(state.isHp===true){
            let num = Math.floor(Math.random() * 900000 + 100000); 
            setState({
                ...state,
                num:num
            })
        }
    },[state.isHp])

    const onClickHpAnthen=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            isHp:true
        })
    }
    const onChangName=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            이름:e.target.value
        })
    }
    const onChangeBirth=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            생년월일:e.target.value
        })
    }
    const onchangeHp=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            휴대폰번호:e.target.value
        })
    }
    const onChnageHpText=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            보안문자:e.target.value
        })
    }
    const onClickOk=(e)=>{
        e.preventDefault();
        if(state.이름===''){
            alert('이름을 입력해주세요')
        }
        else if(state.생년월일===''){
            alert('생년월일을 입력해주세요')
        }
        else if(state.휴대폰번호===''){
            alert('휴대폰 번호를 입력해주세요')
        }
        else if(Number(state.보안문자) !== state.num){
            alert('보안문자가 틀립니다')
        }
        else{
            const 인증정보 = {
                이름:state.이름,
                휴대폰번호:state.휴대폰번호
            }
            alert('인증이 완료되었습니다.')
            dispatch(hpsignDate(인증정보))
            dispatch(hpconfirmModal(false));
        }
    }

    return (
        <div id='HpComponent'>
            <div className="container">
                <div className="content">
                    <div className="title">
                        <h2>휴대폰 인증</h2>
                        <img onClick={onClikcClose} src="./images/confirm/close.png" alt="" />
                    </div>
                    {   !state.isHp &&
                        <div className="body1">
                            <div className="body-content">
                                <p>이용중이신 통신사를 선택해주세요.</p>
                                <div className="img-box">
                                    <ul>
                                        <li onClick={onClickBtn1} className={state.btn1?'on':''}>
                                        </li>
                                        <li onClick={onClickBtn2} className={state.btn2?'on':''}>
                                        </li>
                                        <li onClick={onClickBtn3} className={state.btn3?'on':''}>
                                        </li>
                                        <li onClick={onClickBtn4} className={state.btn4?'on':''}>
                                        </li>
                                    </ul>
                                </div>
                                <div className="agree-box">
                                    <div className="allAgree">
                                        <label htmlFor="allAgree">
                                            <input type="checkbox" onClick={onChangeServiceAllCheck} name='allAgree' id='allAgree' value={'전체 동의'} checked={state.이용약관동의.length === 4}  />
                                            전체 동의
                                        </label>
                                        

                                    </div>
                                    <ul>
                                        <li>
                                            <label htmlFor="agree1">
                                                <input type="checkbox" name='agree1' id='agree1' onClick={onChangeService} value={'개인정보이용동의'} checked={state.이용약관동의.includes('개인정보이용동의')} />
                                                개인정보이용동의
                                            </label>

                                        </li>
                                        <li>
                                            <label htmlFor="agree2">
                                                <input type="checkbox" name='agree2' id='agree2' onClick={onChangeService} value={'고유식별정보처리동의'} checked={state.이용약관동의.includes('고유식별정보처리동의')} />
                                                고유식별정보처리동의
                                            </label>

                                        </li>
                                        <li>
                                            <label htmlFor="agree3">
                                                <input type="checkbox" name='agree3' id='agree3' onClick={onChangeService} value={'서비스이용약관동의'} checked={state.이용약관동의.includes('서비스이용약관동의')} />
                                                서비스이용약관동의
                                            </label>

                                        </li>
                                        <li>
                                            <label htmlFor="agree4">
                                                <input type="checkbox" name='agree4' id='agree4' onClick={onChangeService} value={'통신사이용약관동의'} checked={state.이용약관동의.includes('통신사이용약관동의')} />
                                                통신사이용약관동의
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="button-box">
                                    <button>PASS로 인증하기</button>
                                    <button onClick={onClickHpAnthen}>문자(SMS)로 인증하기</button>
                                </div>
                            </div>
                        </div>
                    }
                    {   state.isHp &&
                        <div className="body2">
                            <p>문자(SMS)로 인증하기</p>
                            <div className="body-content">
                                <form>
                                    <div className="row row1">
                                        <h3>이름</h3>
                                        <label htmlFor="name">
                                            <input onChange={onChangName} type="text" name='name' id='name' placeholder='성명입력' value={state.이름}/>
                                        </label>
                                    </div>
                                    <div className="row row2">
                                        <h3>생년월일/성별</h3>
                                        <label htmlFor="birth">
                                            <div className="birth-box">
                                                <input onChange={onChangeBirth} className='birth1' type="text" name='birth' id='birth' placeholder='' maxLength={8} value={state.생년월일} />
                                                <em>-</em>
                                                <input className='birth2' type="password" name='birth' id='birth' placeholder='' maxLength={1} />
                                                <span>
                                                    <ul>
                                                        <li></li>
                                                        <li></li>
                                                        <li></li>
                                                        <li></li>
                                                        <li></li>
                                                        <li></li>
                                                    </ul>
                                                </span>
                                            </div>

                                        </label>
                                    </div>
                                    <div className="row row3">
                                        <h3>휴대폰번호</h3>
                                        <label htmlFor="hp">
                                            <input onChange={onchangeHp} type="text" name='hp' id='hp' placeholder='숫자만 입력' value={state.휴대폰번호} maxLength={11} />
                                        </label>
                                    </div>
                                    <div className="row row4">
                                        <h3>보안문자</h3>
                                        <div className="box">
                                            <div className="hpText-box">
                                                <p>
                                                    {state.num}
                                                </p>
                                            </div>
                                            <label htmlFor="hpText">
                                                <input onChange={onChnageHpText} type="text" name='hpText' id='hpText' placeholder='보안문자 입력' value={state.보안문자} />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="check">
                                        <label htmlFor="check">
                                            <input type="checkbox" name='check' id='check' />
                                            <span>인증정보(이름/휴대폰번호) 기억하기</span>
                                        </label>
                                    </div>
                                    <div className="btn-box">
                                        <button>취소</button>
                                        <button onClick={onClickOk}>확인</button>
                                    </div>
                                </form>
                                <div className="last-text">
                                    <p>
                                        PASS앱 설치 및 가입 후 이용이 가능합니다.<br/>
                                        앱마켓(구글 플레이스토어 / 애플 앱스토어) 에서<br/>
                                        “PASS” 검색!
                                    </p>
                                </div>
                                <div className='img'>
                                    <img src="./images/confirm/pc_bn_b2b_skt.png" alt="" />
                                </div>

                            </div>
                        </div>
                    }
                    <div className="footer">
                        <div className="text-box">
                            <p>이용약관 | 개인정보처리방침</p>
                            <p>고객센터 : 1666-6410 | cert@kcp.co.kr</p>
                            <div className="logo-box">
                                <img src="./images/confirm/logo_sa.png" alt="" />
                                <img src="./images/confirm/logo_kcp.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
