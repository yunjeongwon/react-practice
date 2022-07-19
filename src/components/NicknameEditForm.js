import React, { useCallback, useMemo } from 'react';
import { Form, Input } from 'antd';
import { useDispatch } from 'react-redux';

import useInput from '../hooks/useInput';
import { changeNickname } from '../features/user/userSlice';

const NicknameEditForm = () => {
  const dispatch = useDispatch();
  // const { nickname } = useSelector((state) => state.user.);

  const [inputNickname, onChangeInputNickname] = useInput('');

  const style = useMemo(() => ({
    marginBottom: '20px',
    border: '1px solid #d9d9d9',
    padding: '20px',
  }), []);

  const onSubmit = useCallback(() => {
    dispatch(changeNickname(inputNickname));
  }, [inputNickname]);

  return (
    <Form style={style} onFinish={onSubmit}>
      <Input.Search value={inputNickname} onChange={onChangeInputNickname} addonBefore="닉네임" enterButton="수정" />
    </Form>
  );
};

export default NicknameEditForm;
