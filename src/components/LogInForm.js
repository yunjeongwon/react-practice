import React, {
  useState, useCallback,
} from 'react';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { logIn } from '../features/user/userSlice';

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const LogInForm = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const onSubmitForm = useCallback(() => {
    // console.log(id, password);
    dispatch(logIn({ id, password }));
  }, [id, password]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">
          아이디:
          <Input
            name="user-id"
            value={id}
            onChange={onChangeId}
            required
          />
        </label>
        <br />
      </div>
      <div>
        <label htmlFor="user-password">
          비밀번호:
          <Input
            type="password"
            name="user-password"
            value={password}
            onChange={onChangePassword}
            required
          />
        </label>
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
        <Link to="/signup">회원가입</Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default LogInForm;
