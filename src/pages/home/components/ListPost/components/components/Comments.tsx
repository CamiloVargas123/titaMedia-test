import { useEffect, useState } from "react"
import { ListComment } from "src/models"
import { formatDate } from "src/utils/formatDate"
import { getCommentById } from "../services/getCommentById"
import { CardHeader } from "../styled-components/cardPost.styled"
import { CommentsContentStyled, CommentsStyled } from "./styled-components/comments.styled"

interface Props {
  idPost: string
}
export default function Comments({ idPost }: Props) {
  const [comment, setComment] = useState<ListComment>()

  const getComments = async () => {
    const result = await getCommentById({ page: 0, limit: 20, idPost: idPost })
    setComment(result);
  };

  useEffect(() => {
    getComments();
  }, [])

  return (
    <CommentsStyled>
      {
        comment?.total == 0 ?
          <h1>Sin comentarios</h1>
          :
          comment?.data.map(item => {
            return (
              <CommentsContentStyled key={item.id}>
                <CardHeader>
                  <img src={item.owner?.picture} />
                  <p>{`${item.owner?.firstName ?? ""} ${item.owner?.lastName ?? ""}`}</p>
                </CardHeader>
                <p>{`Comment: ${item.message}`}</p>
                <p style={{ textAlign: "right", fontSize: ".8rem" }}>{`Publish Date: ${formatDate({ date: item.publishDate, format: 'DD/MM/YYYY HH:mm' })}`}</p>
              </CommentsContentStyled>
            )
          })
      }
    </CommentsStyled>
  )
}
