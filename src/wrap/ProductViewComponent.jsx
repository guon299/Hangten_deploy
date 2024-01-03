import React from 'react';
import { useLocation } from 'react-router-dom';
import './scss/ProductView.scss';

export default function ProductViewComponent () {

    const location = useLocation();

    React.useEffect(()=>{

    },[location.state])
    return (
        <div id='ProductView'>
            <section id='section'>
                <div className="titel">
                    <ul>
                        <li><a href="!#">홈</a></li>
                    </ul>
                </div>
                <div className="content">
                    <div className="left-box">
                        <div className="img-box">
                            <span><img src={`./images/Goods/${location.state.이미지}`} alt="" /></span>
                        </div>
                        <ul>
                            <li><span><img src={`./images/Goods/${location.state.이미지}`} alt="" /></span></li>
                            <li><span><img src={`./images/Goods/${location.state.이미지}`} alt="" /></span></li>
                            <li><span><img src={`./images/Goods/${location.state.이미지}`} alt="" /></span></li>
                            <li><span><img src={`./images/Goods/${location.state.이미지}`} alt="" /></span></li>
                            <li><span><img src={`./images/Goods/${location.state.이미지}`} alt="" /></span></li>
                        </ul>
                    </div>
                    <div className="right-box">
                        <div className="goods_name">
                            <span>{location.state.GoodsName}</span>
                        </div>
                        <div className="goods_coste">
                            <h2>{Math.round(location.state.할인률*100)}%</h2>
                            <h3>{((Math.round(location.state.원가*(1-location.state.할인률)/10)*10)).toLocaleString('ko-kr')}원</h3>
                            <h4>{(location.state.원가).toLocaleString('ko-kr')}원</h4>
                        </div>
                        <div className="goods_info">
                            <ul>
                                <li><em>최적할인가</em><strong>{((Math.round(location.state.원가*(1-location.state.할인률)/10)*10)*(1 - 0.2)).toLocaleString('ko-kr')}원</strong></li>
                                <li><em>배송비</em><strong>3,000월 (30,000원 이상 구매시 무료)</strong></li>
                                <li><em>쿠폰적용가</em><strong>{} <button>최대 할인 쿠폰 다운받기</button> </strong></li>
                                <li><em>자체상품코드</em><strong>{}</strong></li>
                            </ul>
                        </div>
                        <div className="goods_select">
                            <span></span><select name="goodsSize" id="goodsSize"></select>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};