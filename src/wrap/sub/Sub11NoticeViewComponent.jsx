import React from 'react';
import Sub11NoticeTabMenuComponent from './Sub11NoticeTabMenuComponent.jsx';
import { useLocation, useNavigate } from 'react-router-dom';
import './scss/sub11.scss';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function Sub11NoticeViewComponent(){

    const location = useLocation();
    const navigate = useNavigate();
    const selector = useSelector((state)=>state);

    const onClickGoList=(e)=>{
        e.preventDefault();
        navigate('/sub11Notice');
    }

    const onClickUpdate=(e)=>{
        e.preventDefault();
        navigate('/sub11NoticeUpdate', {state:location.state});
    }

    const onClickDelete=(e)=>{
        e.preventDefault();
        let formData = new FormData();
        formData.append('idx', location.state.번호);
        axios({
            url: 'https://agnusdeistore.com/hangten/hangten_notice_table_delete.php',
            method: 'POST',
            data: formData
        })
        .then((res)=>{
            if(res.status===200){
                console.log(res.data);
                if(res.data===1){
                    alert('공지사항이 삭제되었습니다.');
                    navigate('/sub11Notice');
                }
                else if(res.data===0){
                    alert('공지사항을 삭제하는데 실패하였습니다.');
                }
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return (
        <div id='sub11Notice'>
            <section id="sub11Section1">
                <div className="container">
                    <div className="title">
                        <h2>고객센터</h2>
                    </div>
                    <div className="content">
                        <Sub11NoticeTabMenuComponent />
                        <div className="notice-view">
                            <ul className='list'>
                                <li className='list-header'>
                                    <ul>
                                        <li className='col1'><h3>제목</h3></li>
                                        <li className='col2'><h3>{location.state.제목}</h3></li>
                                    </ul>
                                </li>
                                <li className='list-header'>
                                    <ul>
                                        <li className='col1'><h3>이름</h3></li>
                                        <li className='col2'><h3>{location.state.작성자}</h3></li>
                                    </ul>
                                </li>
                                <li className='list-header'>
                                    <ul>
                                        <li className='col1'><h3>날짜</h3></li>
                                        <li className='col2'><h3>{`${new Date(location.state.작성일).getMonth()+1<10?`0${new Date(location.state.작성일).getMonth()+1}`:new Date(location.state.작성일).getMonth()+1}-${new Date(location.state.작성일).getDate()<10?`0${new Date(location.state.작성일).getDate()}`:new Date(location.state.작성일).getDate()}`}</h3></li>
                                    </ul>
                                </li>
                                <li className='list-header'>
                                    <ul>
                                        <li className='col1'><h3>조회</h3></li>
                                        <li className='col2'><h3>{location.state.조회수}</h3></li>
                                    </ul>
                                </li>
                                <li className='list-contents'>
                                    <div className="gap">
                                        <div className="contents">
                                            {
                                                location.state.내용.split('<br />').map((item, idx)=>{
                                                    return (
                                                        <p key={idx}>{item}</p>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="button-box">
                                {
                                    selector.signIn.로그인정보 !== null && (
                                        selector.signIn.로그인정보.회원등급 ==='관리자' && (
                                            <>
                                                <button onClick={onClickDelete}>삭제</button>
                                                <button onClick={onClickUpdate}>수정</button>
                                            </>
                                        )
                                    )
                                }
                                <button onClick={onClickGoList}>목록</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
