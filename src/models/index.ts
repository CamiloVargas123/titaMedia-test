export * from './user.type';
export * from './post.type';
export * from './comment.type';
export * from './location.type';

export interface ListResponse {
  page: number
  limit: number
  total: number
}