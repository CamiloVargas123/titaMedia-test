import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListPostPreview } from "src/models/post.type";
import { addPostPreview } from "src/redux/slices/postPreview.slice";
import { AppStore } from "src/redux/store";
import Card from "./components/Card";
import { getListPost } from "./services/getPost";
import { ListPostStyled } from "./styled-components/listPost.styled";


export default function ListPost() {
  const dispatch = useDispatch();
  const listPostPreview = useSelector((state: AppStore) => state.listPostPreview)
  const [limit, setLimit] = useState(20)
  const [page, setPage] = useState(0)
  const [posts, setPosts] = useState<ListPostPreview>();

  const getPost = async () => {
    const result = await getListPost({ page, limit })
    dispatch(addPostPreview({ data: result.data, limit: limit, page: page, total: result.total }))
    //setPosts(result);
  };

  useEffect(() => {
    getPost();
  }, [])

  useEffect(() => {
    setPosts(listPostPreview)
    return () => setPosts(undefined)
  }, [listPostPreview.data])

  return (
    <ListPostStyled>
      {
        posts?.data.map(item => {
          return <Card key={item.id} data={item} />
        })
      }
    </ListPostStyled>
  )
}