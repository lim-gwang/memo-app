import React, { useState } from 'react'
import { Route, Switch } from 'react-router';
import { Link, useHistory } from 'react-router-dom';
import Layout from './layout/Layout';
import Login from './layout/Login';

function App() {
  const [ response, setresponse ] = useState({
    memos: [],
    responseURL: '',
  });

  const loginData = (memos, responseURL) => {
    setresponse({memos, responseURL});
  }
  return (
    <>
      <Switch>
        <Route exact={true} path="/" render={()=> {
          return <Login loginData={loginData}/>
        }}/>
        <Route path='/memo' render={()=> {
          return <Layout memos={response.memos}/>
        }}/>
        <Route render={()=>{
          return (
            <>
              <h1>잘못된 경로입니다. </h1>
              <Link to="/">
                메인 페이지로 이동하기
              </Link>
            </>
          )
        }}/>
      </Switch>
      
    </>
  );
}

export default App;
