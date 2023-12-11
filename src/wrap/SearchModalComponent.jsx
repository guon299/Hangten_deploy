import React from 'react';
import './scss/SearchModal.scss';
import { useDispatch } from 'react-redux';
import { isSearchModal } from '../reducer/searchModal';

export default function SearchModalComponent(){

    const dispatch = useDispatch();

    const [state, setState] = React.useState({
        isTop: false
    });

    React.useEffect(()=>{
        window.addEventListener('scroll', function(){
            if(window.scrollY!==0){
                setState({
                    ...state,
                    isTop: true
                });
            }
            else if(window.scrollY===0){
                setState({
                    ...state,
                    isTop: false
                });
            }
        });
    },[]);


    const onClickCloseBtn=(e)=>{
        e.preventDefault();
        dispatch(isSearchModal(false));
    }

    return (
        <div id='searchModal' className={state.isTop?'on':''}>
            <div className="container">
                <div className="filter-box">
                    <ul>
                        <li><a href="!#">플리스</a></li>
                        <li><a href="!#">패딩</a></li>
                        <li><a href="!#">웰론</a></li>
                        <li><a href="!#">기모 맨투맨</a></li>
                        <li><a href="!#">기모 데님</a></li>
                        <li><a href="!#">니트</a></li>
                    </ul>
                </div>
                <form action="">
                    <input type="text" name='keywordSearch' id='keywordSearch' placeholder='검색어를 입력하세요'/>
                </form>
                <div className="button-box">
                    <button className='close-btn' onClick={onClickCloseBtn}><span>&gt;</span></button>
                </div>
            </div>
        </div>
    );
};
