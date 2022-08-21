import axios from "axios";
import { ListPostPreview } from "src/models/post.type";
import { getPostAdapter } from "../adapter/getPost.adapter";

interface params {
  page: number
  limit: number
  filter?: string
}
export const getListPost = async ({ page, limit, filter }: params): Promise<ListPostPreview> => {
  if(filter) return axios.get(`/tag/${filter}/post?page=${page}&limit=${limit}`).then(res => getPostAdapter(res.data))
  return axios.get(`/post?page=${page}&limit=${limit}`).then(res => getPostAdapter(res.data))
}
