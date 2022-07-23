import React from 'react';
import {
  BrowserRouter, Link, Routes, Route,
} from 'react-router-dom';
import {
  Menu, Input, Row, Col,
} from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Index from './pages/index';
import Profile from './pages/profile';
import Signup from './pages/signup';
import UserProfile from './components/UserProfile';
import LogInForm from './components/LogInForm';

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const items = [
  { label: <Link to="/">노드버드</Link>, key: 'home' },
  { label: <Link to="/profile">프로필</Link>, key: 'profile' },
  { label: <SearchInput enterButton />, key: 'search' },
  { label: <Link to="/signup">회원가입</Link>, key: 'signup' },
];

const App = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      <Menu mode="horizontal" items={items} />
      <Row gutter={8}>
        <Col xs={24} md={6}>
          { isLoggedIn ? <UserProfile /> : <LogInForm /> }
        </Col>
        <Col xs={24} md={12}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Col>
        <Col xs={24} md={6}>
          오른쪽 메뉴
        </Col>
      </Row>
    </BrowserRouter>
  );
};

export default App;
