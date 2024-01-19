import React from 'react';
import '../wrap/scss/SignUpConfirmModal.scss';
import { useDispatch, useSelector } from 'react-redux';
import { signUpConfirmModal } from '../reducer/signUpConfirmModal';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../reducer/signIn';

export default function SignUpConfirmModalComponent()  {

    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);
    const navigate = useNavigate();

    const onClickCloseBtn=(e)=>{
        e.preventDefault();
        if(selector.signUpConfirmModal.signUpConfirmMsg ==='정말 삭제하시겠습니까?'){
            const obj = {
                signUpIsConfirmModal: false,
                signUpConfirmMsg: ''
            }
            dispatch(signUpConfirmModal(obj)); 
            alert('삭제')
        }
        else if(selector.signUpConfirmModal.signUpConfirmMsg ==='비밀번호를 변경하시겠습니까?'){
            const obj = {
                signUpIsConfirmModal: true,
                signUpConfirmMsg: '비밀번호를 변경하였습니다.'
            }
            dispatch(signUpConfirmModal(obj));
        }
        else if(selector.signUpConfirmModal.signUpConfirmMsg === '비밀번호를 변경하였습니다.'){
            const obj = {
                signUpIsConfirmModal: false,
                signUpConfirmMsg: ''
            }
            dispatch(signUpConfirmModal(obj));
            navigate('/sub8');
        }
        else if(selector.signUpConfirmModal.signUpConfirmMsg === '임시 비밀번호를 전송하였습니다. 확인하고 로그인하세요.'){
            const obj = {
                signUpConfirmModal: false,
                signUpConfirmMsg: ''
            }
            dispatch(signUpConfirmModal(obj));
            navigate('/sub8');
        }
        else if(selector.signUpConfirmModal.signUpConfirmMsg === '공지사항이 등록되었습니다.'){
            const obj = {
                signUpConfirmModal: false,
                signUpConfirmMsg: ''
            }
            dispatch(signUpConfirmModal(obj));
            setTimeout(()=>{
                navigate('/sub11Notice');
            },100);
        }
        else if(selector.signUpConfirmModal.signUpConfirmMsg === '공지사항을 수정하시겠습니까?'){
            const obj = {
                signUpIsConfirmModal: true,
                signUpConfirmMsg: '공지사항을 수정하였습니다.'
            }
            dispatch(signUpConfirmModal(obj));
        }
        else if(selector.signUpConfirmModal.signUpConfirmMsg === '공지사항을 수정하였습니다.'){
            const obj = {
                signUpConfirmModal: false,
                signUpConfirmMsg: ''
            }
            dispatch(signUpConfirmModal(obj));
            setTimeout(()=>{
                navigate('/sub11Notice');
            },100);
        }
        else if(selector.signUpConfirmModal.signUpConfirmMsg === '공지사항을 삭제하시겠습니까?'){
            const obj = {
                signUpIsConfirmModal: true,
                signUpConfirmMsg: '공지사항을 삭제하였습니다.'
            }
            dispatch(signUpConfirmModal(obj));
        }
        else if(selector.signUpConfirmModal.signUpConfirmMsg === '공지사항을 삭제하였습니다.'){
            const obj = {
                signUpConfirmModal: false,
                signUpConfirmMsg: ''
            }
            dispatch(signUpConfirmModal(obj));
            setTimeout(()=>{
                navigate('/sub11Notice');
            },100);
        }
        else if(selector.signUpConfirmModal.signUpConfirmMsg === '회원정보를 수정하시겠습니까?'){
            const obj = {
                signUpIsConfirmModal: true,
                signUpConfirmMsg: '회원정보 수정이 완료되었습니다.'
            }
            dispatch(signUpConfirmModal(obj));
        }
        else if(selector.signUpConfirmModal.signUpConfirmMsg === '회원정보 수정이 완료되었습니다.'){
            const obj = {
                signUpConfirmModal: false,
                signUpConfirmMsg: ''
            }
            dispatch(signUpConfirmModal(obj));
            setTimeout(()=>{
                navigate('/sub12');
            },100);
        }
        else if(selector.signUpConfirmModal.signUpConfirmMsg === '회원 탈퇴 하시겠습니까?'){
            const obj = {
                signUpIsConfirmModal: true,
                signUpConfirmMsg: '탈퇴가 완료되었습니다.'
            }
            dispatch(signUpConfirmModal(obj));
        }
        else if(selector.signUpConfirmModal.signUpConfirmMsg === '탈퇴가 완료되었습니다.'){
            const obj = {
                signUpConfirmModal: false,
                signUpConfirmMsg: ''
            }
            dispatch(signUpConfirmModal(obj));
            setTimeout(()=>{
                navigate('/index');
            },100);
        }
        else{
            const obj = {
                signUpIsConfirmModal: false,
                signUpConfirmMsg: ''
            }
            dispatch(signUpConfirmModal(obj)); 
        }
        const htmlEl = document.getElementsByTagName('html')[0];
        htmlEl.classList.remove('on');

    }
    const onClickCloseBtn1=(e)=>{
        e.preventDefault();
        const obj = {
            signUpIsConfirmModal: false,
            signUpConfirmMsg: ''
        }
        dispatch(signUpConfirmModal(obj)); 
        const htmlEl = document.getElementsByTagName('html')[0];
        htmlEl.classList.remove('on');
    }

    return (
        <div id='confirmModal'>
            <div className='container'>
                <div className='confirm-box'>
                    <ul>
                        <li>
                            <div className='message-box'>
                                <p>
                                    {selector.signUpConfirmModal.signUpConfirmMsg}
                                </p>
                            </div>                             
                        </li>
                        <li>
                            <div className='button-box'>
                                { (selector.signUpConfirmModal.signUpConfirmMsg==='정말 삭제하시겠습니까?' 
                                    || selector.signUpConfirmModal.signUpConfirmMsg==='비밀번호를 변경하시겠습니까?'
                                    || selector.signUpConfirmModal.signUpConfirmMsg === '공지사항을 수정하시겠습니까?'
                                    || selector.signUpConfirmModal.signUpConfirmMsg === '공지사항을 삭제하시겠습니까?'
                                    || selector.signUpConfirmModal.signUpConfirmMsg === '회원 탈퇴 하시겠습니까?'
                                    || selector.signUpConfirmModal.signUpConfirmMsg === '회원정보를 수정하시겠습니까?') && (
                                    <button onClick={onClickCloseBtn1}>취소</button>
                                )

                                }
                                <button onClick={onClickCloseBtn}>확인</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

