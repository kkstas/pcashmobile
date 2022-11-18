import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./slices/userInfo"
import ticketMediaReducer from "./slices/ticketMedia"

export const store = configureStore({
	reducer: {
		userInfo: userReducer,
		ticketMedia: ticketMediaReducer,
	},
})
