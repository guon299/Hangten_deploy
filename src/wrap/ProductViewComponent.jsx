import React from 'react';
import { productView } from '../reducer/productViewReducer';
import { useSelector, useDispatch } from 'react-redux';
import './scss/ProductView.scss';

export default function ProductViewComponent () {

    const selector = useSelector((state)=>state);
    const dispatch = useDispatch();

    const [totalPay, setTotalPay]=React.useState(0);
    const [state, setState] = React.useState({
        productList:[]
    });
    const [list, setList] = React.useState([])
    const [count, setCount] = React.useState([])
    
    React.useEffect(()=>{

    },[]);

    const onChangeOptionSize = (e)=>{
        const {value} = e.target;
        const res = list.map((item)=>item.사이즈===value);
        if(!res.includes(true)){
            const obj={
                상품명:selector.productView.productView.GoodsName,
                사이즈:value,
                정가:Number(selector.productView.productView.원가),
                판매가:Number(selector.productView.productView.판매가)
            };
            setList([obj, ...list]);
        }
    }

    React.useEffect(()=>{

    },[list])

    const onClickListDelet=(e,idx)=>{
        e.preventDefault();
        const res = list.filter((item, id)=>id!==idx);
        setList(res)
    }

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
                            <span><img src={selector.productView.productView.이미지} alt="" /></span>
                        </div>
                        <ul>
                            <li><span><img src={selector.productView.productView.이미지} alt="" /></span></li>
                            <li><span><img src={selector.productView.productView.이미지} alt="" /></span></li>
                            <li><span><img src={selector.productView.productView.이미지} alt="" /></span></li>
                            <li><span><img src={selector.productView.productView.이미지} alt="" /></span></li>
                            <li><span><img src={selector.productView.productView.이미지} alt="" /></span></li>
                        </ul>
                    </div>
                    <div className="right-box">
                        <div className="goods_name">
                            <span>{selector.productView.productView.GoodsName}</span>
                        </div>
                        <div className="goods_coste">
                            <h2>{Math.round(Number(selector.productView.productView.할인률)*100).toLocaleString('ko-kr')}%</h2>
                            <h3>{Number(selector.productView.productView.판매가).toLocaleString('ko-kr')}원</h3>
                            <h4>{Number(selector.productView.productView.원가).toLocaleString('ko-kr')}원</h4>
                        </div>
                        <div className="goods_info">
                            <ul>
                                <li><em>최적할인가</em><strong>{(selector.productView.productView.판매가)*(1 - 0.2)}원</strong></li>
                                <li><em>배송비</em><strong>3,000월 (30,000원 이상 구매시 무료)</strong></li>
                                <li><em>쿠폰적용가</em><strong><p>{Math.round(Number(selector.productView.productView.판매가)*(1 - 0.2)).toLocaleString('ko-kr')} 원 (20.0% 할인)</p><button>최대 할인 쿠폰 다운받기 <img src="./images/main/section1/arrow_back.svg" alt="" /></button> </strong></li>
                                <li><em>자체상품코드</em><strong>{selector.productView.productView.GoodsNum}</strong></li>
                            </ul>
                        </div>
                        <div className="goods_select">
                            <span>색상-사이즈</span>
                            <select name="goodsSize" id="goodsSize" onChange={onChangeOptionSize}>
                                <option value="*" selected>- [필수] 옵션을 선택해주세요 -</option>
                                <option value="**" disabled>----------------------------</option>
                                <optgroup label='색상-사이즈'>
                                    {
                                        selector.productView.productView.옵션.map((item, idx)=>{
                                            return(
                                                <option key={idx} value={item.사이즈}>{item.사이즈}</option>
                                            )
                                        })
                                    }
                                </optgroup>
                            </select>
                        </div>
                        <div className="size_info">
                            <button>
                                <img src="./images/productView/icon_size.svg" alt="" />
                                <span>고객님 사이즈를 찾아보세요!</span>
                            </button>
                        </div>
                        {
                        <div className="Goods-list">
                            <ul>
                                {
                                    list.map((item, idx)=>{
                                        return(
                                            <li key={idx}>
                                                <span>{item.사이즈}</span>
                                                <p>
                                                    <div className="input_box">
                                                        <input type="text" id='optionList' name='optionList' />
                                                        <button className='plus'><img src="./images/productView/btn_count_up.gif" alt="" /></button>
                                                        <button className='minus'><img src="./images/productView/btn_count_down.gif" alt="" /></button>
                                                    </div>
                                                    <div className="delet_btn">
                                                        <button className='delet' onClick={(e)=>onClickListDelet(e,idx)}><img src="./images/productView/icon_delete.png" alt="" /></button>
                                                    </div>
                                                </p>
                                                <i>{Number(item.판매가)}</i>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <div className="total_pay">
                                <em>총 상품금액</em><strong>{totalPay}원</strong>
                            </div>
                        </div>
                        }
                        <div className="button_box">
                            <button className="liek">관심상품</button>
                            <button className="cart">장바구니</button>
                            <button className="buy">바로구매</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};