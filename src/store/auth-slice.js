import { createSlice } from "@reduxjs/toolkit"

const initializedState = {
  userIsLogged: !!localStorage.getItem("token") || false,
  token: localStorage.getItem("token") || "",
}

const authSlice = createSlice({
  name: "auth",
  initialState: initializedState,
  reducers: {
    signIOUser(state, action) {
      state.userIsLogged = true
      state.token = action.payload.token
      localStorage.setItem("token", action.payload.token)
    },
    signOutUser(state) {
      state.userIsLogged = false
      state.token = ""
      localStorage.removeItem("token")
    },
  },
})

export const AuthActions = authSlice.actions
export default authSlice.reducer
