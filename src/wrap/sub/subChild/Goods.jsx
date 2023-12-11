import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { goodsPage } from "../../../reducer/goodsPageReducer";
import { displayViewGoods } from "../../../reducer/viewGoodsReducer";
import { currentPageIn } from "../../../reducer/currentPageReducer";
import { isCategory1In } from "../../../reducer/isCategory1Reducer";
import { isSubMeun1In } from "../../../reducer/isSubMeun1Reducer";
import { isSubMeun2In } from "../../../reducer/isSubMeun2Reducer";
import { isSubMeun3In } from "../../../reducer/isSubMeun3Reducer";
    // const totalPages = Math.ceil(selector.goodsPage.totalGoodsLength / selector.goodsPage.displayViewLimet);
    // const currentGroup = Math.ceil(totalPages / selector.goodsPage.viewPageLimet);
    // const startPage = (currentGroup-1) * selector.goodsPage.viewPageLimet + 1;
    // const endPage = Math.min((currentGroup * selector.goodsPage.viewPageLimet), totalPages);


export default function Goods() {
    const windowScroll = React.useRef();
    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);
    const navigate = useNavigate();

    const [state, setState] = React.useState({
        isSubBtnAll:true
    })

    // 상품 인덱스
    const startIndex = (selector.currentPageIn.currentPage - 1) * selector.goodsPage.displayViewLimet;
    const endIndex = startIndex + selector.goodsPage.displayViewLimet;
    
    // 페이지네이션 페이지버튼
    const totalPages = Math.ceil(selector.goodsPage.totalGoodsLength / selector.goodsPage.displayViewLimet);
    const endPage = totalPages;
    let cnt = 0;


    // 처음 로딩시 상품데이터 불러오기
    React.useEffect(()=>{
        axios({
            url:'./data/Goods.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                const goods={
                    goods:res.data.Goods,
                    totalGoodsLength:res.data.Goods.length,
                    displayViewLimet:36,
                    viewPageLimet:10,
                }
                dispatch(goodsPage(goods));
            }
        })
        .catch((err)=>{
            console.log("AXIOS 오류!!"+err);
        })
    },[]);
    const scrolling = ()=>{
        windowScroll.current.style.transition = 'none'
        window.scrollTo(0,0);
    }
    // 페이지당 상품리스트 분배
    const viewGoodsFuntion = ()=>{
        const sessionData = JSON.parse(sessionStorage.getItem('Hangten_Goods_Data'));
        const displayedGoods = sessionData.slice(startIndex, endIndex);
        dispatch(displayViewGoods(displayedGoods));
    }
    React.useEffect(()=>{
        sessionStorage.setItem('Hangten_Goods_Data',JSON.stringify(selector.goodsPage.goods));
        viewGoodsFuntion();
    },[selector.goodsPage.goods]);

    React.useEffect(()=>{
        viewGoodsFuntion();
    },[selector.currentPageIn.currentPage]);
    
    // 페이지네이션 페이지버튼
    const getPages = () => {
        return Array.from({ length: totalPages }, (_, index) => index+1);
    };

    // 페이지버튼 클릭이벤트
    const handlePageClick = (pageNumber) => {
        dispatch(currentPageIn(pageNumber));
        scrolling();
    };

    // 페이지 이동버튼 클릭 이벤트
    const onClickPrevBtn=(e)=>{
        e.preventDefault();
        if(selector.currentPageIn.currentPage<=1){
            cnt=1;
            dispatch(currentPageIn(cnt));
        }
        else{
            cnt=selector.currentPageIn.currentPage-1;
            dispatch(currentPageIn(cnt));
        }
    };
    const onClickNextBtn=(e)=>{
        e.preventDefault();
        if(selector.currentPageIn.currentPage>=endPage){
            cnt=endPage;
            dispatch(currentPageIn(cnt));
        }
        else{
            cnt=selector.currentPageIn.currentPage+1;
            dispatch(currentPageIn(cnt));
            console.log(cnt);
        }
    };

    // 카테고리 버튼 클릭이벤트
    const onClickCategory1=(idx,e)=>{
        e.preventDefault();
        let cnt = idx;
        dispatch(isCategory1In(cnt));
    };
    const onClickSubMeun1=(idx,e, item)=>{
        let cnt = idx;
        e.preventDefault();
        dispatch(isSubMeun1In(cnt));
        console.log(item);
        if(item==="남성"){
            navigate('/sub2');
            setState({
                ...state,
                isSubBtnAll:true
            });
        }
        else if(item==="여성"){
            navigate('/sub3');
            setState({
                ...state,
                isSubBtnAll:true
            });
        }
        else if(item==="남아"){
            navigate('/sub4');
            setState({
                ...state,
                isSubBtnAll:true
            });
        }
        else if(item==="여아"){
            navigate('/sub5');
            setState({
                ...state,
                isSubBtnAll:true
            });
        }
        else if(item==="전체"){
            setState({
                ...state,
                isSubBtnAll:false
            });
        }
    };
    const onClickSubMeun2=(idx,e)=>{
        let cnt = idx;
        e.preventDefault();
        dispatch(isSubMeun2In(cnt));
    };
    const onClickSubMeun3=(idx,e)=>{
        let cnt = idx;
        e.preventDefault();
        dispatch(isSubMeun3In(cnt));
    };

    return (
        <div className="content-box">
            <div className="categoyr-box">
                <ul className="submeun1">
                    {
                        selector.categoryIn.subMeun1.map((item, idx)=>{
                            return(
                                <li key={idx}>
                                    <button 
                                    className={`submeun1-${idx+1}${selector.isSubMeun1In.isSubMeun1===null?'':(selector.isSubMeun1In.isSubMeun1===idx?' on':'')}`} 
                                    onClick={(e)=>onClickSubMeun1(idx,e, item.submeun)} 
                                    >
                                        {item.submeun}
                                    </button>
                                </li>
                            )
                        })
                    }  
                </ul>
                {
                    state.isSubBtnAll &&(
                        <>
                            <ul className="submeun2">
                                {
                                    selector.categoryIn.subMeun2.map((item, idx)=>{
                                        return(
                                            <li key={idx}>
                                                <button 
                                                className={`submeun2-${idx+1}${selector.isSubMeun2In.isSubMeun2===null?'':(selector.isSubMeun2In.isSubMeun2===idx?' on':'')}`}
                                                onClick={(e)=>onClickSubMeun2(idx,e)} 
                                                style={{visibility:item.submeun===null?'collapse':'visible'}}
                                                >
                                                    {item.submeun}
                                                </button>
                                            </li>
                                        )
                                    })
                                }  
                            </ul>
                            <ul className="submeun3">
                                {
                                    selector.categoryIn.subMeun3.map((item, idx)=>{
                                        return(
                                            <li key={idx}>
                                                <button 
                                                className={`submeun3-${idx+1}${selector.isSubMeun3In.isSubMeun3===null?'':(selector.isSubMeun3In.isSubMeun3===idx?' on':'')}`}
                                                onClick={(e)=>onClickSubMeun3(idx,e)} 
                                                style={{visibility:item.submeun===null?'collapse':'visible'}}
                                                >
                                                    {item.submeun}
                                                </button>
                                            </li>
                                        )
                                    })
                                }  
                            </ul>
                        </>
                    )
                }
                <ul className="category1">
                    {
                        selector.categoryIn.category1.map((item, idx)=>{
                            return(
                                <li key={idx}>
                                    <button 
                                    className={`category2-${idx+1}${selector.isCategory1In.isCategory1===null?'':(selector.isCategory1In.isCategory1===idx?' on':'')}`}
                                     onClick={(e)=>onClickCategory1(idx,e)} 
                                     >
                                        {item.category}
                                    </button>
                                </li>
                            )
                        })
                    } 
                </ul>
            </div>
            <div className="content" ref={windowScroll}>
                <ul >
                    {
                        selector.displayViewGoods.viewGoods.map((item) => {
                            return(
                                
                                <li key={item.GoodsNum}>
                                    <div className="img-box">
                                        <a href="!#">
                                            <img src={`./images/Goods/${item.이미지}`} alt="" />
                                        </a>
                                    </div>
                                    <div className="text-box">
                                        <div className="text1">
                                            <a href="!#">{item.GoodsName}</a>
                                        </div>
                                        <div className="text2">
                                            <h2>{Math.round(item.할인률*100)}%</h2>
                                            <h3>{((Math.round(item.원가*(1-item.할인률)/10)*10)).toLocaleString('ko-kr')}원</h3>
                                            <h4>{(item.원가).toLocaleString('ko-KR')}원</h4>
                                        </div>
                                        <div className="text3">
                                            <p>review : {item.review}</p>
                                        </div>
                                    </div>
                                </li>

                            )
                        })
                    }
                </ul>
                <div className="page-box">
                    <ul>
                        <button className="prev-btn" onClick={onClickPrevBtn}><i className="material-icons" >keyboard_arrow_left</i></button>
                        {getPages().map((page) => (
                            <li key={page}>
                                <Link className={`${selector.currentPageIn.currentPage===page?"on":""}`} to="/sub1" onClick={() => handlePageClick(page)}
                                style={{pointerEvents:selector.currentPageIn.currentPage===page?'none':''}}>
                                {page} 
                                </Link>
                            </li>
                        ))}
                        <button className="next-btn" onClick={onClickNextBtn}><i className="material-icons" >keyboard_arrow_left</i></button>
                    </ul>
                </div>
            </div>
        </div>
    );
}
