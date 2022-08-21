import { UserPreview } from "./user.type"

export interface ApiComment {
  id: string
  message: string
  owner: UserPreview
  post: string
  publishDate: string
}

export interface Comment {
  id: string
  message: string
  owner: UserPreview | null
  post: string
  publishDate: string
}

export const CommentEmptyState: Comment =  {
  id: '',
  message: '',
  owner: null,
  post: '',
  publishDate: ''
}