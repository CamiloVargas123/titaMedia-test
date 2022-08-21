
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Home from "./pages/home/Home";
import { createUser } from "./redux/slices/user.slice";

function App() {
  const { user } = useAuth0();
  const dispatch = useDispatch()

  useEffect(() => {
    if (user) dispatch(createUser(user))
  }, [user])

  return (
    <>
      <Home />
    </>
  )
}

export default App
