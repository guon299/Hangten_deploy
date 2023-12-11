import React from 'react';
import './scss/ConfirmModal.scss'
import { useDispatch,useSelector } from 'react-redux';
import { confirmModal } from '../reducer/confirmModal';


export default function ConfirmModalComponent(){

    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);

    const onClickClose=(e)=>{
        e.preventDefault();
        dispatch(confirmModal(false));

    }
    return (
        <div id='confirmModal'>
            <div className="container">
                <div className="content">
                    <div className="header">
                        <div className="title">
                            <h2></h2>
                        </div>
                        <div className="text">
                            <p>방금 경험해 본,<strong> 1초 회원가입/로그인</strong></p>
                            <span>필수인 것 같은데, 우리 쇼핑몰만 없다?</span>
                        </div>
                    </div>
                    <div className="body">
                        <div className="img-box">
                            <img src="./images/confirm/img1.gif" alt="" />
                            <img src="./images/confirm/img2.png" alt="" />
                        </div>
                    </div>
                    <div className="footer">
                        <div className="text-box">
                            <span>5,000여 개 상위 쇼핑몰<em>이 도입한 화제의 </em><strong>국민 로그인!!</strong></span>
                            <div className="ment">
                                <h2>카페24, 메이크샵, 아임웹, NHN 샵바이</h2>
                                <h3>쇼핑몰 운영 중이시라면 지금 사용해 보세요.</h3>
                            </div>
                        </div>
                        <div className="button-box">
                            <button onClick={onClickClose} className='close-btn'>
                                <i></i>
                            </button>
                            <button className='ok-btn'>확인하러가기<i></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
