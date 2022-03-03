import axios from "axios"
import { AuthActions } from "./auth-slice"

export const signUser = (uri, data) => {
  return (dispatch) => {
    axios
      .post(uri, data)
      .then((res) => {
        dispatch(AuthActions.signIOUser({ token: res.data.idToken }))
      })
      .catch((err) => {
        alert(err.response.data.error.message)
      })
  }
}
