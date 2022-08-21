import { ApiListComment, ListComment } from "src/models";


export const commentAdapter = (data: ApiListComment): ListComment => {
  return {
    limit: data.limit,
    page: data.page,
    total: data.total,
    data: data.data.map(res => {
      return {
        id: res.id,
        message: res.message,
        owner: res.owner,
        post: res.post,
        publishDate: res.publishDate
      }
    })
  }
};