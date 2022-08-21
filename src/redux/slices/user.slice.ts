import { createSlice } from '@reduxjs/toolkit';
import { UserEmptyState } from '../../models';

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
export default userSlice.reducer;