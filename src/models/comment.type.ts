import { ListResponse } from "."
import { UserPreview } from "./user.type"

export interface ApiComment {
  id: string
  message: string
  owner: UserPreview
  post: string
  publishDate: string
}
export interface ApiListComment extends ListResponse {
  data: ApiComment[]
}

export interface Comment {
  id: string
  message: string
  owner: UserPreview | null
  post: string
  publishDate: string
}
export interface ListComment extends ListResponse {
  data: Comment[]
}

export const CommentEmptyState: Comment = {
  id: '',
  message: '',
  owner: null,
  post: '',
  publishDate: ''
}