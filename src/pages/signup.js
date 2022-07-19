import React, { useCallback, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import styled from 'styled-components';

import useInput from '../hooks/useInput';

const ErrorMessage = styled.div`
  color: red;
`;

const Signup = () => {
  const [id, onChangeId] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPassworError] = useState(false);
  
  const onChangePasswordCheck = useCallback((e) => {
    setPasswordCheck(e.target.value);
    setPassworError(password !== e.target.value);
  }, [password]);

  const [term, setTerm] = useState(false);
  const [termError, setTermError] = useState(false);

  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      setPassworError(true);
      return;
    }
    if (passwordError) {
      return;
    }
    if (!term) {
      setTermError(true);
      return;
    }
    if (termError) {
      return;
    }
    console.log(id, nickname, password);
  }, [password, passwordCheck, passwordError, term]);
  
  return (
    <Form onFinish={onSubmit}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input
          name="user-id"
          id="user-id"
          value={id}
          onChange={onChangeId}
        />
      </div>
      <div>
        <label htmlFor="user-nickname">닉네임</label>
        <br />
        <Input
          name="user-nickname"
          id="user-nickname"
          value={nickname}
          onChange={onChangeNickname}
        />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          type="password"
          name="user-password"
          id="user-password"
          value={password}
          onChange={onChangePassword}
        />
      </div>
      <div>
        <label htmlFor="user-password-check">비밀번호체크</label>
        <br />
        <Input
          type="password"
          name="user-password-check"
          id="user-password-check"
          value={passwordCheck}
          onChange={onChangePasswordCheck}
        />
        {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
      </div>
      <div>
        <Checkbox
          name="user-term"
          checked={term}
          onChange={onChangeTerm}
        >
          말을 잘 들을 것을 동의합니다.
        </Checkbox>
        {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
      </div>
      <div style={{ marginTop: 10 }}>
        <Button type="primary" htmlType="submit">가입하기</Button>
      </div>
    </Form>
  );
};

export default Signup;
