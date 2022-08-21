import { Layout } from "src/styled-components/layout.styled";
import Header from "./components/Header/Header";
import ListPost from "./components/ListPost/ListPost";



export default function Home() {
  return (
    <Layout>
      <Header />
      <ListPost />
    </Layout>
  )
}
