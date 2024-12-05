import { configureStore } from "@reduxjs/toolkit"
import movieReducer from "./slices/moviesSlice"
import AllmoviesReducer from "./slices/AllmoviesSlice"

const appStore = configureStore({
	reducer: {
		movies: movieReducer,
		Allmovies: AllmoviesReducer,
	},
})

export default appStore
