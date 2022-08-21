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
    },
    filterPost: (state, action: PayloadAction<string>) => {
      return { ...state, filter: action.payload }
    }
  }
})

export const { addPostPreview, modifyPostPreview, resetPostPreview, filterPost } = postPreview.actions;
export default postPreview.reducer;