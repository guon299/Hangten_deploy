import React from 'react';
import Sub11NoticeTabMenuComponent from './Sub11NoticeTabMenuComponent.jsx';
import './scss/sub11.scss';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUpConfirmModal } from '../../reducer/signUpConfirmModal.js';

export default function Sub11NoticeInsertComponent(){

    const selector = useSelector((state)=>state);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [state, setState] = React.useState({
        제목: '',
        작성자: selector.signIn.로그인정보.이름,
        아이디: selector.signIn.로그인정보.아이디,
        내용: ''
    });

    const onChangeNSubject=(e)=>{
        setState({
            ...state,
            제목: e.target.value
        });
    }

    const onChangeNContent=(e)=>{
        setState({
            ...state,
            내용: e.target.value
        });
    }

    const SignUpConfirmModalMethod=(msg)=>{
        const obj = {
            signUpIsConfirmModal: true,
            signUpConfirmMsg: msg,
            userList:false
        }
        dispatch(signUpConfirmModal(obj));
        const htmlEl = document.getElementsByTagName('html')[0];
        htmlEl.classList.add('on');
    }

    const onSubmitInsertForm=(e)=>{
        e.preventDefault();
        if(state.제목===''){
            SignUpConfirmModalMethod('제목을 입력해주세요');
        }
        else if(state.내용===''){
            SignUpConfirmModalMethod('내용을 입력해주세요');
        }
        else {
            let formData = new FormData();
            formData.append('nSubject', state.제목);
            formData.append('nName', state.작성자);
            formData.append('nId', state.아이디);
            formData.append('nContent', state.내용);
            axios({
                url: 'http://kkoma1221.dothome.co.kr/hangten/hangten_notice_table_insert.php',
                method: 'POST',
                data: formData
            })
            .then((res)=>{
                if(res.status===200){
                    //console.log(res);
                    if(res.data===1){
                        SignUpConfirmModalMethod('공지사항이 등록되었습니다.');
                    }
                    else if(res.data===0){
                        SignUpConfirmModalMethod('공지사항 등록에 실패하였습니다. 확인하고 다시 시도하세요');
                    }
                }
            })
            .catch((err)=>{
                console.log(err);
            })
        }
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
                        <div className="insert-form">
                            <form action="" onSubmit={onSubmitInsertForm}>
                                <ul className='list'>
                                    <li className='list-header'>
                                        <ul className='insert-ul'>
                                            <li className='col1'><h3>TITLE</h3></li>
                                            <li className='col2'>
                                                <input
                                                    type="text"
                                                    name='nSubject'
                                                    id='nSubject'
                                                    value={state.제목}
                                                    placeholder='제목을 입력해주세요'
                                                    onChange={onChangeNSubject}
                                                />
                                            </li>
                                        </ul>
                                    </li>
                                    <li className='list-header'>
                                        <ul className='insert-ul'>
                                            <li className='col1'><h3>이름</h3></li>
                                            <li className='col2'><span>{state.작성자}</span></li>
                                        </ul>
                                    </li>
                                    <li className='list-header'>
                                        <ul className='insert-ul'>
                                            <li className='col1'><h3>아이디</h3></li>
                                            <li className='col2'><span>{state.아이디}</span></li>
                                        </ul>
                                    </li>
                                    <li className='list-header'>
                                        <ul className="contents">
                                            <li className='col1'><h3>내용</h3></li>
                                            <li className='col2'>
                                                <textarea name="nContent" id="nContent" cols="30" rows="10" value={state.내용} onChange={onChangeNContent}></textarea>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <div className="button-box">
                                    <button type='submit'>등록</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
