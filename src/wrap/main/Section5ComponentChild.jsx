import React from 'react';

export default function Section5ComponentChild({상품1,상품2,상품3,상품4,상품5,상품6}) {
    const [state,setState] = React.useState({
        btnName:'전체',
        cnt:1
    })
    const productList = React.useRef();

    const onClickBtn=(e,p)=>{
        e.preventDefault();
        let btnName ='';
        if(p==='전체'){
            btnName=p;
        }
        else if(p==='HT101'){
            btnName=p;
        }
        else if(p==='남성'){
            btnName=p;
        }
        else if(p==='여성'){
            btnName=p;
        }
        else if(p==='남아'){
            btnName=p;
        }
        else if(p==='여아'){
            btnName=p;
        }
        else{
            return;
        }
        setState({
            ...state,
            btnName:p,
            cnt:1
        })

    }
    const onClick13456=(e)=>{
        e.preventDefault();
        if(state.cnt<3){
            setState({
                ...state,
                cnt:state.cnt+1
            })
        }
    }
    const onClick2=(e)=>{
        e.preventDefault();
        if(state.cnt<2){
            setState({
                ...state,
                cnt:state.cnt+1
            })
        }
    }

    return (
        <div className='container'>
            <div className="content">
                <div className="title-box">
                    <h2>BEST</h2>
                    <ul>
                        <li>
                            <a  className={state.btnName==='전체'?'on':""} href="#" onClick={(e)=>onClickBtn(e,'전체')}>전체</a>
                        </li>
                        <li>
                            <a className={state.btnName==='HT101'?'on':""} href="#" onClick={(e)=>onClickBtn(e,'HT101')} >HT101</a>
                        </li>
                        <li>
                            <a className={state.btnName==='남성'?'on':""} href="#" onClick={(e)=>onClickBtn(e,'남성')}>남성</a>
                        </li>
                        <li>
                            <a className={state.btnName==='여성'?'on':""} href="#" onClick={(e)=>onClickBtn(e,'여성')}>여성</a>
                        </li>
                        <li>
                            <a className={state.btnName==='남아'?'on':""} href="#" onClick={(e)=>onClickBtn(e,'남아')}>남아</a>
                        </li>
                        <li>
                            <a className={state.btnName==='여아'?'on':""} href="#" onClick={(e)=>onClickBtn(e,'여아')}>여아</a>
                        </li>
                    </ul>
                </div>
                <div ref={productList} className="product-list">
                    {   
                    state.btnName==='전체' &&                    
                    <>
                        {
                            상품1.map((item,idx)=>{
                                return(
                                    <div className="product" key={item.번호}>
                                        <div className="product-img-box">   
                                            <img src={`./images/main/section5/전체/${item.이미지}`} alt="" />
                                        </div>
                                        <div className="product-text-box">
                                            <div className="row1">
                                                <span>{item.제품명}</span>
                                            </div>
                                            <div className="row2">
                                                <strong>{Math.round(item.할인율*100)}%</strong>
                                                <em>{Math.round(item.원가*(1-item.할인율)).toLocaleString('ko-KR')}원</em>
                                                <span>{item.원가.toLocaleString('ko-KR')}원</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        {    (state.cnt===2 || state.cnt===3) &&
                            상품3.map((item,idx)=>{
                                return(
                                    <div className="product" key={item.번호}>
                                        <div className="product-img-box">   
                                            <img src={`./images/main/section5/남성/${item.이미지}`} alt="" />
                                        </div>
                                        <div className="product-text-box">
                                            <div className="row1">
                                                <span>{item.제품명}</span>
                                            </div>
                                            <div className="row2">
                                                <strong>{Math.round(item.할인율*100)}%</strong>
                                                <em>{Math.round(item.원가*(1-item.할인율)).toLocaleString('ko-KR')}원</em>
                                                <span>{item.원가.toLocaleString('ko-KR')}원</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        {    state.cnt===3 &&
                            상품4.map((item,idx)=>{
                                return(
                                    <div className="product" key={item.번호}>
                                        <div className="product-img-box">   
                                            <img src={`./images/main/section5/여성/${item.이미지}`} alt="" />
                                        </div>
                                        <div className="product-text-box">
                                            <div className="row1">
                                                <span>{item.제품명}</span>
                                            </div>
                                            <div className="row2">
                                                <strong>{Math.round(item.할인율*100)}%</strong>
                                                <em>{Math.round(item.원가*(1-item.할인율)).toLocaleString('ko-KR')}원</em>
                                                <span>{item.원가.toLocaleString('ko-KR')}원</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </>
                    }

                    {   
                        state.btnName==='HT101' &&                    
                        <>
                            {
                                상품2.map((item,idx)=>{
                                    return(
                                        <div className="product" key={item.번호}>
                                            <div className="product-img-box">   
                                                <img src={`./images/main/section5/HT101/${item.이미지}`} alt="" />
                                            </div>
                                            <div className="product-text-box">
                                                <div className="row1">
                                                    <span>{item.제품명}</span>
                                                </div>
                                                <div className="row2">
                                                    <strong>{Math.round(item.할인율*100)}%</strong>
                                                    <em>{Math.round(item.원가*(1-item.할인율)).toLocaleString('ko-KR')}원</em>
                                                    <span>{item.원가.toLocaleString('ko-KR')}원</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            {    state.cnt===2 &&
                                상품6.map((item,idx)=>{
                                    return(
                                        <div className="product" key={item.번호}>
                                            <div className="product-img-box">   
                                                <img src={`./images/main/section5/여아/${item.이미지}`} alt="" />
                                            </div>
                                            <div className="product-text-box">
                                                <div className="row1">
                                                    <span>{item.제품명}</span>
                                                </div>
                                                <div className="row2">
                                                    <strong>{Math.round(item.할인율*100)}%</strong>
                                                    <em>{Math.round(item.원가*(1-item.할인율)).toLocaleString('ko-KR')}원</em>
                                                    <span>{item.원가.toLocaleString('ko-KR')}원</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </>
                    }
                    {   
                        state.btnName==='남성' &&                    
                        <>
                            {
                                상품3.map((item,idx)=>{
                                    return(
                                        <div className="product" key={item.번호}>
                                            <div className="product-img-box">   
                                                <img src={`./images/main/section5/남성/${item.이미지}`} alt="" />
                                            </div>
                                            <div className="product-text-box">
                                                <div className="row1">
                                                    <span>{item.제품명}</span>
                                                </div>
                                                <div className="row2">
                                                    <strong>{Math.round(item.할인율*100)}%</strong>
                                                    <em>{Math.round(item.원가*(1-item.할인율)).toLocaleString('ko-KR')}원</em>
                                                    <span>{item.원가.toLocaleString('ko-KR')}원</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            {    (state.cnt===2 || state.cnt===3) &&
                                상품1.map((item,idx)=>{
                                    return(
                                        <div className="product" key={item.번호}>
                                            <div className="product-img-box">   
                                                <img src={`./images/main/section5/전체/${item.이미지}`} alt="" />
                                            </div>
                                            <div className="product-text-box">
                                                <div className="row1">
                                                    <span>{item.제품명}</span>
                                                </div>
                                                <div className="row2">
                                                    <strong>{Math.round(item.할인율*100)}%</strong>
                                                    <em>{Math.round(item.원가*(1-item.할인율)).toLocaleString('ko-KR')}원</em>
                                                    <span>{item.원가.toLocaleString('ko-KR')}원</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            {    state.cnt===3 &&
                                상품2.map((item,idx)=>{
                                    return(
                                        <div className="product" key={item.번호}>
                                            <div className="product-img-box">   
                                                <img src={`./images/main/section5/HT101/${item.이미지}`} alt="" />
                                            </div>
                                            <div className="product-text-box">
                                                <div className="row1">
                                                    <span>{item.제품명}</span>
                                                </div>
                                                <div className="row2">
                                                    <strong>{Math.round(item.할인율*100)}%</strong>
                                                    <em>{Math.round(item.원가*(1-item.할인율)).toLocaleString('ko-KR')}원</em>
                                                    <span>{item.원가.toLocaleString('ko-KR')}원</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </>
                    }
                    {   
                        state.btnName==='여성' &&                    
                        <>
                            {
                                상품4.map((item,idx)=>{
                                    return(
                                        <div className="product" key={item.번호}>
                                            <div className="product-img-box">   
                                                <img src={`./images/main/section5/여성/${item.이미지}`} alt="" />
                                            </div>
                                            <div className="product-text-box">
                                                <div className="row1">
                                                    <span>{item.제품명}</span>
                                                </div>
                                                <div className="row2">
                                                    <strong>{Math.round(item.할인율*100)}%</strong>
                                                    <em>{Math.round(item.원가*(1-item.할인율)).toLocaleString('ko-KR')}원</em>
                                                    <span>{item.원가.toLocaleString('ko-KR')}원</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            {    (state.cnt===2 || state.cnt===3) &&
                                상품5.map((item,idx)=>{
                                    return(
                                        <div className="product" key={item.번호}>
                                            <div className="product-img-box">   
                                                <img src={`./images/main/section5/남아/${item.이미지}`} alt="" />
                                            </div>
                                            <div className="product-text-box">
                                                <div className="row1">
                                                    <span>{item.제품명}</span>
                                                </div>
                                                <div className="row2">
                                                    <strong>{Math.round(item.할인율*100)}%</strong>
                                                    <em>{Math.round(item.원가*(1-item.할인율)).toLocaleString('ko-KR')}원</em>
                                                    <span>{item.원가.toLocaleString('ko-KR')}원</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            {    state.cnt===3 &&
                                상품6.map((item,idx)=>{
                                    return(
                                        <div className="product" key={item.번호}>
                                            <div className="product-img-box">   
                                                <img src={`./images/main/section5/여아/${item.이미지}`} alt="" />
                                            </div>
                                            <div className="product-text-box">
                                                <div className="row1">
                                                    <span>{item.제품명}</span>
                                                </div>
                                                <div className="row2">
                                                    <strong>{Math.round(item.할인율*100)}%</strong>
                                                    <em>{Math.round(item.원가*(1-item.할인율)).toLocaleString('ko-KR')}원</em>
                                                    <span>{item.원가.toLocaleString('ko-KR')}원</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </>
                    }
                    {   
                        state.btnName==='남아' &&                    
                        <>
                            {
                                상품5.map((item,idx)=>{
                                    return(
                                        <div className="product" key={item.번호}>
                                            <div className="product-img-box">   
                                                <img src={`./images/main/section5/남아/${item.이미지}`} alt="" />
                                            </div>
                                            <div className="product-text-box">
                                                <div className="row1">
                                                    <span>{item.제품명}</span>
                                                </div>
                                                <div className="row2">
                                                    <strong>{Math.round(item.할인율*100)}%</strong>
                                                    <em>{Math.round(item.원가*(1-item.할인율)).toLocaleString('ko-KR')}원</em>
                                                    <span>{item.원가.toLocaleString('ko-KR')}원</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                       
                            {    (state.cnt===2 || state.cnt===3) &&
                                상품2.map((item,idx)=>{
                                    return(
                                        <div className="product" key={item.번호}>
                                            <div className="product-img-box">   
                                                <img src={`./images/main/section5/HT101/${item.이미지}`} alt="" />
                                            </div>
                                            <div className="product-text-box">
                                                <div className="row1">
                                                    <span>{item.제품명}</span>
                                                </div>
                                                <div className="row2">
                                                    <strong>{Math.round(item.할인율*100)}%</strong>
                                                    <em>{Math.round(item.원가*(1-item.할인율)).toLocaleString('ko-KR')}원</em>
                                                    <span>{item.원가.toLocaleString('ko-KR')}원</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            {    state.cnt===3 &&
                                상품3.map((item,idx)=>{
                                    return(
                                        <div className="product" key={item.번호}>
                                            <div className="product-img-box">   
                                                <img src={`./images/main/section5/남성/${item.이미지}`} alt="" />
                                            </div>
                                            <div className="product-text-box">
                                                <div className="row1">
                                                    <span>{item.제품명}</span>
                                                </div>
                                                <div className="row2">
                                                    <strong>{Math.round(item.할인율*100)}%</strong>
                                                    <em>{Math.round(item.원가*(1-item.할인율)).toLocaleString('ko-KR')}원</em>
                                                    <span>{item.원가.toLocaleString('ko-KR')}원</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </>
                    }  
                    {   
                        state.btnName==='여아' &&                    
                        <>
                            {
                                상품6.map((item,idx)=>{
                                    return(
                                        <div className="product" key={item.번호}>
                                            <div className="product-img-box">   
                                                <img src={`./images/main/section5/여아/${item.이미지}`} alt="" />
                                            </div>
                                            <div className="product-text-box">
                                                <div className="row1">
                                                    <span>{item.제품명}</span>
                                                </div>
                                                <div className="row2">
                                                    <strong>{Math.round(item.할인율*100)}%</strong>
                                                    <em>{Math.round(item.원가*(1-item.할인율)).toLocaleString('ko-KR')}원</em>
                                                    <span>{item.원가.toLocaleString('ko-KR')}원</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                       
                            {    (state.cnt===2 || state.cnt===3) &&
                                상품1.map((item,idx)=>{
                                    return(
                                        <div className="product" key={item.번호}>
                                            <div className="product-img-box">   
                                                <img src={`./images/main/section5/전체/${item.이미지}`} alt="" />
                                            </div>
                                            <div className="product-text-box">
                                                <div className="row1">
                                                    <span>{item.제품명}</span>
                                                </div>
                                                <div className="row2">
                                                    <strong>{Math.round(item.할인율*100)}%</strong>
                                                    <em>{Math.round(item.원가*(1-item.할인율)).toLocaleString('ko-KR')}원</em>
                                                    <span>{item.원가.toLocaleString('ko-KR')}원</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            {    state.cnt===3 &&
                                상품3.map((item,idx)=>{
                                    return(
                                        <div className="product" key={item.번호}>
                                            <div className="product-img-box">   
                                                <img src={`./images/main/section5/남성/${item.이미지}`} alt="" />
                                            </div>
                                            <div className="product-text-box">
                                                <div className="row1">
                                                    <span>{item.제품명}</span>
                                                </div>
                                                <div className="row2">
                                                    <strong>{Math.round(item.할인율*100)}%</strong>
                                                    <em>{Math.round(item.원가*(1-item.할인율)).toLocaleString('ko-KR')}원</em>
                                                    <span>{item.원가.toLocaleString('ko-KR')}원</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </>
                    }  
                    
                </div>
                {state.btnName!=='HT101' &&
                    <div className="button-box">
                        <button onClick={onClick13456}>
                            <span>더보기<em>{(`${state.cnt}/3`)}</em><i class="material-icons">keyboard_arrow_down</i></span>
                        </button>
                    </div>
                }
                {state.btnName==='HT101' &&
                    <div className="button-box">
                        <button onClick={onClick2}>
                            <span>더보기<em>{(`${state.cnt}/2`)}</em><i class="material-icons">keyboard_arrow_down</i></span>
                        </button>
                    </div>
                }
            </div>
        </div>
    );
};
