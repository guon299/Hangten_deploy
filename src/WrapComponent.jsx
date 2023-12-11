import React from "react";
import {HashRouter, Routes, Route} from 'react-router-dom';
import HeaderComponent from './wrap/HeaderComponent';
import MainComponent from './wrap/MainComponent';
import QuickMenuComponent from './wrap/QuickMenuComponent';
import GoTopComponent from './wrap/GoTopComponent';
import PostcodeComponent from "./wrap/PostCodeComponent.jsx";
import ConfirmModalComponent from "./wrap/ConfirmModalComponent.jsx";
import Sub1Component from "./wrap/sub/Sub1Component";
import Sub2Component from "./wrap/sub/Sub2Component";
import Sub3Component from "./wrap/sub/Sub3Component";
import Sub4Component from "./wrap/sub/Sub4Component";
import Sub5Component from "./wrap/sub/Sub5Component";
import Sub6Component from "./wrap/sub/Sub6Component";
import Sub7Component from "./wrap/sub/Sub7Component";
import Sub7SignUpComponent from "./wrap/sub/Sub7SignUpComponent";
import Sub7AdminSignUpComponent from "./wrap/sub/Sub7AdminSignUpComponent";
import Sub7SignUpOkComponent from "./wrap/sub/Sub7SignUpOkComponent";
import Sub8Component from "./wrap/sub/Sub8Component.jsx";
import Sub8AdminComponent from "./wrap/sub/Sub8AdminComponent.jsx";
import Sub8SearchIdComponent from "./wrap/sub/Sub8SearchIdComponent.jsx";
import Sub8SearchPwComponent from "./wrap/sub/Sub8SearchPwComponent.jsx";
import Sub8SearchIdResultComponent from './wrap/sub/Sub8SearchIdResultComponent.jsx';
import Sub8SearchPwResultComponent from "./wrap/sub/Sub8SearchPwResultComponent.jsx";
import Sub9Component from "./wrap/sub/Sub9Component";
import Sub10Component from "./wrap/sub/Sub10Component";
import Sub11NoticeComponent from "./wrap/sub/Sub11NoticeComponent.jsx";
import Sub11NoticeViewComponent from "./wrap/sub/Sub11NoticeViewComponent.jsx";
import Sub11NoticeInsertComponent from "./wrap/sub/Sub11NoticeInsertComponent.jsx";
import Sub11NoticeUpdateComponent from "./wrap/sub/Sub11NoticeUpdateComponent.jsx";
import Sub12Component from "./wrap/sub/Sub12Component";
import FooterComponent from './wrap/FooterComponent';
import SearchModalComponent from "./wrap/SearchModalComponent";
import HpComponent from './wrap/HpComponent'
import { useSelector, useDispatch } from "react-redux";
import { isSearchModal } from "./reducer/searchModal";
import { signIn } from "./reducer/signIn";

export default function WrapComponent(){

    const dispatch = useDispatch();

    const selector = useSelector((state)=>state);

    React.useEffect(()=>{
        dispatch(isSearchModal(false))
    },[window.location.pathname])

    // 새로고침해도 로그인 정보 유지
    React.useEffect(()=>{
        if(sessionStorage.getItem('HANGTEN_SIGNIN_INFORMATION')!==null){
            const result = JSON.parse(sessionStorage.getItem('HANGTEN_SIGNIN_INFORMATION'));
            console.log(result);
            dispatch(signIn(result));
        }
    },[]);

    return (
        <div id="wrap">
                <HashRouter>
                    <Routes>
                        <Route path="/" element={<HeaderComponent />}>
                            <Route index element={ <MainComponent /> } />                        
                            <Route path="/index" element={ <MainComponent /> } />           
                            <Route path="/sub1" element={ <Sub1Component /> }/>
                            <Route path="/sub2" element={ <Sub2Component /> }/>
                            <Route path="/sub3" element={ <Sub3Component /> }/>
                            <Route path="/sub4" element={ <Sub4Component /> }/>
                            <Route path="/sub5" element={ <Sub5Component /> }/>
                            <Route path="/sub6" element={ <Sub6Component /> }/>
                            <Route path="/sub7" element={ <Sub7Component /> }/>
                            <Route path="/sub7SignUp" element={ <Sub7SignUpComponent /> }/>
                            <Route path="/sub7AdminSignUp" element={ <Sub7AdminSignUpComponent /> }/>
                            <Route path="/sub7SignUpOk" element={ <Sub7SignUpOkComponent /> }/>
                            <Route path="/sub8" element={ <Sub8Component /> }/>
                            <Route path="/sub8Admin" element={ <Sub8AdminComponent /> }/>
                            <Route path="/sub8SearchId" element={ <Sub8SearchIdComponent />} />
                            <Route path="/sub8SearchPw" element={ <Sub8SearchPwComponent />} />
                            <Route path="/sub8SearchIdResult" element={ <Sub8SearchIdResultComponent />} />
                            <Route path="/sub8SearchPwResult" element={ <Sub8SearchPwResultComponent />} />
                            <Route path="/sub9" element={ <Sub9Component /> }/>
                            <Route path="/sub10" element={ <Sub10Component /> }/>
                            <Route path="/sub11Notice" element={ <Sub11NoticeComponent /> }/>
                            <Route path="/sub11NoticeView" element={<Sub11NoticeViewComponent />} />
                            <Route path="/sub11NoticeInsert" element={<Sub11NoticeInsertComponent />} />
                            <Route path="/sub11NoticeUpdate" element={<Sub11NoticeUpdateComponent />} />
                            <Route path="/sub12" element={ <Sub12Component /> }/>
                        </Route>
                    </Routes>
                        <QuickMenuComponent />
                        <FooterComponent />
                </HashRouter>

                <GoTopComponent />

                {
                    selector.searchModal.isSearchModal && (<SearchModalComponent />)
                }
                {
                    selector.isAddress.isAddress && <PostcodeComponent/>
                }
                {   selector.confirmModal.isConfirmModal &&
                    <ConfirmModalComponent/>
                }
                {
                    selector.hpconfirmModal.isHpConfirmModal &&
                    <HpComponent />
                }

        </div>
    )
}
