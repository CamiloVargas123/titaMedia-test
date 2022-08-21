import axios from "axios";
import { UserFull } from "src/models";
import { userFullAdapter } from "../adapter/userFull.adapter";

interface params {
  idUser: string
}
export const getUserFullById = async ({ idUser }: params): Promise<UserFull> => {
  return axios.get(`/user/${idUser}`).then(res => userFullAdapter(res.data))
}