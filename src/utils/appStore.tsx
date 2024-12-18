// import { configureStore } from "@reduxjs/toolkit"
// import movieReducer from "./slices/moviesSlice"
// // import AllmoviesReducer from "./slices/AllmoviesSlice"

// const appStore = configureStore({
// 	reducer: {
// 		movies: movieReducer,
// 		// Allmovies: AllmoviesReducer,
// 	},
// })

// export default appStore

// store.ts or appStore.ts

import { configureStore } from "@reduxjs/toolkit"
import movieReducer from "./slices/moviesSlice"
// import AllmoviesReducer from "./slices/AllmoviesSlice"
import userReducer from "./slices/userSlice"

const appStore = configureStore({
	reducer: {
		user: userReducer,
		movies: movieReducer,
		// Allmovies: AllmoviesReducer,
	},
})

// Infer RootState type from the store
export type RootState = ReturnType<typeof appStore.getState>

export default appStore
