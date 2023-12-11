import React from 'react';
import '../sub/scss/sub7AdminSignUp.scss'
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import { isAddress } from '../../reducer/isAddress';
import { useNavigate,useLocation } from 'react-router-dom';
import { hpconfirmModal } from '../../reducer/hpConfirmModal';

export default function Sub7AdminSignUpComponent() {

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
        휴대전화:'',
        이메일:'',
        이메일중복:[],
        성별:'',
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
            url:'https://answotlr12.dothome.co.kr/hangten/hangten_admin_email_check.php',
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
        return;
    },[])

    React.useEffect(()=>{
        axios({
            url:'https://answotlr12.dothome.co.kr/hangten/hangten_admin_id_check.php',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                let 아이디중복 = state.아이디중복
                if(res.data.length>0){
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
    
    const onSubmitForm=(e)=>{
        e.preventDefault();
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
        else { 
            const formData = new FormData(); 
            formData.append('userId',       state.아이디);
            formData.append('userPw',       state.비밀번호);
            formData.append('userName',     state.이름);
            formData.append('userEmail',    state.이메일);
            formData.append('userHp',       state.휴대전화);
            formData.append('userAddress',  `${state.주소1} ${state.주소2}`);
            axios({
                url: 'https://answotlr12.dothome.co.kr/hangten/hangten_insert_admin.php',
                method: 'POST',
                data: formData  
            })
            .then((res)=>{
                console.log(res)
                console.log(res.data)
                if(res.status===200){  
                    if(res.data===1){
                        navigate('/index')                       
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
        <div id="sub7AdminSignUp">
            <div className='container'>
                <div className="tilte-box">
                    <h2>관리자 회원가입</h2>
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
                                        value={'관리자'}
                                        checked={'관리자'}
                                    />
                                    <p>관리자</p>
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
                                            className='name'
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
                        </ul>
                    </div>

                </div>

                <div className="button-box">
                    <button>회원가입</button>
                </div>
            </form>
            
            </div>
        </div>

    );
};
