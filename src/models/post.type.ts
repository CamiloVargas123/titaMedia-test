import { ListResponse } from "."
import { ApiUserPreview } from "./user.type"

export interface ApiPostPreview {
  id: string
  text: string
  image: string
  likes: number
  tags: string[]
  publishDate: string
  owner: ApiUserPreview
}
export interface ApiListPostPreview extends ListResponse {
  data: ApiPostPreview[]
}

export interface PostPreview {
  id: string
  text: string
  image: string
  likes: number | null
  tags: string[]
  publishDate: string
  owner: ApiUserPreview | null
}
export interface ListPostPreview extends ListResponse {
  data: PostPreview[],
  filter: string
}

export const ListPostPreviewEmptyState: ListPostPreview = {
  limit: 20,
  page: 0,
  total: 0,
  data: [],
  filter: '',
};