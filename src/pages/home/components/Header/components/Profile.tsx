import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import { AppStore } from "src/redux/store";
import { Buttons } from "src/styled-components/buttons.styled";
import { PhotoProfile, ProfileData, ProfileHeader } from "../styled-components/profile";

export default function Profile() {
  const { loginWithRedirect, logout } = useAuth0()
  const user = useSelector((state: AppStore) => state.user)

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
