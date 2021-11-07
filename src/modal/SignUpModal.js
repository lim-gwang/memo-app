import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { join } from '../store/user/user';
import { Modal, Button, Form } from "react-bootstrap"

const SignUpModal = ( {onHide, show} ) => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    account: '',
    password: '',
    passwordConfirmation: '',
  });

  const onChange = key => e => {
    setInput({
      ...input,
      [key]: e.target.value,
    });
  };

  const onSubmit = () => {
    dispatch(join(input))
      .then(res => {
        onHide(false)
        console.log(res, 'join')
        alert('회원가입이 되었습니다. 로그인 해주세요')
      })
      .catch(err => {
        alert('다시 입력해주세요.')
      })
  };

  const onKeyUp = (e) => {
    if (e.key !== 'Enter') return
    onSubmit()
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title>회원가입</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
        {/* id */}
        <Form.Group className="mb-3" >
          <Form.Label>아이디</Form.Label>
          <Form.Control
            type="text"
            placeholder="아이디를 입력해주세요."
            value={input.account}
            onChange={onChange('account')}
          />
        </Form.Group>
        {/* password */}
        <Form.Group className="mb-3" >
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={input.password}
            onChange={onChange('password')}
          />
        </Form.Group>
        {/* confirm password */}
        <Form.Group className="mb-3" >
          <Form.Label>비밀번호 확인</Form.Label>
          <Form.Control
            type="password"
            placeholder="비밀번호를 다시 입력해주세요."
            value={input.passwordConfirmation}
            onChange={onChange('passwordConfirmation')}
            onKeyUp={onKeyUp}
          />
        </Form.Group>
        {/* btn */}
        <div className="d-grid gap-2">
          <Button variant="primary" size="lg" type="button" onClick={onSubmit}>
            회원가입
          </Button>
        </div>
      </Form>
      </Modal.Body>
      
    </Modal>
  )
}

export default SignUpModal
