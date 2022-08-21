import Profile from "./components/Profile";
import Search from "./components/Search";
import { HeaderStyle } from "./styled-components/header.styled";

export default function Header() {
  return (
    <HeaderStyle>
      <div>logo</div>
      <Search />
      <Profile />
    </HeaderStyle>
  )
}
