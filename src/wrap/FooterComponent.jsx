import React from "react";
import './scss/Footer.scss';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "../reducer/signIn";


export default  function FooterComponent(){

    const selector = useSelector((state)=>state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onClickGoSignin=(e)=>{
        e.preventDefault();
        navigate('/sub8');
    }

    const onClickGoSignup=(e)=>{
        e.preventDefault();
        navigate('/sub7');
    }

    const onClickGoNotice=(e)=>{
        e.preventDefault();
        navigate('/sub11Notice');
    }

    const onClickGoAdminSignin=(e)=>{
        e.preventDefault();
        navigate('/sub8Admin');
    }

    const onClickLogOut=(e)=>{
        e.preventDefault();
        sessionStorage.removeItem('HANGTEN_SIGNIN_INFORMATION');
        dispatch(signIn(null));
    }

    return(
        <footer id="footer">
            <div className="container">
                <div className="row1">
                    <div className="gap">
                        <div className="left">
                            <div className="logo">
                                <a href="!#"><img src="./images/footer/logo_white.png" alt="" /></a>
                            </div>
                            <ul className="text-box">
                                <li><p>상호 :  브랜디드라이프스타일코리아 주식회사</p></li>
                                <li><p>대표자 : SHIVKUMAR RAMANATHAN</p></li>
                                <li><p>전화번호 : <a href="tel:080-775-1114">080-775-1114</a></p></li>
                                <li><p>주소 :  서울특별시 금천구 벚꽃로 244 (가산동) 벽산디지털밸리5차 5층</p></li>
                                <li><p>사업자번호 :  119-81-44581</p></li>
                                <li><p>통신판매업 번호 :  제2015-서울금천-0984호</p></li>
                                <li><p>개인정보취급책임자, 이메일 :  쉬브쿠마 라마나탄, <a href="mailto:cskorea@shophangten.com">cskorea@shophangten.com</a></p></li>
                                <li><p>고객상담전용 <a href="mailto:cskorea@shophangten.com">cskorea@shophangten.com</a></p></li>
                                <li><p>제휴/협찬/PR전용 <a href="mailto:brandedlifestylekorea@gmail.com">brandedlifestylekorea@gmail.com</a></p></li>
                            </ul>
                        </div>
                        <div className="right">
                            <div className="customer-center">
                                <ul>
                                    <li><p>행텐 고객센터</p></li>
                                    <li><p>[전화번호] <a href="tel:080-775-1114">080-775-1114</a></p></li>
                                    <li><p>[운영시간] 평일 AM 09 - PM 05 , [점심시간] 평일 PM 12 - PM 01</p></li>
                                    <li><p>* 토요일,일요일, 공휴일은 휴무입니다.</p></li>
                                    <li><p className="blind">빈칸</p></li>
                                    <li><p>배송비 입금 계좌번호안내</p></li>
                                    <li><p>하나은행 133-968711-30137</p></li>
                                    <li><p>예금주 : 브랜디드라이프스타일코리아 주식회사</p></li>
                                </ul>
                            </div>
                            <div className="notice">
                                <ul>
                                    <li><a href="!#" onClick={onClickGoNotice}>공지사항</a></li>
                                    <li><a href="!#">Q&amp;A</a></li>
                                    <li><a href="!#">Review</a></li>
                                    <li><a href="!#">이벤트</a></li>
                                    <li><a href="!#">매장안내&gt;행텐</a></li>
                                    <li><a href="!#">매장안내&gt;행텐틴즈</a></li>
                                </ul>
                            </div>
                            <div className="signupin">
                                {
                                    selector.signIn.로그인정보 === null && (
                                        <ul>
                                            <li><a href="!#" onClick={onClickGoSignin}>로그인</a></li>
                                            <li><a href="!#" onClick={onClickGoSignup}>회원가입</a></li>
                                            <li><a href="!#" onClick={onClickGoAdminSignin}>관리자</a></li>
                                        </ul>
                                    )
                                }
                                {
                                    selector.signIn.로그인정보 !== null && (
                                        <ul>
                                            <li><a href="!#" onClick={onClickLogOut}>로그아웃</a></li>
                                            <li><a href="!#">마이쇼핑</a></li>
                                        </ul>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row2">
                    <ul>
                        <li><a href="!#">개인정보처리방침</a></li>
                        <li><i></i></li>
                        <li><a href="!#">이용약관</a></li>
                        <li><i></i></li>
                        <li><a href="!#">이용안내</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}