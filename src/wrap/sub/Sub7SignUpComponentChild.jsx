import React from 'react';
import '../sub/scss/sub7.scss'
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import { isAddress } from '../../reducer/isAddress';
import { useNavigate,useLocation } from 'react-router-dom';
import { hpconfirmModal } from '../../reducer/hpConfirmModal';
import { hpsignDate } from '../../reducer/hpsignDate'

export default function Sub7SignUpComponentChild() {

    const dispatch = useDispatch();
    const selector = useSelector((state)=>state)
    const navigate = useNavigate()
    const location = useLocation()
    

    const [state,setState] = React.useState({
        아이디:'',
        아이디중복:[],
        비밀번호:'',
        비밀번호확인:'',
        이름:'',
        우편번호:'',
        주소1:'',
        주소2:'',
        일반전화:'',
        휴대전화:'',
        이메일:'',
        이메일중복:[],
        성별:'',
        생년:'',
        생월:'',
        생일:'',
        양음력:'',
        지역:'',
        전체동의:'',
        이용약관:['필수 동의함1','필수 동의함2','동의함3','동의함4','동의함5'],
        이용약관동의:[],
        idGuidText:'',
        IsidGuidText:false,
        Pw2GuidText:'',
        emailGuidText:'',
        IsEmailGuidText:false,
        isPw1Guid:false
    })
    React.useEffect(()=>{
        if(selector.hpsignDate.인증정보!==null){
            setState({
                ...state,
                이름:selector.hpsignDate.인증정보.이름,
                휴대전화:selector.hpsignDate.인증정보.휴대폰번호,
            })
        }
    },[selector.hpsignDate])
    React.useEffect(()=>{
        setState({
            ...state,
            주소1:selector.address.주소1,
            우편번호:selector.address.zonecode
        })
    },[selector.address.주소1])
    
    React.useEffect(()=>{
        axios({
            url:'https://answotlr12.dothome.co.kr/hangten/hangten_email_check.php',
            method:'GET'
        })
        .then((result)=>{
            if(result.status===200){
                if(result.data.length>0){
                    let 이메일중복 = state.이메일중복
                    result.data.map((item)=>{
                        이메일중복=[...이메일중복,item.이메일]
                        setState({
                            ...state,
                            이메일중복:이메일중복
                        })
                    })
                }
            }
        })
        .catch((err)=>{
            console.log(err+'실패')
        })
    },[])

    React.useEffect(()=>{
        axios({
            url:'https://answotlr12.dothome.co.kr/hangten/hangten_id_check.php',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                if(res.data.length>0){
                    let 아이디중복 = state.아이디중복
                    res.data.map((item)=>{
                        아이디중복=[...아이디중복,item.아이디]
                        setState({
                            ...state,
                            아이디중복:아이디중복
                        })
                    })
                }
            }
        })
        .catch((err)=>{
            console.log(err+'실패')
        })
        return;
    },[state.이메일중복])

    const onChangeId=(e)=>{
        const   {value} = e.target;
        let     idGuidText= '';
        let IsidGuidText=false;
        let     아이디= e.target.value;
        const   regexp1 = /[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]/g;
        const   regexp2 = /[A-Z]/g;
        const   regexp3 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g;
        const   regexp4 = /\s/g;
        const   regexp5 = /^(.){4,16}$/g;
        const   regexp6 = /^[0-9]/g;
        const   regexp7 = /[^0-9]/g;

        if(value===''){
            idGuidText = '아이디를 입력해주세요';
        }
        else if(regexp5.test(value)===false){
            idGuidText = '아이디는 영문소문자 또는 숫자 4~16자로 입력해 주세요.'
            IsidGuidText = false
        }
        else if(regexp1.test(value)===true || regexp2.test(value)===true || regexp3.test(value)===true || regexp4.test(value)===true || regexp6.test(value)===true || regexp7.test(value)===false){
            idGuidText = '대문자/공백/특수문자가 포함되었거나, 숫자로 시작 또는 숫자로만 이루어진 아이디는 사용할 수 없습니다.'
            IsidGuidText = false
        }
        else if(state.아이디중복.includes(아이디)===true){
            idGuidText = `{${아이디}는 사용 불가능한 아이디입니다.}`;
            IsidGuidText = false
        }
        else{
            idGuidText = `{${아이디}는 사용 가능한 아이디입니다.}`;
            IsidGuidText = true

        }
        setState({
            ...state,
            아이디: 아이디,
            idGuidText: idGuidText,
            IsidGuidText:IsidGuidText
        });
    }


    const onChangePw1=(e)=>{
        setState({
            ...state,
            비밀번호: e.target.value
        });
    }

    const onFocusPw1=(e)=>{
        setState({
            ...state,
            isPw1Guid:true
        })
    }

    const onBlurPw1=(e)=>{
        setState({
            ...state,
            isPw1Guid:false
        })
    }
    const onChangePw2=(e)=>{
        let Pw2GuidText='';
        if(state.비밀번호 !== e.target.value){
            Pw2GuidText='비밀번호가 일치하지 않습니다.'
        }
        else{
            Pw2GuidText=''
        }
        setState({
            ...state,
            비밀번호확인:e.target.value,
            Pw2GuidText:Pw2GuidText
        })
    }
    const onChangeName=(e)=>{
        setState({
            ...state,
            이름:e.target.value
        })
    }
    const onChangeAddress=(e)=>{
        setState({
            ...state,
            주소2:e.target.value
        })
    }
    const onClickAddress=(e)=>{
        e.preventDefault();
        dispatch(isAddress(true))
    }
    const onChangeHp1=(e)=>{
        setState({
            ...state,
            일반전화:e.target.value
        })
    }
    const onChangeHp2=(e)=>{

        setState({
            ...state,
            휴대전화:e.target.value
        })
    }
    const onChangeEmail=(e)=>{
        const {value} = e.target;
        let emailGuidText = '';
        let IsEmailGuidText = false
        const regexp = /^[A-Za-z0-9가-힣ㄱ-ㅎㅏ-ㅣ`~!#$%^&*\-_=+{}|'?]+((\.)?[A-Za-z가-힣ㄱ-ㅎㅏ-ㅣ0-9`~!#$%^&*\-_=+{}|'?]+)*@[A-Za-z가-힣ㄱ-ㅎㅏ-ㅣ0-9`~!#$%^&*\-_=+{}|'?.]+((\.)?[A-Za-z가-힣ㄱ-ㅎㅏ-ㅣ0-9`~!#$%^&*\-_=+{}|'?.]+)*\.[A-Za-z가-힣ㄱ-ㅎㅏ-ㅣ0-9`~!#$%^&*\-_=+{}|'?]+$/g;

        if(regexp.test(value)===false){
            emailGuidText ='유효한 이메일을 입력해주세요.';
            IsEmailGuidText = false
        }
        else if(state.이메일중복.includes(value)===true){
            emailGuidText = `{${value}는 사용 불가능한 이메일입니다.}`;
            IsEmailGuidText = false
        }
        else {
            emailGuidText ='사용 가능한 이메일 입니다.';
            IsEmailGuidText = true
        }

        setState({
            ...state,
            이메일: value,
            emailGuidText: emailGuidText,
            IsEmailGuidText:IsEmailGuidText
        });
    }
    const onChangeGender=(e)=>{
        setState({
            ...state,
            성별:e.target.value
        })
    }
    const onChangeYear=(e)=>{
        const regExp = /[^0-9]/g;
        let 생년 = e.target.value.replace(regExp, '');
        setState({
            ...state,
            생년:생년
        })
    }
    const onChangeMonth=(e)=>{
        const regExp = /[^0-9]/g;
        let 생월 = e.target.value.replace(regExp, '');
        setState({
            ...state,
            생월:생월
        })
    }
    const onChangeDate=(e)=>{
        const regExp = /[^0-9]/g;
        let 생일 = e.target.value.replace(regExp, '');
        setState({
            ...state,
            생일:생일
        })
    }
    const onChangeYearTime=(e)=>{
        setState({
            ...state,
            양음력:e.target.value
        })
    }
    const onChangeRegion=(e)=>{
        setState({
            ...state,
            지역:e.target.value
        })
    }
    const onChangeServiceAllCheck=(e)=>{
        let 이용약관동의 = [];
        if(e.target.checked===true){
            이용약관동의 = state.이용약관;
        }
        else{
            이용약관동의 = []; //빈배열
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
    
    const onSubmitForm=(e)=>{
        e.preventDefault();
        let cnt = 0;
        const regexpId1 = /[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]/g;
        const regexpId2 = /[A-Z]/g;
        const regexpId3 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g;
        const regexpId4 = /\s/g;
        const regexpId5 = /^(.){4,16}$/g;
        const regexpId6 = /^[0-9]/g;
        const regexpId7 = /[^0-9]/g;
        const regexpPw1 = /^(.){10,16}$/g;
        const regexpPw2 = /((?=.*[A-Za-z])+(?=.*[0-9])+)|((?=.*[A-Za-z])+(?=.*[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?])+)|((?=.*[0-9])+(?=.*[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?])+)/g;
        const regexpPw3 = /\s/g;
        const regexpPw4 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g;
        const regexpPw5 = /(\d)\1\1/g;  
        const regexpPw6 = /([A-Za-z])\1\1/g;  
        const regexpEmail = /^[A-Za-z0-9가-힣ㄱ-ㅎㅏ-ㅣ`~!#$%^&*\-_=+{}|'?]+((\.)?[A-Za-z가-힣ㄱ-ㅎㅏ-ㅣ0-9`~!#$%^&*\-_=+{}|'?]+)*@[A-Za-z가-힣ㄱ-ㅎㅏ-ㅣ0-9`~!#$%^&*\-_=+{}|'?.]+((\.)?[A-Za-z가-힣ㄱ-ㅎㅏ-ㅣ0-9`~!#$%^&*\-_=+{}|'?.]+)*\.[A-Za-z가-힣ㄱ-ㅎㅏ-ㅣ0-9`~!#$%^&*\-_=+{}|'?]+$/g;

        

        state.이용약관동의.map((item)=>{
            if(item.includes('필수')){
                cnt++;
            }
        });
        if(state.아이디===''){
            alert('아이디를 입력해주세요');
        }
        else if(regexpId5.test(state.아이디)===false){
            alert('아이디는 영문소문자 또는 숫자 4~16자로 입력해 주세요.')
        }
        else if(regexpId1.test(state.아이디)===true || regexpId2.test(state.아이디)===true || regexpId3.test(state.아이디)===true || regexpId4.test(state.아이디)===true || regexpId6.test(state.아이디)===true || regexpId7.test(state.아이디)===false){
            alert('대문자/공백/특수문자가 포함되었거나, 숫자로 시작 또는 숫자로만 이루어진 아이디는 사용할 수 없습니다.')
        }
        else if(state.아이디중복.includes(state.아이디)===true){
            alert('이미 가입된 아이디입니다.')
        }
        else if(state.비밀번호===''){
            alert('비밀번호를 입력하세요');
        }
        else if(regexpPw1.test(state.비밀번호)===false || regexpPw2.test(state.비밀번호)===false || regexpPw3.test(state.비밀번호)===true || regexpPw4.test(state.비밀번호)===true || regexpPw5.test(state.비밀번호)===true || regexpPw6.test(state.비밀번호)===true ){
            alert("비밀번호 형식을 다시 한번 확인해 주세요.")
        }
        else if(state.비밀번호 !== state.비밀번호확인){
            alert('비밀번호가 일치하지 않습니다.');
        }        
        else if(state.이름===''){
            alert('이름을 입력하세요');
        }
        else if(state.주소1===''){
            alert('주소를 검색 해주세요');
        }
        else if(state.일반전화===''){
            alert('휴대폰 번호를 입력하세요');
        }  
        else if(state.휴대전화===''){
            alert('휴대폰 번호를 입력하세요');
        }  
        else if(state.이메일===''){
            alert('이메일을 입력하세요');
        }
        else if(state.이메일중복.includes(state.이메일)===true){
            alert('이미 가입된 이메일입니다.');
        }
        else if(regexpEmail.test(state.이메일)===false){
            alert('유효한 이메일을 입력해주세요.');
        }        
        else if(state.성별===''){
            alert('성별을 입력하세요');
        }        
        else if(state.생년===''){
            alert('생년을 입력하세요');
        }        
        else if(state.생월===''){
            alert('생월을 입력하세요');
        }        
        else if(state.생일===''){
            alert('생일을 입력하세요');
        }        
        else if(state.지역===''){
            alert('지역을 입력하세요');
        }            
        else if(cnt < 2){
            alert('이용약관동의 필수 항목을 선택 해주세요');
        }
        else { 
            const formData = new FormData(); 
            formData.append('userId',       state.아이디);
            formData.append('userPw',       state.비밀번호);
            formData.append('userName',     state.이름);
            formData.append('userEmail',    state.이메일);
            formData.append('userHp',       state.휴대전화);
            formData.append('userAddress',  `${state.주소1} ${state.주소2}`);
            formData.append('userBirth',  `${state.생년}-${state.생월}-${state.생일}`);
            formData.append('userGender',   state.성별);
            formData.append('userService',  state.이용약관동의);
            axios({
                url: 'https://answotlr12.dothome.co.kr/hangten/hangten_insert.php',
                method: 'POST',
                data: formData  
            })
            .then((res)=>{
                console.log(res)
                console.log(res.data)
                if(res.status===200){  
                    if(res.data===1){
                        navigate('/sub7SignUpOk',{
                            state:{
                                아이디:state.아이디,
                                이름:state.이름,
                                이메일:state.이메일
                            }   
                        })                         
                    }   
                    else if(res.data===0){ 
                        alert('확인하고 다시 시도해주세요');
                    }
                }                              
            })
            .catch((err)=>{
                console.log(`AXIOS 전송 실패! ${err} `);
            });
        }
    }
    const onClickHp=(e)=>{
        e.preventDefault();
        dispatch(hpconfirmModal(true));
    }

    
    return (
        <div className='container'>
            <div className="tilte-box">
                <h2>회원가입</h2>
                <p>회원가입하시면 편리하게 쇼핑하실 수 있습니다</p>
            </div>
            <div className="member">
                <ul>
                    <li className='list1'>
                        <div className="list-box">
                            <div className="left-box">
                                <label htmlFor="userMemder"><span>회원구분</span><img src="./images/sub/sub7/sub7_signUp_icon.gif" alt="" /></label>
                            </div>
                            <div className="input-box">
                                <input 
                                    type="radio" 
                                    name='userMemder' 
                                    id='userMemder' 
                                    value={'개인회원'}
                                    checked={'개인회원'}
                                />
                                <p>개인회원</p>
                            </div>
                        </div>
                    </li>
                    <li className='list2'>
                        <div className="list-box">
                            <div className="left-box">
                                <label htmlFor="userHpAthen"><span>회원인증</span><img src="./images/sub/sub7/sub7_signUp_icon.gif" alt="" /></label>
                            </div>
                            <div className="input-box">
                                <div className="input">
                                    <input 
                                        type="radio" 
                                        name='userHpAthen' 
                                        id='userHpAthen' 
                                        value={'휴대폰인증'}
                                        checked={'휴대폰인증'}
                                    />
                                    <p>휴대폰인증</p>
                                </div>
                                <div className="button-box">
                                    <button onClick={onClickHp}>
                                        휴대폰 인증
                                    </button>
                                    <span>본인 명의의 휴대폰으로 본인인증을 진행합니다.</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        <form onSubmit={onSubmitForm}>
            <div className="signUp-box">
                <div className="signUp-title">
                    <h3>기본정보</h3>
                    <p><img src="./images/sub/sub7/sub7_signUp_icon.gif" alt="" /> 필수입력사항</p>
                </div>
                <div className="form">
                    <ul>
                        <li>
                            <div className="list-box">
                                <div className="left-box">
                                    <label htmlFor="userId"><span>아이디</span><img src="./images/sub/sub7/sub7_signUp_icon.gif" alt="" /></label>
                                </div>
                                <div className="input-box">
                                    <input 
                                        autoComplete='none'
                                        type="text" 
                                        name='userId' 
                                        id='userId' 
                                        onChange={onChangeId}
                                        value={state.아이디}
                                    />
                                    <p className={`guid-text ${state.IsidGuidText===true?'on':''}`}>{state.idGuidText} </p>
                                    <span>  (영문소문자/숫자, 4~16자)</span>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="list-box">
                                <div className="left-box">
                                    <label htmlFor="userPw1"><span>비밀번호</span><img src="./images/sub/sub7/sub7_signUp_icon.gif" alt="" /></label>
                                </div>
                                <div className="input-box">
                                    { state.isPw1Guid &&
                                        <div className="pwguid">
                                            <div className="title">
                                                <h2>※ 비밀번호 입력 조건</h2>
                                            </div>
                                            <div className="text-pw">
                                                <strong className='span-pw'>-대소문자/숫자/특수문자/ 중 2가지 이상 조합,10지~16자</strong>
                                                <strong className='span-pw'>-입력 가능 특수문자</strong>
                                                <strong className='span-pw'>~`!@#$^()*_-={}[]\;:<>,.''/</></strong>
                                                <strong className='span-pw'>-공백 입력 불가능</strong>
                                                <strong className='span-pw'>-연속된 문자,숫자를 사용 불가능</strong>
                                                <strong className='span-pw'>-동일한 문자,숫자를 반복해서 사용 불가능</strong>
                                                <strong className='span-pw'>-아이디 포함 불가능</strong>
                                                <div className='exit'>
                                                    <img src="./images/sub/sub7/x_icon.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    <input 
                                    autoComplete='none'
                                        type="password" 
                                        name='userPw1' 
                                        id='userPw1' 
                                        onChange={onChangePw1}
                                        onFocus={onFocusPw1}
                                        onBlur={onBlurPw1}
                                        value={state.비밀번호}
                                        maxLength={16}
                                    />
                                    <span>(영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10자~16자)</span>
                                </div>
                            </div>

                        </li>

                        <li>
                            <div className="list-box">
                                <div className="left-box">
                                    <label htmlFor="userPw2"><span>비밀번호 확인</span><img src="./images/sub/sub7/sub7_signUp_icon.gif" alt="" /></label>
                                </div>
                                <div className="input-box">
                                    <input 
                                    autoComplete='none'
                                        type="password" 
                                        name='userPw2' 
                                        id='userPw2' 
                                        onChange={onChangePw2}
                                        value={state.비밀번호확인}
                                        maxLength={16}
                                    />
                                    <p className='guid-text'>{state.Pw2GuidText}</p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="list-box">
                                <div className="left-box">
                                    <label htmlFor="userName"><span>이름</span><img src="./images/sub/sub7/sub7_signUp_icon.gif" alt="" /></label>
                                </div>
                                <div className="input-box">
                                    <input 
                                    autoComplete='none'
                                        type="text" 
                                        name='userName' 
                                        id='userName' 
                                        onChange={onChangeName}
                                        value={state.이름}
                                    />
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="list-box">
                                <div className="left-box">
                                    <label htmlFor="userAddress"><span>주소</span><img src="./images/sub/sub7/sub7_signUp_icon.gif" alt="" /></label>
                                </div>
                                <div className="input-box-address">
                                    <ul>
                                        <li>
                                            <input 
                                                autoComplete='none'
                                                type="text" 
                                                name='userAddress' 
                                                id='userAddress'
                                                className='address1' 
                                                value={state.우편번호}
                                                placeholder='우편번호'
                                            />
                                            <button onClick={onClickAddress}>주소검색</button>
                                        </li>
                                        <li>
                                            <input 
                                            autoComplete='none'
                                                type="text"
                                                className='address2' 
                                                name='userAddress' 
                                                id='userAddress' 
                                                value={state.주소1}
                                                placeholder='기본주소'
                                            />
                                        </li>
                                        <li>
                                            <input 
                                            autoComplete='none'
                                                type="text" 
                                                className='address3'
                                                name='userAddress' 
                                                id='userAddress' 
                                                placeholder='나머지 주소(선택 입력 가능)'
                                                onChange={onChangeAddress}
                                                value={state.주소2}
                                            />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="list-box">
                                <div className="left-box">
                                    <label htmlFor="userHp1"><span>일반전화</span></label>
                                </div>
                                <div className="input-box">
                                    <input 
                                    autoComplete='none'
                                        type="text" 
                                        name='userHp1' 
                                        id='userHp1' 
                                        onChange={onChangeHp1}
                                        value={state.일반전화}
                                        maxLength={10}
                                    />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="list-box">
                                <div className="left-box">
                                    <label htmlFor="userHp2"><span>휴대전화</span><img src="./images/sub/sub7/sub7_signUp_icon.gif" alt="" /></label>
                                </div>
                                <div className="input-box">
                                    <input 
                                    autoComplete='none'
                                        type="text" 
                                        name='userHp2' 
                                        id='userHp2' 
                                        onChange={onChangeHp2}
                                        value={state.휴대전화}
                                        maxLength={11}
                                    />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="list-box">
                                <div className="left-box">
                                    <label htmlFor="userEmail"><span>이메일</span><img src="./images/sub/sub7/sub7_signUp_icon.gif" alt="" /></label>
                                </div>
                                <div className="input-box">
                                    <input 
                                    autoComplete='none'
                                        type="text" 
                                        name='userEmail' 
                                        id='userEmail' 
                                        onChange={onChangeEmail}
                                        value={state.이메일}
                                    />
                                    <p className={`guid-text ${state.IsEmailGuidText===true?'on':''}`}>{state.emailGuidText}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="choga-box">
                <h3>추가정보</h3>
                <div className="form">
                    <ul>
                        <li>
                            <div className="list-box">
                                <div className="left-box">
                                    <label htmlFor="userGender"><span>성별</span><img src="./images/sub/sub7/sub7_signUp_icon.gif" alt="" /></label>
                                </div>
                                <div className="input-box">
                                    <label htmlFor="userMale">
                                        <input 
                                            type="radio"   
                                            name='userGender' 
                                            id='userMale' 
                                            value={'남자'} 
                                            onChange={onChangeGender}
                                            checked={state.성별.includes('남자')}
                                        />
                                        <i>남자</i>
                                    </label>
                                    <label htmlFor="userFemale">
                                        <input 
                                            type="radio"  
                                            name='userGender' 
                                            id='userFemale' 
                                            value={'여자'} 
                                            onChange={onChangeGender}
                                            checked={state.성별.includes('여자')}
                                        />
                                        <i>여자</i>
                                    </label>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="list-box">
                                <div className="left-box">
                                    <label htmlFor="userPw1"><span>생년월일</span><img src="./images/sub/sub7/sub7_signUp_icon.gif" alt="" /></label>
                                </div>
                                <div className="input-box">
                                    <ul>
                                        <li>
                                            <input 
                                                autoComplete='none'
                                                type="text" 
                                                className='Year'
                                                maxLength={4}   
                                                name='userYear' 
                                                id='userYear' 
                                                value={state.생년}  
                                                onChange={onChangeYear}
                                            />
                                            <p>년</p>
                                        </li>
                                        <li>
                                            <input 
                                                autoComplete='none'
                                                type="text" 
                                                className='Month'
                                                maxLength={2}  
                                                name='userMonth' 
                                                id='userMonth' 
                                                value={state.생월} 
                                                onChange={onChangeMonth}
                                            />
                                            <p>월</p>
                                        </li>
                                        <li>
                                            <input 
                                                autoComplete='none'
                                                type="text" 
                                                className='Date'
                                                maxLength={2}  
                                                name='userDate' 
                                                id='userDate' 
                                                value={state.생일} 
                                                onChange={onChangeDate}
                                            />
                                            <p>일</p>
                                        </li>
                                        <label htmlFor="userYearTime">
                                            <input 
                                                type="radio"   
                                                name='userYearSun' 
                                                id='userYearTime' 
                                                value={'양력'} 
                                                onChange={onChangeYearTime}
                                                checked={state.양음력.includes('양력')}
                                            />
                                            <i>양력</i>
                                        </label>
                                        <label htmlFor="userYearTime">
                                            <input 
                                                type="radio"   
                                                name='userYearMoon' 
                                                id='userYearTime' 
                                                value={'음력'} 
                                                onChange={onChangeYearTime}
                                                checked={state.양음력.includes('음력')}
                                            />
                                            <i>음력</i>
                                        </label>
                                    </ul>    
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="list-box">
                                <div className="left-box">
                                    <label htmlFor="userRegion"><span>지역</span><img src="./images/sub/sub7/sub7_signUp_icon.gif" alt="" /></label>
                                </div>
                                <div className="input-box">
                                    <select name="userRegion" onChange={onChangeRegion}>
                                        <option value="">선택</option>
                                        <option value='경기'>경기</option>
                                        <option value='서울'>서울</option>
                                        <option value='인천'>인천</option>
                                        <option value='강원'>강원</option>
                                        <option value='충남'>충남</option>
                                        <option value='충복'>충북</option>
                                        <option value='경북'>경북</option>
                                        <option value='경남'>경남</option>
                                        <option value='대구'>대구</option>
                                        <option value='부산'>부산</option>
                                        <option value='울산'>울산</option>
                                        <option value='전북'>전북</option>
                                        <option value='전남'>전남</option>
                                        <option value='광주'>광주</option>
                                        <option value='세종'>세종</option>
                                        <option value='제주'>제주</option>
                                        <option value='해외'>해외</option>
                                    </select>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="button-box">
                <button>회원가입</button>
            </div>
            <div className="agree-box">
                    <label htmlFor="userServiceAll">
                        <input 
                            type="checkbox"   
                            name='userServiceAll' 
                            id='userServiceAll' 
                            value={'전체 약관 동의'} 
                            onChange={onChangeServiceAllCheck}
                            checked={state.이용약관동의.length===5}
                        />
                        <span>전체 약관 동의</span>
                    </label>
            </div>
            <div className="agree-text-box">
                <h3>[필수] 이용약관 동의</h3>
                <div className="text-box">
                    <div className="text">
                        <ul>
                            <li>제 1 조 ( 목적 )</li>
                            <li>이 약관은 브랜디드라이프스타일코리아(주) (전자상거래 사업자, 이하 “회사”라 함)가 운영하는 행텐 온라인몰(이하 “몰”이라 한다)에서 제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를 이용함에 있어 사이버 몰과 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다. ※ PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다.</li>    
                            <li>제 2 조 ( 정의 )</li>    
                            <li>① “몰”이란 회사가 재화 또는 용역(이하 “재화 등”이라 함)을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화 등을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 사이버몰을 운영하는 사업자의 의미로도 사용합니다.</li>    
                            <li>② “이용자”란 “몰”에 접속하여 이 약관에 따라 “몰”이 제공하는 서비스를 받는 회원 및 비회원을 말합니다.</li>    
                        </ul>
                    </div>
                </div>
                <div className="check-box">
                    <span>이용약관에 동의하십니까?</span>
                    <label htmlFor="userService1">
                        <input 
                            type="checkbox"   
                            name='userService1' 
                            id='userService1' 
                            value={'필수 동의함1'} 
                            onChange={onChangeService}
                            checked={state.이용약관동의.includes('필수 동의함1')}
                        />
                        <em>동의함</em>
                    </label>
                </div>
            </div>
            <div className="agree-text-box">
                <h3>[필수] 개인정보 수집 및 이용 동의</h3>
                <div className="text-box">
                    <div className="text">
                        <ul>
                            <li>제 1 조 ( 목적 )</li>
                            <li>이 약관은 브랜디드라이프스타일코리아(주) (전자상거래 사업자, 이하 “회사”라 함)가 운영하는 행텐 온라인몰(이하 “몰”이라 한다)에서 제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를 이용함에 있어 사이버 몰과 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다. ※ PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다.</li>    
                            <li>제 2 조 ( 정의 )</li>    
                            <li>① “몰”이란 회사가 재화 또는 용역(이하 “재화 등”이라 함)을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화 등을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 사이버몰을 운영하는 사업자의 의미로도 사용합니다.</li>    
                            <li>② “이용자”란 “몰”에 접속하여 이 약관에 따라 “몰”이 제공하는 서비스를 받는 회원 및 비회원을 말합니다.</li>    
                        </ul>
                    </div>
                </div>
                <div className="check-box">
                    <span>개인정보 수집 및 이용에 동의하십니까?</span>
                    <label htmlFor="userService2">
                        <input 
                            type="checkbox"   
                            name='userService2' 
                            id='userService2' 
                            value={'필수 동의함2'} 
                            onChange={onChangeService}
                            checked={state.이용약관동의.includes('필수 동의함2')}
                        />
                        <em>동의함</em>
                    </label>
                </div>
            </div>
            <div className="agree-text-box">
                <h3>[선택] 개인정보 처리 위탁 동의</h3>
                <div className="text-box">
                    <div className="text">
                        <ul>
                            <li>제 1 조 ( 목적 )</li>
                            <li>이 약관은 브랜디드라이프스타일코리아(주) (전자상거래 사업자, 이하 “회사”라 함)가 운영하는 행텐 온라인몰(이하 “몰”이라 한다)에서 제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를 이용함에 있어 사이버 몰과 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다. ※ PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다.</li>    
                            <li>제 2 조 ( 정의 )</li>    
                            <li>① “몰”이란 회사가 재화 또는 용역(이하 “재화 등”이라 함)을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화 등을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 사이버몰을 운영하는 사업자의 의미로도 사용합니다.</li>    
                            <li>② “이용자”란 “몰”에 접속하여 이 약관에 따라 “몰”이 제공하는 서비스를 받는 회원 및 비회원을 말합니다.</li>    
                        </ul>
                    </div>
                </div>
                <div className="check-box">
                    <span>개인정보 처리 위탁에 동의하십니까?</span>
                    <label htmlFor="userService3">
                        <input 
                            type="checkbox"   
                            name='userService3' 
                            id='userService3' 
                            value={'동의함3'} 
                            onChange={onChangeService}
                            checked={state.이용약관동의.includes('동의함3')}
                        />
                        <em>동의함</em>
                    </label>
                </div>
            </div>
            <div className="agree-text-box">
                <h3>[선택] 쇼핑정보 수신 동의</h3>
                <div className="text-box">
                    <div className="text">
                        <ul>
                            <li>제 1 조 ( 목적 )</li>
                            <li>이 약관은 브랜디드라이프스타일코리아(주) (전자상거래 사업자, 이하 “회사”라 함)가 운영하는 행텐 온라인몰(이하 “몰”이라 한다)에서 제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를 이용함에 있어 사이버 몰과 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다. ※ PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다.</li>    
                            <li>제 2 조 ( 정의 )</li>    
                            <li>① “몰”이란 회사가 재화 또는 용역(이하 “재화 등”이라 함)을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화 등을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 사이버몰을 운영하는 사업자의 의미로도 사용합니다.</li>    
                            <li>② “이용자”란 “몰”에 접속하여 이 약관에 따라 “몰”이 제공하는 서비스를 받는 회원 및 비회원을 말합니다.</li>    
                        </ul>
                    </div>
                </div>
                <div className="check-box">
                    <div className="label1"> 
                        <span>SMS 수신을 동의하십니까?</span>
                        <label htmlFor="userService4">
                            <input 
                                type="checkbox"   
                                name='userService4' 
                                id='userService4' 
                                value={'동의함4'} 
                                onChange={onChangeService}
                                checked={state.이용약관동의.includes('동의함4')}
                            />
                            <em>동의함</em>
                        </label>
                    </div>
                    <div className="label2">
                        <span>이메일 수신을 동의하십니까?</span>
                        <label htmlFor="userService5">
                            <input 
                                type="checkbox"   
                                name='userService5' 
                                id='userService5' 
                                value={'동의함5'} 
                                onChange={onChangeService}
                                checked={state.이용약관동의.includes('동의함5')}
                            />
                            <em>동의함</em>
                        </label>
                    </div>

                </div>
            </div>
        </form>
        
        </div>
    );
};
