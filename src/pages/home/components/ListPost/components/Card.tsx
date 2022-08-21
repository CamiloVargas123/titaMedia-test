import { PostPreview } from "src/models";
import { CardContent, CardFooter, CardHeader, CardImage, CardPost } from "./styled-components/cardPost.styled";

interface Props {
  data: PostPreview
}
export default function Card({ data }: Props) {
  return (
    <CardPost>
      <CardHeader>
        <img src={data.owner?.picture} />
        <p>{`${data.owner?.firstName ?? ""} ${data.owner?.lastName ?? ""}`}</p>
      </CardHeader>
      <CardImage src={data.image} />
      <p>{data.text}</p>
      <CardContent>
        {data.tags.map(item => <p>{item}</p>)}
      </CardContent>
      <CardFooter>
        <p>{`Likes: ${data.likes}`}</p>
        <p>{`Comentarios: `}</p>
      </CardFooter>
    </CardPost>
  )
}
