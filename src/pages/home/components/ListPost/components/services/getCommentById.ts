import axios from "axios";
import { ListComment } from "src/models/comment.type";
import { commentAdapter } from "../adapter/comment.adapter";

interface params {
  page: number
  limit: number
  idPost: string
}
export const getCommentById = async ({ page, limit, idPost }: params): Promise<ListComment> => {
  return axios.get(`/post/${idPost}/comment?page=${page}&limit=${limit}`).then(res => commentAdapter(res.data))
}
