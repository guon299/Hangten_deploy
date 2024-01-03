import React from 'react';
import axios from 'axios';
import Sub10UserListComponentChild from './Sub10UserListComponentChild';
import './scss/sub10UserList.scss'
import { useDispatch,useSelector } from 'react-redux';
import { signUpConfirmModal } from '../../reducer/signUpConfirmModal';

export default function Sub10UserListComponent() {

    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);

    const[state,setState]=React.useState({
        arr:[]
    })

    React.useEffect(()=>{
        axios({
            url:'http://answotlr12.dothome.co.kr/hangten/hangten_user_list.php',
            method:'GET'
        })
        .then((res)=>{
            let arr=[];
            if(res.data.length>0){
                arr=(res.data.map((item)=>item))
                setState({
                    ...state,
                    arr:arr
                })
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

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

    const onClickDelete=(e,idx)=>{
        e.preventDefault();
        let 결과 = [];
        결과=state.arr.map((item)=>item.아이디)
        console.log(결과[idx])
        let formData= new FormData();
        formData.append('userId',결과[idx]);
        axios({
            url:'http://answotlr12.dothome.co.kr/hangten/hangten_admin_user_list_delete.php',
            method:'POST',
            data:formData
        })
        .then((res)=>{
            if(res.data===1){
                SignUpConfirmModalMethod('삭제가완료되었습니다.')
            }
            else{
            }
        })
        .catch((err)=>{
            console.log('실패')
        })
    }
    return (
        <div id='sub10UserList'>
            <ul>
                <ul>
                    <li>
                        <p>아이디</p>
                    </li>
                    <li>
                        <p>비밀번호</p>
                    </li>
                    <li>
                        <p>이름</p>
                    </li>
                    <li>
                        <p>이메일</p>
                    </li>
                    <li>
                        <p>휴대폰</p>
                    </li>
                    <li>
                        <p>주소</p>
                    </li>
                    <li>
                        <p>성별</p>
                    </li>
                    <li>
                        <p>생년월일</p>
                    </li>
                    <li>
                        <p>동의</p>
                    </li>
                    <li>
                        <p>가입날짜</p>
                    </li>
                    <li>
                        <p>삭제</p>
                    </li>
                </ul>
                {   state.arr.map((item,idx)=>{
                    return(
                        <div className="list" key={idx}>
                             <li>
                                <p>{item.아이디}</p>
                            </li>
                            <li>
                                <p>{item.비밀번호}</p>
                            </li>
                            <li>
                                <p>{item.이름}</p>
                            </li>
                            <li>
                                <p>{item.이메일}</p>
                            </li>
                            <li>
                                <p>{item.휴대폰}</p>
                            </li>
                            <li>
                                <p>{item.주소}</p>
                            </li>
                            <li>
                                <p>{item.성별}</p>
                            </li>
                            <li>
                                <p>{item.생년월일}</p>
                            </li>
                            <li>
                                <p>{item.동의}</p>
                            </li>
                            <li>
                                <p>{item.가입날짜}</p>
                            </li>
                            <li>
                                <img onClick={(e)=>onClickDelete(e,idx)} src="./images/sub/sub10/창닫기.png" alt="" />
                                {/* a target="_blank" href="https://icons8.com/icon/23537/%EC%B0%BD-%EB%8B%AB%EA%B8%B0">창 닫기</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
                            </li>
                        </div>
                        )
                    })
                }
            </ul>
        </div>
    );
};
