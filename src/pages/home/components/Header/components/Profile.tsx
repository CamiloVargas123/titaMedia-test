import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import { selectUser } from "src/redux/slices/user.slice";
import { Buttons } from "src/styled-components/buttons.styled";
import { PhotoProfile, ProfileData, ProfileHeader } from "../styled-components/profile";

export default function Profile() {
  const { loginWithRedirect, logout } = useAuth0()
  const user = useSelector(selectUser)

  if (!user.email) return (
    <Buttons primary onClick={() => loginWithRedirect()}>Log In</Buttons>
  )

  return (
    <ProfileHeader>
      <ProfileData>
        <PhotoProfile src={user.picture} />
        <div>{user.given_name ?? user.nickname}</div>
      </ProfileData>
      <Buttons onClick={() => logout()}>Log Out</Buttons>
    </ProfileHeader>
  )
}
