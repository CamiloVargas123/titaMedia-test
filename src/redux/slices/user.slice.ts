import { createSlice } from '@reduxjs/toolkit';
import { UserEmptyState } from '../../models';
import { RootState } from '../store';

export const userSlice = createSlice({
  name: 'user',
  initialState: UserEmptyState,
  reducers: {
    createUser: (_, action) => {
      return action.payload;
    },
    modifyUser: (state, action) => {
      const formattedData = { ...state, ...action.payload };
      return formattedData;
    },
    resetUser: () => {
      return UserEmptyState;
    }
  }
})

export const { createUser, modifyUser, resetUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.userReducer
export default userSlice.reducer;