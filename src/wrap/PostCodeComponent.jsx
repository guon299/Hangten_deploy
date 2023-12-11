import React from 'react';
import PostCode from 'react-daum-postcode';
import './scss/PostcodeComponent.scss';
import { useDispatch } from 'react-redux';
import { address } from '../reducer/address';
import { isAddress } from '../reducer/isAddress';
import { data } from 'jquery';

export default function PostcodeComponent () {
 
    const dispatch = useDispatch();


    const [state, setState] = React.useState({
        주소1:'',
        isAddrAPIShow: true,
        isMoreview: false,
        zonecode:''
    });





    const onCompletePostCode=(data)=>{
        let 주소1 = '';
        let 엑스트라주소 ='';
        let extraAddr = '';
        let zonecode ='';
        if(data.userSelectedType === 'R'){
            if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                extraAddr += data.bname;
            }
            if(data.buildingName !== '' && data.apartment === 'Y'){
                extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
            }
            if(extraAddr !== ''){
                extraAddr = ' (' + extraAddr + ')';
            }
            엑스트라주소 = extraAddr;

        } 
        else {
            엑스트라주소 = '';
        }
        if(data.userSelectedType==='R'){
            주소1 = `${data.roadAddress} ${엑스트라주소}`;
            zonecode = data.zonecode;
        }
        else{
            주소1 = `${data.jibunAddress}`;
            zonecode = data.zonecode;
        }
        setState({
            ...state,
            주소1: 주소1,
            zonecode:zonecode
        });
        setTimeout(()=>{
            dispatch(isAddress(false))
        },100)
    }
    React.useEffect(()=>{
        const 주소={
            주소1:state.주소1,
            zonecode:state.zonecode
        }
        dispatch(address(주소))
    },[state.주소1])
    const onClickClose=(e)=>{
        e.preventDefault();
        dispatch(isAddress(false));
 
    }

    
    const postCodeStyle={
        zIndex: 2,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: "#fff"
    }
    return (
        <div id='postCode'>
            <div className="container">
                <div className="window-title">
                    <h1>
                        <em>우편번호 검색</em>
                    </h1>
                    <button onClick={onClickClose} title='닫기'>
                        <i className="material-icons">close</i>
                    </button>
                </div>
                <div className="content">
                    {
                        state.isAddrAPIShow && (
                            <PostCode 
                                style={postCodeStyle} 
                                onComplete={onCompletePostCode}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
};
