
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import Home from "./pages/home/Home";
import { createUser } from "./redux/slices/user.slice";

function App() {
  const { user } = useAuth0();
  const dispatch = useDispatch()

  if (user) {
    console.log(user)
    dispatch(createUser(user))
  }
  return (
    <>
      <Home />
    </>
  )
}

export default App
