import axios from "axios";
import { PostPreview, ListPostPreview } from "src/models/post.type";
import { getPostAdapter } from "../adapter/getPost.adapter";

interface params {
  page: number
  limit: number
}
export const getListPost = async ({ page, limit }: params): Promise<ListPostPreview> => {
  return axios.get(`/post?page=${page}&limit=${limit}`).then(res => getPostAdapter(res.data))
}
