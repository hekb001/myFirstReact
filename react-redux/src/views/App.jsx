import React, { Component, useState, useEffect } from 'react';
import { Link, browserHistory } from 'react-router';
import { Button } from 'antd'
import { FormattedMessage } from 'react-intl';
import cookie from 'js-cookie';
import '../assets/styles/index.less';
const langType = cookie.get('langType');
export default function App() {
  const goHome = () => {
    browserHistory.push('/home')
  }
  //切换语言
  const changeLanguage = (type) => {
    cookie.set('langType', type)
    location.reload();
  }
  useEffect(() => {

  });
  return (
    <div className="App">
      <div>
        <Button onClick={() => changeLanguage('1')} type='primary' >切换中文</Button>
        <Button onClick={() => changeLanguage('2')}>切换英文</Button>
      </div>
      <div className='ml-5'>
        {/* 动态传值 */}
        <FormattedMessage id='home.item1' values={{ name: langType == '1' ? '何凯兵' : 'kevin' }} />
      </div>
      <div onClick={goHome}>
        <FormattedMessage id='home.item2' />
      </div>
    </div>
  );
}