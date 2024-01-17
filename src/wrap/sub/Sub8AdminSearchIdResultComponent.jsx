import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Sub8AdminSearchIdResultComponent(){

    const location = useLocation();
    const navigate = useNavigate();

    const [state, setState] = React.useState({
        회원유형: '관리자'
    });

    const onClickGoSignIn=(e)=>{
        e.preventDefault();
        navigate('/sub8Admin');
    }

    const onClickGoSearchPw=(e)=>{
        e.preventDefault();
        navigate('/Sub8AdminSearchPw');
    }

    return (
        <div id='ResultIdPw'>
        <section id="su8section1Result">
            <div className="container">
                <div className="title">
                    <h2>관리자 아이디 찾기</h2>
                </div>
                <div className="content">
                    <div className="title-box">
                        <h2>아이디 찾기</h2>
                        <h2>관리자 아이디 찾기가 완료 되었습니다.</h2>
                    </div>
                    <div className="content-box">
                        <div className="message-box">
                            <i></i>
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