import React from 'react';
import './scss/sub8SearchIdPwResult.scss';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Sub8SearchIdResultComponent(){
    
    const navigate = useNavigate();
    const location = useLocation();
/*  console.log(location);
    console.log(location.state.아이디);
    console.log(location.state.이름);
    console.log(location.state.이메일);
    console.log(location.state.가입일); */
    const [state, setState] = React.useState({
        회원유형: '개인',
    });

    const onClickGoSignIn=(e)=>{
        e.preventDefault();
        navigate('/sub8');
    }

    const onClickGoSearchPw=(e)=>{
        e.preventDefault();
        navigate('/sub8SearchPw');
    }

    return (
        <div id='ResultIdPw'>
            <section id="su8section1Result">
                <div className="container">
                    <div className="title">
                        <h2>아이디 찾기</h2>
                    </div>
                    <div className="content">
                        <div className="title-box">
                            <h2>아이디 찾기</h2>
                            <h2>고객님 아이디 찾기가 완료 되었습니다.</h2>
                        </div>
                        <div className="content-box">
                            <div className="message-box">
                                <i></i>
                                <p>저희 쇼핑몰을 이용해주셔서 감사합니다.</p>
                                <p>다음정보로 가입된 아이디가 총 <span>1</span> 개 있습니다.</p>
                            </div>
                            <div className="info-box">
                                <div className="image-box">
                                    <img src="./images/sub/sub8/img_member_default.gif" alt="" />
                                </div>
                                <div className="information">
                                    <ul>
                                        <li>
                                            <h4 className='left-label'>이름</h4>
                                            <strong><span>: </span>{location.state.이름}</strong>
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
                                            <label htmlFor="useId">
                                                <input type="radio" name='useId' id='useId' checked={'checked'} />
                                                <span>{location.state.아이디}</span>
                                                <span>{`( ${state.회원유형}회원, ${new Date(location.state.가입일).getFullYear()}-${new Date(location.state.가입일).getMonth()+1}-${new Date(location.state.가입일).getDate()} 가입 )`}</span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="button-box">
                                <a href="!#" className='sign-in' onClick={onClickGoSignIn}>로그인</a>
                                <a href="!#" className='search-pw' onClick={onClickGoSearchPw}>비밀번호 찾기</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};