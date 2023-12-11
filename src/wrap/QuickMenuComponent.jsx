import React from 'react';
import './scss/QuickMenu.scss';
import { useDispatch, useSelector } from 'react-redux';
import { isSearchModal } from '../reducer/searchModal';
import { useNavigate } from 'react-router-dom';

export default function QuickMenuComponent(){

    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);
    const navigate = useNavigate();

    const onClickSearchBtn=(e)=>{
        e.preventDefault();
        let obj = !selector.searchModal.isSearchModal
        dispatch(isSearchModal(obj));
    }

    const onClickGoNotice=(e)=>{
        e.preventDefault();
        navigate("/sub11Notice");
    }

    React.useEffect(()=>{
        const quickMenu = document.getElementById('quickMenu');
        setTimeout(()=>{
            quickMenu.classList.add('ani');
        },1500);
    },[]);

    return (
        <div id='quickMenu'>
            <div className="container">
                <ul>
                    <li>
                        <a href="!#" onClick={onClickGoNotice} ><img src="./images/modal/icon_side_01.png" alt="" /><span>게시판</span></a>
                    </li>
                    <li>
                        <a href="!#"><img src="./images/modal/icon_side_03.png" alt="" /><span>행텐</span><span>매장안내</span></a>
                    </li>
                    <li>
                        <a href="!#"><img src="./images/modal/icon_side_03.png" alt="" /><span>행텐틴즈</span><span>매장안내</span></a>
                    </li>
                    <li>
                        <a href="!#" onClick={onClickSearchBtn}><img src="./images/modal/icon_side_04.png" alt="" /><span>검색</span></a>
                    </li>
                </ul>
            </div>
        </div>
    );
};