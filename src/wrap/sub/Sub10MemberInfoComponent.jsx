import React from 'react';
import './scss/sub10.scss';
import Sub10LeftBoxComponent from './Sub10LeftBoxComponent.jsx';

export default function Sub10MemberInfoComponent() {

    return (
        <div id='memberInfo' className='myPage'>
            <section id='sectionSub10Info' className='section'>
                <div className="container">
                    <div className="content">
                        <Sub10LeftBoxComponent />
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
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
