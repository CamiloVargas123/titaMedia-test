import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ListPostPreview, ListPostPreviewEmptyState } from 'src/models/post.type';

export const postPreview = createSlice({
  name: 'listPostPreview',
  initialState: ListPostPreviewEmptyState,
  reducers: {
    addPostPreview: (_, action: PayloadAction<ListPostPreview>) => {
      return action.payload;
    },
    modifyPostPreview: (state, action: PayloadAction<ListPostPreview>) => {
      const formattedData = { ...state, ...action.payload };
      return formattedData;
    },
    resetPostPreview: () => {
      return ListPostPreviewEmptyState;
    }
  }
})

export const { addPostPreview, modifyPostPreview, resetPostPreview } = postPreview.actions;
export default postPreview.reducer;