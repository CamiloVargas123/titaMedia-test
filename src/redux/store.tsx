import { configureStore } from '@reduxjs/toolkit';
import { User, ListPostPreview } from 'src/models';
import { userReducer, postPreviewReducer } from './slices';

export interface AppStore {
  user: User;
  listPostPreview: ListPostPreview
}

export default configureStore<AppStore>({
  reducer: {
    user: userReducer,
    listPostPreview: postPreviewReducer,
  }
});
