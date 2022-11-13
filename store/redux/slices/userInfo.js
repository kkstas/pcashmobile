import { createSlice } from "@reduxjs/toolkit"

const userInfo = createSlice({
	name: "userInfo",
	initialState: {
		username: null,
		isLoggedIn: false,
	},
	reducers: {
		logIn: (state, action) => {
			state.username = action.payload
			state.isLoggedIn = true
		},
		logOut: (state) => {
			state.username = null
			state.isLoggedIn = false
		},
	},
})

export const logIn = userInfo.actions.logIn
export const logOut = userInfo.actions.logOut
export default userInfo.reducer
