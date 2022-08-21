import { useState } from "react";
import Modal from "src/components/Modal";
import { PostPreview } from "src/models";
import Comments from "./components/Comments";
import InfoUser from "./components/InfoUser";
import { CardContent, CardFooter, CardHeader, CardImage, CardPost, TruncatedText } from "./styled-components/cardPost.styled";

interface Props {
  data: PostPreview
}
export default function Card({ data }: Props) {
  const [isOpenComments, setIsOpenComments] = useState(false)
  const [isOpenInfoUser, setIsOpenInfoUser] = useState(false)

  return (
    <CardPost>
      <CardHeader onClick={() => setIsOpenInfoUser(true)}>
        <img src={data.owner?.picture} />
        <p>{`${data.owner?.firstName ?? ""} ${data.owner?.lastName ?? ""}`}</p>
      </CardHeader>
      <Modal open={isOpenInfoUser} onClose={() => setIsOpenInfoUser(false)} closeOverlay>
        <InfoUser idUser={data.owner?.id} />
      </Modal>
      <CardImage src={data.image} />
      <TruncatedText>{data.text}</TruncatedText>
      <CardContent>
        {data.tags.map(item => <p key={item}>{item}</p>)}
      </CardContent>
      <CardFooter>
        <p>{`Likes: ${data.likes}`}</p>
        <p onClick={() => setIsOpenComments(true)}>Comments</p>
        <Modal open={isOpenComments} onClose={() => setIsOpenComments(false)} closeOverlay>
          <Comments idPost={data.id} />
        </Modal>
      </CardFooter>
    </CardPost>
  )
}
