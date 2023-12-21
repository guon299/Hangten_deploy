import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Sub10LeftBoxComponent(){

    const navigate = useNavigate();

    const onClickGoMemberInfo=(e)=>{
        e.preventDefault();
        navigate('/memberInfo');
    }

    return (
        <div className="left-box">
            <div className="list-box">
                <div className="title">
                    나의 쇼핑정보
                </div>
                <ul>
                    <li>장바구니</li>
                    <li>주문 내역</li>
                    <li>관심 상품</li>
                    <li>적립금</li>
                    <li>쿠폰</li>
                    <li>나의 게시물</li>
                    <li className='on'>내 정보관리</li>
                    <li onClick={onClickGoMemberInfo}>회원 정보</li>
                    <li>배송지 관리</li>
                </ul>
            </div>
        </div>
    );
};
