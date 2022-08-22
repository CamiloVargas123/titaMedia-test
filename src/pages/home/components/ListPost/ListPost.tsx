import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostPreview, modifyPostPreview } from "src/redux/slices/postPreview.slice";
import { AppStore } from "src/redux/store";
import Card from "./components/Card";
import { getListPost } from "./services/getPost";
import { ListPostStyled } from "./styled-components/listPost.styled";
import { Buttons } from "src/styled-components/buttons.styled";

export default function ListPost() {
  const dispatch = useDispatch();
  const listPostPreview = useSelector((state: AppStore) => state.listPostPreview)

  const getPost = async (isLoadMore: boolean) => {
    const result = await getListPost({ page: listPostPreview.page, limit: listPostPreview.limit, filter: listPostPreview.filter.length ? listPostPreview.filter : undefined })
    dispatch(addPostPreview({ ...listPostPreview, data: isLoadMore ? [...listPostPreview.data, ...result.data] : result.data, total: result.total }))
  };

  useEffect(() => {
    getPost(listPostPreview.page > 0 ? true : false);
  }, [listPostPreview.filter, listPostPreview.page])


  return (
    <>
      <ListPostStyled >
        {
          listPostPreview.data.length ? listPostPreview.data.map(item => {
            return <Card key={item.id} data={item} />
          })
            :
            listPostPreview.filter ? <h2>{`Post not found with the word: "${listPostPreview.filter}"`}</h2> : <h2>Not found post</h2>
        }

      </ListPostStyled>
      {
        listPostPreview.total > listPostPreview.data.length &&
        <div style={{ display: "flex", justifyContent: "center", width: "100%", paddingBottom: "2rem" }}>
          <Buttons primary onClick={() => dispatch(modifyPostPreview({ ...listPostPreview, page: listPostPreview.page + 1 }))}>Load More</Buttons>
        </div>
      }
    </>
  )
}