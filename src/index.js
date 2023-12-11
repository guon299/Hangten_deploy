import React from 'react';
import ReactDOM from 'react-dom/client';
import WrapComponent from './WrapComponent.jsx';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import searchModal from './reducer/searchModal.js';
import isAddress from './reducer/isAddress.js';
import address from './reducer/address.js';
import goodsPage from './reducer/goodsPageReducer.js';
import displayViewGoods  from './reducer/viewGoodsReducer.js';
import currentPageIn from './reducer/currentPageReducer.js';
import categoryIn from './reducer/categoryReducer.js';
import isCategory1In from './reducer/isCategory1Reducer.js';
import isSubMeun1In from './reducer/isSubMeun1Reducer.js';
import isSubMeun2In from './reducer/isSubMeun2Reducer.js';
import isSubMeun3In from './reducer/isSubMeun3Reducer.js';
import sub1MeunIn from './reducer/sub1SubMeunReducer.js';
import sub2MeunIn from './reducer/sub2SubMeunReducer.js';
import sub3MeunIn from './reducer/sub3SubMeunReducer.js';
import sub4MeunIn from './reducer/sub4SubMeunReducer.js';
import sub5MeunIn from './reducer/sub5SubMeunReducer.js';
import sub6MeunIn from './reducer/sub6SubMeunReducer.js';
import confirmModal from './reducer/confirmModal.js';
import hpconfirmModal from './reducer/hpConfirmModal.js';
import signIn from './reducer/signIn.js';
import hpsignDate from './reducer/hpsignDate.js';

let store = configureStore({
  reducer: {
    searchModal,
    isAddress,
    address,
    goodsPage,
    displayViewGoods,
    currentPageIn,
    categoryIn,
    isCategory1In,
    isSubMeun1In,
    isSubMeun2In,
    isSubMeun3In,
    sub1MeunIn,
    sub2MeunIn,
    sub3MeunIn,
    sub4MeunIn,
    sub5MeunIn,
    sub6MeunIn,
    confirmModal,
    signIn,
    hpconfirmModal,
    hpsignDate
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <WrapComponent />
    </Provider>
  </React.StrictMode>
);