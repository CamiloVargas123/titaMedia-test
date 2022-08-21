import { useState } from "react";
import Modal from "src/components/Modal";
import { PostPreview } from "src/models";
import Comments from "./components/Comments";
import { CardContent, CardFooter, CardHeader, CardImage, CardPost, TruncatedText } from "./styled-components/cardPost.styled";

interface Props {
  data: PostPreview
}
export default function Card({ data }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <CardPost>
      <CardHeader>
        <img src={data.owner?.picture} />
        <p>{`${data.owner?.firstName ?? ""} ${data.owner?.lastName ?? ""}`}</p>
      </CardHeader>
      <CardImage src={data.image} />
      <TruncatedText>{data.text}</TruncatedText>
      <CardContent>
        {data.tags.map(item => <p key={item}>{item}</p>)}
      </CardContent>
      <CardFooter>
        <p>{`Likes: ${data.likes}`}</p>
        <p onClick={() => setIsOpen(true)}>Comentarios</p>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} closeOverlay>
          <Comments idPost={data.id} />
        </Modal>
      </CardFooter>
    </CardPost>
  )
}
