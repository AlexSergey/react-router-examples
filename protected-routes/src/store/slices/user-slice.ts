import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from '../index';

interface UserState {
  authorized: boolean
}

const initialState = { authorized: false } as UserState

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state) {
      state.authorized = true;
    },
    logout(state) {
      state.authorized = false;
    },
  },
})

export const { login, logout } = userSlice.actions;

export const useUser = (): [boolean, () => void, () => void] => {
  const dispatcher = useDispatch();
  const user = useSelector<IStore, boolean>((state) => state.userReducer.authorized);

  const loginFn = () => dispatcher(login());

  const logoutFn = () => dispatcher(logout());

  return [user, loginFn, logoutFn];
}

export const userReducer = userSlice.reducer;
