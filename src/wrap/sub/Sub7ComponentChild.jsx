import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { confirmModal } from '../../reducer/confirmModal';

export default function Sub7ComponentChild() {

    const [state,setState] = React.useState({
        아이디중복:[],
        이메일중복:[]
    })
    const dispatch = useDispatch();

    const navigate = useNavigate();

    // React.useEffect(()=>{
    //     axios({
    //         url:'https://answotlr12.dothome.co.kr/hangten/hangten_email_check.php',
    //         method:'GET'
    //     })
    //     .then((result)=>{
    //         if(result.status===200){
    //             console.log(result.data)
    //             let 이메일중복 = state.이메일중복
    //             result.data.map((item)=>{
    //                 이메일중복=[...이메일중복,item.이메일]
    //                 setState({
    //                     ...state,
    //                     이메일중복:이메일중복
    //                 })
    //             })
    //         }
    //     })
    //     .catch((err)=>{
    //         console.log(err+'실패')
    //     })
    //     return;
    // },[])



    const onClickBack=(e)=>{
        e.preventDefault();
        window.history.go(-1);
    }
    const onClickHome=(e)=>{
        e.preventDefault();
        navigate('/index');
    }
    const onClickSignUp=(e)=>{
        e.preventDefault();
        navigate('/sub7SignUp',{
            state:{
                아이디중복:state.아이디중복
            }
        })
    }
    const onClickIcon=(e)=>{
        e.preventDefault();
        console.log(dispatch(confirmModal()))
        dispatch(confirmModal(true));
    }

    return (
        <div className='container'>
            <div className="top-nav">
                <img onClick={onClickBack} src="./images/sub/sub7/sub7_icon1.png" alt="" />
                <img className='home' onClick={onClickHome}   src="./images/sub/sub7/sub7_icon2.png" alt="" />
            </div>
            <div className="title-img">
                <div className="img-box">
                    <img src="./images/sub/sub7/sub7_3.png" alt="" />
                </div>
            </div>
            <div className="kakao-signup">
                <h1>회원가입</h1>
                <p>아이디와 비밀번호 입력하기 귀찮으시죠?<br/>1초 회원가입으로 입력없이 간편하게 회원가입 하세요.</p>
                <a href="#">
                    <img src="./images/sub/sub7/sub7_4.svg" alt="" />
                    <em>카카오 회원가입</em>
                </a>
            </div>
            <div className="banner-img">
                <img src="./images/sub/sub7/sub7_5.jpg" alt="" />
            </div>
            <div className="sigunup">
                <p>또는</p>
                <div className="button" onClick={onClickSignUp}>
                    ID/PW 입력이 필요한 회원가입
                </div>
            </div>
            <div className="footer-text">
                <span>로그인까지 한번에,</span>
                <span>구매가 빨라지는<strong>1초회원가입</strong>이란?<img onClick={onClickIcon} src="./images/sub/sub7/sub7_6.png" alt="" /></span>
            </div>
            <div className="last">
                <p>HANGTEN<strong>1초회원가입</strong>사용중</p>
            </div>
        </div>
    );
};
