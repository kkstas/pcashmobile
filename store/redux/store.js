import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./slices/userInfo"

export const store = configureStore({
	reducer: {
		userInfo: userReducer,
	},
})
