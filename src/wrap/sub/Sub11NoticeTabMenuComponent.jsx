import React from 'react';

export default function Sub11NoticeTabMenuComponent() {
    const [state, setState] = React.useState({
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

    return (
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
    );
};
