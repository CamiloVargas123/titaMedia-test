import Profile from "./components/Profile";
import { HeaderStyle } from "./styled-components/header.styled";

export default function Header() {
  return (
    <HeaderStyle>
      <div>logo</div>
      <Profile />
    </HeaderStyle>
  )
}
