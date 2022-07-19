import React from 'react';

import FollowList from '../components/FollowList';
import NicknameEditForm from '../components/NicknameEditForm';

const Profile = () => {
  const followerList = [{ nickname: '제로초' }, { nickname: '바보' }, { nickname: '노드버드' }];
  const followingList = [{ nickname: '제로초' }, { nickname: '바보' }, { nickname: '노드버드' }];
  return (
    <>
      <NicknameEditForm />
      <FollowList header="팔로워 목록" data={followerList} />
      <FollowList header="팔로잉 목록" data={followingList} />
    </>
  );
};

export default Profile;
