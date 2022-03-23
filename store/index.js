import { configureStore } from "@reduxjs/toolkit";

import elementsSlice from "~/store/reducers/user.slice";

export const store = configureStore({
	reducer: {
		user: elementsSlice
	},
});
