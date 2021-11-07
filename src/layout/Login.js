import React, { useState } from 'react'
import { 
  Container,
  Form,
  Button } from 'react-bootstrap'
import SignUpModal from '../modal/SignUpModal';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { login } from '../store/user/user';

const Login = ({ loginData }) => {
  // const dispatch = useDispatch(login);
  const history = useHistory();
  const [ input, setInput ] = useState({
    account: '',
    password: '',
  });

  const [signUp, setsignUp] = useState(false);

  const onChange = key => e => {
    setInput({
      ...input,
      [key]: e.target.value,
    });
  };

  const loginAction = e => {
    if (e.key !== 'Enter') return 
    // loginRequestPost()
    login(input)
      .then(res => {
        history.push("/memo");
      })
      .catch(err => {
        console.log(err);
        alert('로그인 실패!');
      })
  }

  return (
    <>
      <SignUpModal
        show={signUp}
        onHide={setsignUp}
      />
      <Container style={{
          padding: "1rem",
          maxWidth: "540px",
        }}>
        <Form>
          <h2 style={{textAlign:"center"}}>Memo</h2>
          {/* id */}
          <Form.Group className="mb-3" >
            <Form.Label>아이디</Form.Label>
            <Form.Control type="text" placeholder="아이디를 입력해주세요." value={input.account} onChange={onChange('account')}/>
          </Form.Group>
          {/* password */}
          <Form.Group className="mb-3" >
            <Form.Label>비밀번호</Form.Label>
            <Form.Control 
              type="password"
              placeholder="비밀번호를 입력해주세요."
              value={input.passowrd} 
              onChange={onChange('password')}
              onKeyDown={loginAction}
            />
          </Form.Group>
          {/* btns */}
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg" type="button" 
            onClick={() => login(input)}>
              로그인
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={()=> setsignUp(true)}
            >
              회원가입
            </Button>
          </div>
        </Form>
      </Container>
    </>
  )
}

export default Login
