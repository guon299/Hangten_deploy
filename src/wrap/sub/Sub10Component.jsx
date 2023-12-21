import React from 'react';
import './scss/sub10.scss';
import Sub10LeftBoxComponent from './Sub10LeftBoxComponent';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signIn } from '../../reducer/signIn';

export default function Sub10Component() {

    const selector = useSelector((state)=>state);
    const dispatch = useDispatch();

    return (
        <div id='myPage' className='myPage'>
            <section id="sectionSub10" className='section'>
                <div className="container">
                    <div className="content">
                        <Sub10LeftBoxComponent />
                        <div className="right-box">
                            <div className="personal-info">
                                <div className="gap">
                                    <div className="image-box">
                                        <img src="./images/sub/sub8/img_member_default.gif" alt="" />
                                    </div>
                                    <div className="info-box">
                                        <h2>저희 쇼핑몰을 이용해 주셔서 감사합니다. <em>{selector.signIn.로그인정보.이름}</em> 님은 <strong>[FAN회원]</strong> 회원이십니다.</h2>
                                        <h2><em>0원 이상</em> 구매시 <em>2%</em>을 추가적립 받으실 수 있습니다. </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="points">
                                <ul>
                                    <li><strong>가용적립금</strong><span>1,000원</span><button>조회</button></li>
                                    <li><strong>총적립금</strong><span>1,000원</span></li>
                                    <li><strong>사용적립금</strong><span>0원</span></li>
                                    <li><strong>총주문</strong><span>0원(0회)</span></li>
                                    <li><strong>쿠폰</strong><span>2개</span><button>조회</button></li>
                                </ul>
                            </div>
                            <div className="my-order">
                                <ul>
                                    <li><h3>나의 주문처리 현황 (최근 3개월 기준)</h3></li>
                                    <li>
                                        <ul>
                                            <li><strong>입금전</strong><a href="!#"><span>0</span></a></li>
                                            <li><strong>배송준비중</strong><a href="!#"><span>0</span></a></li>
                                            <li><strong>배송중</strong><a href="!#"><span>0</span></a></li>
                                            <li><strong>배송완료</strong><a href="!#"><span>0</span></a></li>
                                            <li>
                                                <div><i></i><strong>취소 :</strong><a href="!#"><span>0</span></a></div>
                                                <div><i></i><strong>교환 :</strong><a href="!#"><span>0</span></a></div>
                                                <div><i></i><strong>반품 :</strong><a href="!#"><span>0</span></a></div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="menu-box">
                                <ul>
                                    <li><a href="!#"><h3>주문 조회</h3><p>고객님께서 주문하신 상품의</p><p>주문내역을 확인하실 수 있습니다.</p></a></li>
                                    <li><Link to="/memberInfo"><h3>회원 정보</h3><p>회원이신 고객님의 개인정보를</p><p>관리하는 공간입니다.</p></Link></li>
                                    <li><a href="!#"><h3>관심 상품</h3><p>관심상품으로 등록하신</p><p>상품의 목록을 보여드립니다.</p></a></li>
                                    <li><a href="!#"><h3>적립금</h3><p>적립금은 상품 구매 시</p><p>사용하실 수 있습니다.</p></a></li>
                                    <li><a href="!#"><h3>쿠폰</h3><p>고객님이 보유하고 계신</p><p>쿠폰내역을 보여드립니다.</p></a></li>
                                    <li><a href="!#"><h3>게시물 관리</h3><p>고객님께서 작성하신 게시물을</p><p>관리하는 공간입니다.</p></a></li>
                                    <li><a href="!#"><h3>배송 주소록 관리</h3><p>자주 사용하는 배송지를 등록하고</p><p>관리하실 수 있습니다.</p></a></li>
                                    <li><a href="!#"><h3>정기배송 관리</h3><p>고객님께서 신청하신 정기배송의</p><p>신청 정보 및 내역을 확인하실 수 있습니다.</p></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
