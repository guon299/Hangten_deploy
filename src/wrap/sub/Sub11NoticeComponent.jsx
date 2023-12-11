import React from 'react';
import './scss/sub11.scss';
import axios from 'axios';
import Sub11NoticeComponentChild from './Sub11NoticeComponentChild.jsx';

export default function Sub11NoticeComponent() {

    const [state, setState] = React.useState({
        공지사항: [],
        isValue: '공지사항'
    });

    const onClickTabBtn=(e, el)=>{
        e.preventDefault();
        let isValue = '';
        if(el==='공지사항'){
            isValue = '공지사항';
        }
        else if(el==='QAndA'){
            isValue = 'QAndA';
        }
        else if(el==='Review'){
            isValue = 'Review';
        }
        else if(el==='이벤트'){
            isValue = '이벤트';
        }
        else if(el==='매장안내행텐'){
            isValue = '매장안내행텐';
        }
        else if(el==='매장안내행텐틴즈'){
            isValue = '매장안내행텐틴즈';
        }
        setState({
            ...state,
            isValue: isValue
        });
    }

    React.useEffect(()=>{
        axios({
            url: 'https://agnusdeistore.com/hangten/hangten_notice_table_select.php',
            method: 'GET'
        })
        .then((res)=>{
            if(res.status===200){
                //console.log(res.data);
                setState({
                    ...state,
                    공지사항: res.data
                });
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    },[]);

    return (
        <div id='sub11Notice'>
            <section id="sub11Section1">
                <div className="container">
                    <div className="title">
                        <h2>고객센터</h2>
                    </div>
                    <div className="content">

                        <div className="tab-menu">
                            <ul>
                                <li className={state.isValue==='공지사항'?'on':''}><a href="!#" onClick={(e)=>onClickTabBtn(e, '공지사항')}>공지사항</a></li>
                                <li className={state.isValue==='QAndA'?'on':''}><a href="!#" onClick={(e)=>onClickTabBtn(e, 'QAndA')}>Q&A</a></li>
                                <li className={state.isValue==='Review'?'on':''}><a href="!#" onClick={(e)=>onClickTabBtn(e, 'Review')}>Review</a></li>
                                <li className={state.isValue==='이벤트'?'on':''}><a href="!#" onClick={(e)=>onClickTabBtn(e, '이벤트')}>이벤트</a></li>
                                <li className={state.isValue==='매장안내행텐'?'on':''}><a href="!#" onClick={(e)=>onClickTabBtn(e, '매장안내행텐')}>매장안내&gt;행텐</a></li>
                                <li className={state.isValue==='매장안내행텐틴즈'?'on':''}><a href="!#" onClick={(e)=>onClickTabBtn(e, '매장안내행텐틴즈')}>매장안내&gt;행텐틴즈</a></li>
                            </ul>
                        </div>
                        <Sub11NoticeComponentChild 공지사항={state.공지사항} isValue={state.isValue}/>
                    </div>
                </div>
            </section>
        </div>
    );
};
