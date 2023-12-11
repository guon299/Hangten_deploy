import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Sub11NoticeComponentChild({공지사항, isValue}) {

    const selector = useSelector((state)=>state);
    const navigate = useNavigate();

    const onClickNoticeInsert=(e)=>{
        e.preventDefault();
        navigate('/sub11NoticeInsert');
    }

    const onClickNoticeView=(e, item)=>{
        e.preventDefault();
        navigate('/sub11NoticeView', {state:item});
        // console.log(item);
    }

    return (
        <div className="list-box">
            <div className="list-header">
                <ul className="column-box">
                    <li className='list-num'><span>번호</span></li>
                    <li className='list-jubject'><span>제목</span></li>
                    <li className='list-name'><span>이름</span></li>
                    <li className='list-date'><span>날짜</span></li>
                    <li className='list-hit'><span>조회</span></li>
                </ul>
            </div>
            <ul className="list-data">
                {   
                    공지사항.length > 0 && (
                        공지사항.map((item, idx)=>{
                            return (
                                <li key={idx}>
                                    <ul className="column-box" >
                                        <li className='list-num'><span>{item.번호}</span></li>
                                        <li className='list-jubject' onClick={(e)=>onClickNoticeView(e, item)}><span>{item.제목}</span></li>
                                        <li className='list-name'><span>{item.작성자}</span></li>
                                        <li className='list-date'><span>{`${new Date(item.작성일).getMonth()+1<10?`0${new Date(item.작성일).getMonth()+1}`:new Date(item.작성일).getMonth()+1}-${new Date(item.작성일).getDate()<10?`0${new Date(item.작성일).getDate()}`:new Date(item.작성일).getDate()}`}</span></li>
                                        <li className='list-hit'><span>{item.조회수}</span></li>
                                    </ul>
                                </li>
                            )
                        })
                    )
                }
            </ul>
            {
                (selector.signIn.로그인정보 !== null && selector.signIn.로그인정보.회원등급 === '관리자') && (
                    <div className="button-box">
                        <button onClick={onClickNoticeInsert}>글쓰기</button>
                    </div>
                )
            }
            <div className="pagination">
                <a href="!#"><img src="./images/sub/sub11/icon_prev2.png" alt="" /></a>
                <ul>
                    <li><a href="!#" className='on'>1</a></li>
                </ul>
                <a href="!#"><img src="./images/sub/sub11/icon_next2.png" alt="" /></a>
            </div>
            <div className="search-box">
                <form action="">
                    <ul>
                        <li>
                            <select name="period" id="period">
                                <option value="week">일주일</option>
                                <option value="month">한달</option>
                                <option value="3month">세달</option>
                                <option value="whole">전체</option>
                            </select>
                        </li>
                        <li>
                            <select name="searchType" id="searchType">
                                <option value="nsubject">제목</option>
                                <option value="ncontent">내용</option>
                                <option value="nName">작성자</option>
                                <option value="nId">아이디</option>
                            </select>
                        </li>
                        <li>
                            <input type="text" name='searchWord' id='searchWord'/>
                        </li>
                        <li>
                            <input type="submit" name='submitBtn' id='submitBtn' value={'찾기'}/>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    );
};
