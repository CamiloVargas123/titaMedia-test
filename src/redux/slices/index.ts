import { combineReducers } from '@reduxjs/toolkit';

import { default as userReducer } from './user.slice';
import { default as postPreviewReducer } from './postPreview.slice';

const rootReducer = combineReducers({
  userReducer,
  postPreviewReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;