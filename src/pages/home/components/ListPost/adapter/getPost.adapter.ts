import { ApiListPostPreview, ListPostPreview, PostPreview } from "src/models/post.type";


export const getPostAdapter = (data: ApiListPostPreview): ListPostPreview => {
  return {
    limit: data.limit,
    page: data.page,
    total: data.total,
    data: data.data.map(res => {
      return {
        id: res.id,
        image: res.image,
        likes: res.likes,
        owner: res.owner,
        publishDate: res.publishDate,
        tags: res.tags,
        text: res.text
      }
    })
  }
};