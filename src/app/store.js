import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../features/user/userSlice';
import postReducer from '../features/post/postSlice';


// export const changeNickname = createAction('CHANGE_NICKNAME');
// export const logIn = createAction('LOG_IN');
// export const logOut = createAction('LOG_OUT');

// const initialState = {
//   user: {
//     isLoggedIn: false,
//     user: null,
//     signUpData: {},
//     logInData: {},
//   },
//   post: {
//     mainPosts: [],
//   },
// };

// const userReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(logIn, (state, action) => {
//       console.log(action.payload);
//       state.user.isLoggedIn = true;
//       state.user.user = action.payload;
//     })
//     .addCase(logOut, (state) => {
//       state.user.isLoggedIn = false;
//       state.user.user = null;
//     })
// });

export const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
  },
});
