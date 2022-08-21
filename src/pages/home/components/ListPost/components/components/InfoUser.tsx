import { useEffect, useState } from "react";
import type { UserFull } from "src/models";
import { formatDate } from "src/utils/formatDate";
import { getUserFullById } from "../services/getUserFullById";
import { CardHeader } from "../styled-components/cardPost.styled";
import { UserFullContent, UserFullLocation, UserFullStyled } from "./styled-components/userFull.styled";

interface Props {
  idUser: string | undefined
}
export default function InfoUser({ idUser }: Props) {
  if (!idUser) return <h2>Invalid id</h2>
  const [userFull, setUserFull] = useState<UserFull>()

  const getUserFull = async () => {
    const result = await getUserFullById({ idUser })
    setUserFull(result);
  };

  useEffect(() => {
    getUserFull();
  }, [])

  if (!userFull) return <h2>User not found</h2>

  return (
    <UserFullStyled>
      <CardHeader style={{ fontSize: "1.5rem" }}>
        <img src={userFull.picture} style={{ width: "50px" }} />
        <p style={{ textTransform: "capitalize" }}>{`${userFull.title} ${userFull.firstName ?? ""} ${userFull.lastName ?? ""}`}</p>
      </CardHeader>
      <UserFullContent>
        <p>{`Gender: ${userFull.gender}`}</p>
        <p>{`Email: ${userFull.email}`}</p>
        <p>{`Cel: ${userFull.phone}`}</p>
        <p>{`Birth Date: ${formatDate({ date: userFull.dateOfBirth, format: 'DD/MM/YYYY' })}`}</p>
        <p>{`Create At: ${formatDate({ date: userFull.registerDate, format: 'DD/MM/YYYY' })}`}</p>
        <UserFullLocation>
          <h1>Location</h1>
          <p>{`City: ${userFull.location.city}`}</p>
          <p>{`Country: ${userFull.location.country}`}</p>
          <p>{`State: ${userFull.location.state}`}</p>
          <p>{`Street: ${userFull.location.street}`}</p>
        </UserFullLocation>
      </UserFullContent>
    </UserFullStyled>
  )
}
