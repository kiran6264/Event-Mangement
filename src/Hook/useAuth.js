import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider"

function useAuth() {
  const authContext = useContext(AuthContext);
  return authContext
}

export default useAuth
