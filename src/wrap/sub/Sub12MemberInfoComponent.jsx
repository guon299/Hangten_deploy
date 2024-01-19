import React from 'react';
import './scss/sub12.scss';
import './scss/sub12MemberInfo.scss';
import Sub12LeftBoxComponent from './Sub12LeftBoxComponent.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isAddress } from '../../reducer/isAddress';
import { signIn } from '../../reducer/signIn';
import { signUpConfirmModal } from '../../reducer/signUpConfirmModal';
import axios from 'axios';


export default function Sub12MemberInfoComponent() {

    const selector = useSelector((state)=>state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [state,setState] = React.useState({
        아이디: '',
        비밀번호:'',
        비밀번호확인:'',
        이름: '',
        우편번호:'',
        주소1:'',
        주소2:'',
        일반전화: '',
        휴대전화: '',
        이메일: '',
        이메일중복:[],
        성별: '',
        생년:'',
        생월:'',
        생일:'',
        양음력:'',
        지역:'',
        SMS수신여부: '',
        이메일수신여부: '',
        이용약관동의:[],
    });

    const [guide, setGuide] = React.useState({
        idGuidText:'',
        IsidGuidText:false,
        Pw2GuidText:'',
        Hp2GuideText: '',
        emailGuidText:'',
        IsEmailGuidText:false,
        isPw1Guid:false
    });

    React.useEffect(()=>{
        if(selector.signIn.로그인정보!==null){
            let formData = new FormData();
            formData.append('userId', selector.signIn.로그인정보.아이디);
            axios({
                url:'http://kkoma1221.dothome.co.kr/hangten/hangten_user_info_select.php',
                method: 'POST',
                data: formData
            })
            .then((res)=>{
                if(res.status===200){
                    console.log(res.data);
                    setState({
                        ...state,
                        아이디: selector.signIn.로그인정보.아이디,
                        이름: res.data.이름,
                        휴대전화: res.data.휴대폰,
                        이메일: res.data.이메일,
                        성별: res.data.성별,
                        이용약관동의: res.data.이용약관동의.split(','),
                        SMS수신여부: res.data.이용약관동의.includes('동의함4')?'수신함':'수신안함',
                        이메일수신여부: res.data.이용약관동의.includes('동의함5')?'수신함':'수신안함',
                        생년: res.data.생년월일.split('-')[0],
                        생월: res.data.생년월일.split('-')[1],
                        생일: res.data.생년월일.split('-')[2],
                        우편번호: selector.address.zonecode,
                        주소1: selector.address.주소1!==''?(selector.address.주소1):(res.data.주소.split(')')[0]),
                        주소2: res.data.주소.split(')')[1]===undefined?'':res.data.주소.split(')')[1]
                    });
                }
            })
            .catch((err)=>{
                console.log(err);
            })

        }
    },[selector.signIn, selector.address.주소1]);

    const onChangePw1=(e)=>{
        setState({
            ...state,
            비밀번호: e.target.value
        });
    }

    const onFocusPw1=(e)=>{
        setGuide({
            ...guide,
            isPw1Guid: true
        })
    }

    const onBlurPw1=(e)=>{
        setGuide({
            ...guide,
            isPw1Guid: false
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
            비밀번호확인: e.target.value,
        })
        setGuide({
            ...guide,
            Pw2GuidText: Pw2GuidText
        });
    }

    const onClickAddress=(e)=>{
        e.preventDefault();
        dispatch(isAddress(true));
    }

    const onChangeAddress=(e)=>{
        setState({
            ...state,
            주소2: e.target.value
        })
    }

    const onChangeHp2=(e)=>{
        let Hp2GuideText = '';
        if(state.휴대전화===''){
            Hp2GuideText = '휴대폰 번호를 입력하세요.'
        }
        setState({
            ...state,
            휴대전화: e.target.value,
        });
        setGuide({
            ...guide,
            Hp2GuideText: Hp2GuideText
        });
    }

    const onChangeGender=(e)=>{
        setState({
            ...state,
            성별: e.target.value
        });
    }

    const onChangeYear=(e)=>{
        setState({
            ...state,
            생년: e.target.value
        });
    }

    const onChangeMonth=(e)=>{
        setState({
            ...state,
            생월: e.target.value
        });
    }

    const onChangeDate=(e)=>{
        setState({
            ...state,
            생일: e.target.value
        });
    }

    const onChangeSMS=(e)=>{
        setState({
            ...state,
            SMS수신여부: e.target.value
        });
    }
    React.useMemo(()=>{
        let 이용약관동의 = state.이용약관동의;
        if(state.SMS수신여부==='수신함'){
            이용약관동의 = [...state.이용약관동의, '동의함4'];
        }
        else if(state.SMS수신여부==='수신안함'){
            이용약관동의 = 이용약관동의.filter((item)=>item !== '동의함4');
        }
        setState({
            ...state,
            이용약관동의: 이용약관동의
        });
    },[state.SMS수신여부]);

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
        });
        setGuide({
            ...guide,
            emailGuidText: emailGuidText,
            IsEmailGuidText: IsEmailGuidText
        });
    }

    const onChangeEmailService=(e)=>{
        setState({
            ...state,
            이메일수신여부: e.target.value
        });
    }

    React.useMemo(()=>{
        let 이용약관동의 = state.이용약관동의;
        if(state.이메일수신여부==='수신함'){
            이용약관동의 = [...state.이용약관동의, '동의함5'];
        }
        else if(state.이메일수신여부==='수신안함'){
            이용약관동의 = 이용약관동의.filter((item)=> item !== '동의함5');
        }
        setState({
            ...state,
            이용약관동의: 이용약관동의
        });
    },[state.이메일수신여부]);

    const onChangeService=(e)=>{
        let 이용약관동의 = state.이용약관동의;
        //console.log(selector.signIn.로그인정보.이용약관동의);
        if(e.target.checked===true){
            // console.log((state.이용약관동의));
            이용약관동의 = [...state.이용약관동의, e.target.value]
        }
        else {
            이용약관동의 = 이용약관동의.filter((item)=>item !== e.target.value);
        }
        // console.log(state.이용약관동의);
        setState({
            ...state,
            이용약관동의: 이용약관동의
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

    const onSubmitMemberInfoUpdate=(e)=>{
        e.preventDefault();
        if(state.비밀번호==='' || state.비밀번호확인===''){
            SignUpConfirmModalMethod('비밀번호 항목은 필수 입력값입니다.');
        }
        else if(state.휴대전화===''){
            SignUpConfirmModalMethod('올바른 휴대전화번호를 입력하세요.');
        }
        else if(state.이메일===''){
            SignUpConfirmModalMethod('이메일을 입력하세요.');
        }
        else if(state.생년==='' || state.생월==='' || state.생일===''){
            SignUpConfirmModalMethod('생년월일 항목은 필수 입력값입니다.');
        }
        else {
            let formData = new FormData();
            formData.append('userId', state.아이디);
            formData.append('userPw', state.비밀번호);
            formData.append('userName', state.이름);
            formData.append('userAddress', `${state.주소1}) ${state.주소2}`);
            formData.append('userHp', state.휴대전화);
            formData.append('userEmail', state.이메일);
            formData.append('userGender', state.성별);
            formData.append('userBirth', `${state.생년}-${state.생월}-${state.생일}`);
            formData.append('userService', state.이용약관동의);
            axios({
                url: 'http://kkoma1221.dothome.co.kr/hangten/hangten_user_info_update.php',
                method: 'POST',
                data: formData
            })
            .then((res)=>{
                if(res.status===200){
                    console.log(res.data);
                    if(res.data !== ''){
                        SignUpConfirmModalMethod('회원정보를 수정하시겠습니까?');
                    }
                    else if(res.data === ''){
                        SignUpConfirmModalMethod('회원정보를 수정하는데 실패하였습니다. 확인하고 다시 시도하세요.');
                    }
                }
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    }

    const onClickCancelBtn=(e)=>{
        e.preventDefault();
        navigate('/index');
    }

    const onClickByeBtn=(e)=>{
        e.preventDefault();
        let formData = new FormData();
        formData.append('userId', state.아이디);
        formData.append('userName', state.이름);
        axios({
            url:'http://kkoma1221.dothome.co.kr/hangten/hangten_user_table_delete.php',
            method: 'POST',
            data: formData
        })
        .then((res)=>{
            if(res.status===200){
                // console.log(res.data);
                SignUpConfirmModalMethod('회원 탈퇴 하시겠습니까?');
                sessionStorage.removeItem('HANGTEN_SIGNIN_INFORMATION');
                dispatch(signIn(null));
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return (
        <div id='memberInfo' className='myPage'>
            <section id='sectionSub10Info' className='section'>
                <div className="container">
                    <div className="content">
                        <Sub12LeftBoxComponent />
                        <div className="right-box">
                            <div className="title">
                                <h2>회원 정보</h2>
                                <p>회원정보를 최신 정보로 유지하시면 편리한 쇼핑을 즐기실 수 있습니다</p>
                            </div>
                            <div className="personal-info">
                                <div className="gap">
                                    <div className="image-box">
                                        <img src="./images/sub/sub8/img_member_default.gif" alt="" />
                                    </div>
                                    <div className="info-box">
                                        <h2>저희 쇼핑몰을 이용해 주셔서 감사합니다. <em>이사랑</em> 님은 <strong>[FAN회원]</strong> 회원이십니다.</h2>
                                        <h2><em>0원 이상</em> 구매시 <em>2%</em>을 추가적립 받으실 수 있습니다. </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="info-update">
                                <form onSubmit={onSubmitMemberInfoUpdate}>
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
                                                                value={state.아이디}
                                                                disabled={true}
                                                            />
                                                            <span>(영문소문자/숫자, 4~16자)</span>
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
                                                            <p className='guid-text'>{guide.Pw2GuidText}</p>
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
                                                                value={state.이름}
                                                                disabled={true}
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
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <input 
                                                                    autoComplete='none'
                                                                        type="text" 
                                                                        className='address3'
                                                                        name='userAddress' 
                                                                        id='userAddress' 
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
                                                            <p className='guid-text'>{guide.Hp2GuideText}</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="list-box">
                                                        <div className="left-box">
                                                            <label htmlFor=""><span>SMS 수신여부</span><img src="./images/sub/sub7/sub7_signUp_icon.gif" alt="" /></label>
                                                        </div>
                                                        <div className="input-box radio">
                                                            <label htmlFor="smsYes">
                                                                <input
                                                                    type="radio"
                                                                    name='sms'
                                                                    id='smsYes'
                                                                    value={'수신함'}
                                                                    checked={state.SMS수신여부.includes('수신함')}
                                                                    onChange={onChangeSMS}/>
                                                            수신함</label>
                                                            <label htmlFor="smsNo">
                                                                <input
                                                                    type="radio"
                                                                    name='sms'
                                                                    id='smsNo'
                                                                    value={'수신안함'}
                                                                    checked={state.SMS수신여부.includes('수신안함')}
                                                                    onChange={onChangeSMS}    
                                                                />
                                                            수신안함</label>
                                                            <p>쇼핑몰에서 제공하는 유익한 이벤트 소식을 SMS로 받으실 수 있습니다.</p>
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
                                                <li>
                                                    <div className="list-box">
                                                        <div className="left-box">
                                                            <label htmlFor=""><span>이메일 수신여부</span><img src="./images/sub/sub7/sub7_signUp_icon.gif" alt="" /></label>
                                                        </div>
                                                        <div className="input-box radio">
                                                            <label htmlFor="emailYes">
                                                                <input
                                                                    type="radio"
                                                                    name='email'
                                                                    id='emailYes'
                                                                    value={'수신함'}
                                                                    checked={state.이메일수신여부.includes('수신함')}
                                                                    onChange={onChangeEmailService}
                                                                />수신함</label>
                                                            <label htmlFor="emailNo">
                                                                <input
                                                                    type="radio"
                                                                    name='email'
                                                                    id='emailNo'
                                                                    value={'수신안함'}
                                                                    checked={state.이메일수신여부.includes('수신안함')}
                                                                    onChange={onChangeEmailService}
                                                                />수신안함</label>
                                                            <p>쇼핑몰에서 제공하는 유익한 이벤트 소식을 이메일로 받으실 수 있습니다.</p>
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
                                                            </ul>    
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                    <div className="agree-text-box">
                                        <h3>개인정보 제3자 제공 동의(선택)</h3>
                                        <div className="text-box">
                                            <div className="text">
                                                <ul>
                                                    <li>아래 내용의 동의 여부는 회원가입에 영향을 미치지 않습니다. 단, 동의 거부시 서비스 이용에 제한이 있을 수 있습니다.</li>
                                                    <li>- 제공 받는 자 : ㈜롯데 / 한진택배</li>    
                                                    <li>- 제공 항목 : 주문자 성명, 주소, 전화번호, 수하인 성명, 주소, 전화번호.</li>    
                                                    <li>- 제공 목적 :상품배송</li>    
                                                    <li>-------------------------------------------------------------------------</li>    
                                                    <li>- 제공 받는 자 :  현대HCN</li>    
                                                    <li>- 제공 항목 : 전화번호</li>    
                                                    <li>- 제공 목적 : 문자메세지 송신</li>    
                                                    <li>-------------------------------------------------------------------------</li>    
                                                    <li>- 제공 받는 자 :  나이스정보통신주식회사</li>    
                                                    <li>- 제공 항목 : 이용자의 성명(가맹점의 경우, 대표자명 및 담당자명), 생년월일, 휴대폰번호(가맹점의 경우 대표자 휴대폰번호 및 담당자 휴대폰번호), 고유식별정보, 전화번호, E-mail주소(가맹점의 경우 대표자 E-mail주소 및 담당자 E-mail주소), 상호명, 사업자번호(법인번호), 업종 및 업태, 쇼핑몰URL, 사업장주소, 대표번호, 팩스번호, 거래대금지급정보(결제은행, 계좌번호, 계좌명) 및 상품 또는 용역 거래정보 등</li>    
                                                    <li>- 제공 목적 : 결제, 구매안전서비스 제공 등</li>    
                                                    <li>-------------------------------------------------------------------------</li>    
                                                    <li>- 제공 받는 자 :  NHN한국사이버결제</li>    
                                                    <li>- 제공 항목 : 이용자의 성명(가맹점의 경우, 대표자명 및 담당자명), 생년월일, 휴대폰번호(가맹점의 경우 대표자 휴대폰번호 및 담당자 휴대폰번호), 고유식별정보, 기타 개인정보 등</li>    
                                                    <li>- 제공 목적 : 실명확인, 본인인증</li>    
                                                    <li>-------------------------------------------------------------------------</li>    
                                                    <li>- 제공 받는 자 :  번정실업</li>    
                                                    <li>- 제공 항목 : 주문자 성명, 전화번호</li>    
                                                    <li>- 제공 목적 : 상품 수선</li>    
                                                    <li>-------------------------------------------------------------------------</li>    
                                                    <li>- 제공 받는 자 :  (주)홍주의류완성</li>    
                                                    <li>- 제공 항목 : 주문자 성명, 전화번호</li>    
                                                    <li>- 제공 목적 : 상품 수선</li>       
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="check-box">
                                            <span>개인정보 제3자 제공에 동의하십니까?</span>
                                            <label htmlFor="userService6">
                                                <input 
                                                    type="checkbox"   
                                                    name='userService6' 
                                                    id='userService6' 
                                                    value={'동의함6'} 
                                                    onChange={onChangeService}
                                                    checked={state.이용약관동의.includes('동의함6')}
                                                />
                                                <em>동의함</em>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="agree-text-box">
                                        <h3>개인정보 처리 위탁 동의(선택)</h3>
                                        <div className="text-box">
                                            <div className="text">
                                                <ul>
                                                    <li>회사는 서비스 제공 및 향상을 위하여 아래와 같이 개인정보를 위탁하고 있으며, 관계 법령에 따라 위탁계약시 개인정보가 안전하게 관리될 수 있도록 필요한 사항을 규정하고 있습니다.</li>
                                                    <li>회사의 개인정보 수탁업체 및 위탁업무의 내용은 아래와 같습니다.</li>    
                                                    <li>&gt;위탁받는 자(수탁업체) /위탁업무의 내용&lt;</li>    
                                                    <li>- ㈜ 롯데/한진택배 /상품배송</li>    
                                                    <li>- 현대HCN /문자 메시지 전송</li>    
                                                    <li>- 나이스정보통신주식회사 /결제, 구매안전서비스 제공 등</li>    
                                                    <li>- NHN한국사이버결제 /실명확인, 본인인증</li>    
                                                    <li>- 번정실업,(주)홍주의류완성/상품 수선</li>    
                                                    <li>- (주)크리마, 게시판 시스템 및 마일리지 시스템 구축/유지/보수, DM발송</li>  
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
                                    <div className="button-box">
                                        <button type='submit' className='update-btn'>회원정보수정</button>
                                        <button onClick={onClickCancelBtn} className='cancel-btn'>취소</button>
                                        <button type='button' className='update-btn' onClick={onClickByeBtn}>회원탈퇴</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
