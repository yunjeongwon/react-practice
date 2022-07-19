import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

// import userReducer from '../features/user/userSlice';
import postReducer from '../features/post/postSlice';

// export const CHANGE_NICKNAME = 'CHANGE_NICKNAME';

// export const changeNickname = (data) => {
//   return {
//     type: CHANGE_NICKNAME,
//     data,
//   };
// };

export const changeNickname = createAction('CHANGE_NICKNAME');
export const logIn = createAction('LOG_IN');

const initialState = {
  user: {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    logInData: {},
  },
  post: {
    mainPosts: [],
  },
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(logIn, (state, action) => {
      console.log(action.payload);
      state.user.user = action.payload;
      state.user.isLoggedIn = true;
    })
});

export const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
  },
});
