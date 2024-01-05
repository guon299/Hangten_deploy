import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Sub9ComponentChild() {

    const navigate = useNavigate();
    const selector = useSelector((state)=>state)

    const [state, setState] = React.useState({
        isList:false,
        isNull:true,
        isBasong:false
    })
    const [totalPay, setTotalPay] = React.useState(0);
    const [cartList, setCartList] = React.useState([]);

    const onClickGo=(e)=>{
        e.preventDefault();
        navigate('/index');
    }

    React.useEffect(()=>{
        let res = JSON.parse(localStorage.getItem('CART_PRODUCT'));
        if( JSON.parse(localStorage.getItem('CART_PRODUCT')) !== null){
            setState({
                ...state,
                isList:true,
                isNull:false
            })
            setCartList(...cartList, res);
        }
        else{
            setState({
                ...state,
                isList:false,
                isNull:true
            })
        }
    },[]);

    React.useEffect(()=>{
        let pay = 0;
        if(cartList.length > 0){
            cartList.map((item, idx)=>{
                pay += item.판매가
            });
            if(pay < 30000){
                setState({
                    ...state,
                    isBasong:true
                })
            }
            else{
                setState({
                    ...state,
                    isBasong:false
                })
            }
            setTotalPay(pay);
        }
    },[cartList]);

    return (
        <div className='container'>
            <div className="content">
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
                            <li>회원 정보</li>
                            <li>배송지 관리</li>
                        </ul>
                    </div>
                </div>
                <div className="right-box">
                    <div className="right-title">
                        <ul>
                            <li className='list list1'>장바구니</li>
                            <li className='list list2'>장바구니에 담긴 상품은 10일 동안 보관됩니다.</li>
                            <li className='list list3'>국내배송상품 ({cartList.length})</li>
                            <li className='list list4'>해외배송상품 (0)</li>
                        </ul>
                    </div>
                    <div className="cart-box">
                            {
                                state.isNull &&(
                                    <div className="cart">
                                                <p>The shopping basket is empty.</p>
                                    </div>
                                )
                            }
                            {
                                state.isList && (
                                    <div className="cartList">
                                        <div className="cart-title">
                                            <ul className='title-list'>
                                                <li className='title li1'><input type="checkbox" name='AllCheck' /></li>
                                                <li className='title li2'>이미지</li>
                                                <li className='title li3'>상품정보</li>
                                                <li className='title li4'>수량</li>
                                                <li className='title li5'>상품구매금액</li>
                                                <li className='title li6'>할인금액</li>
                                                <li className='title li7'>적립금</li>
                                                <li className='title li8'>배송구분</li>
                                                <li className='title li9'>배송비</li>
                                                <li className='title li10'>선택</li>
                                            </ul>
                                        </div>
                                        <div className="cart-conten">
                                            {
                                                cartList.map((item, idx)=>{
                                                    return(
                                                        <ul className='content-list'>
                                                            <li className='list li1'><input type="checkbox" name='checkList' /></li>
                                                            <li className='list li2'><a href='!#'><img src={item.이미지} alt="" /></a></li>
                                                            <li className='list li3'><a href="!#">{item.GoodsName}</a><span>{`옵션 : ${item.사이즈}`}</span></li>
                                                            <li className='list li4'>
                                                                <div className="cnt-box">
                                                                    <input type="text" name='cartListCount' id='cartListCount' value={cartList[idx].수량}/>
                                                                    <div className="btn-box">
                                                                        <button className="plus"><img src="./images/cart/btn_quantity_up.gif" alt="" /></button>
                                                                        <button className="minus"><img src="./images/cart/btn_quantity_down.gif" alt="" /></button>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className='list li5'><p>{Number(item.판매가).toLocaleString('ko-kr')}원</p></li>
                                                            <li className='list li6'><p>{'-'}</p></li>
                                                            <li className='list li7'><p>{'-'}</p></li>
                                                            <li className='list li8'><p>{'-'}</p></li>
                                                            <li className='list li9'><p>{`${state.isBasong!==true?'무료':'3000원 조건'}`}</p></li>
                                                            <li className='list li10'>
                                                                <div className="button-box">
                                                                    <button className="oder">oder</button>
                                                                    <button className="delete">delete</button>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="cart-foodter">
                                            <div className="foodter-left">
                                                <h2>{"베송방식"}</h2>
                                            </div>
                                            <div className="foodter-right">
                                                <h3>{`상품구매금액 ${totalPay} + ${state.isBasong!==true?'배송비 0(무료)':'배송비 3000'} 합계 : `}</h3>
                                                <h4>{state.isBasong!==true?totalPay:totalPay+3000}원</h4>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        <div className="button-box">
                            <div className="button">
                                <button className='btn1'>전체상품주문</button>
                                <button className='btn2'>선택상품주문</button>
                            </div>
                            <button onClick={onClickGo} className='btn3'>쇼핑계속하기</button>
                        </div>
                    </div>
                    <div className="footer-box">
                        <h2>장바구니 이용안내</h2>
                        <ul>
                            <li>해외배송 상품과 국내배송 상품은 함께 결제하실 수 없으니 장바구니 별로 따로 결제해 주시기 바랍니다.</li>
                            <li>해외배송 가능 상품의 경우 국내배송 장바구니에 담았다가 해외배송 장바구니로 이동하여 결제하실 수 있습니다.</li>
                            <li>선택하신 상품의 수량을 변경하시려면 수량변경 후 [변경] 버튼을 누르시면 됩니다.</li>
                            <li>[쇼핑계속하기] 버튼을 누르시면 쇼핑을 계속 하실 수 있습니다.</li>
                            <li>장바구니와 정기배송을 이용하여 원하시는 상품만 주문하거나 정기배송으로 등록하실 수 있습니다.</li>
                            <li>파일첨부 옵션은 동일상품을 장바구니에 추가할 경우 마지막에 업로드 한 파일로 교체됩니다.</li>
                        </ul>
                        <h4>무이자할부 이용안내</h4>
                        <ul>
                            <li>상품별 무이자할부 혜택을 받으시려면 무이자할부 상품만 선택하여 [주문] 버튼을 눌러 주문/결제 하시면 됩니다.</li>
                            <li>[전체 상품 주문] 버튼을 누르시면 장바구니의 구분없이 선택된 모든 상품에 대한 주문/결제가 이루어집니다.</li>
                            <li>단, 전체 상품을 주문/결제하실 경우, 상품별 무이자할부 혜택을 받으실 수 없습니다.</li>
                            <li>무이자할부 상품은 장바구니에서 별도 무이자할부 상품 영역에 표시되어, 무이자할부 상품 기준으로 배송비가 표시됩니다.</li>
                            <li>실제 배송비는 함께 주문하는 상품에 따라 적용되오니 주문서 하단의 배송비 정보를 참고해주시기 바랍니다.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
