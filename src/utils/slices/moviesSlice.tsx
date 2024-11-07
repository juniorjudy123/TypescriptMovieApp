import { createSlice } from "@reduxjs/toolkit"

const moviesSlice = createSlice({
	name: "movies",
	initialState: {
		trailerVideos: null,
		nowPlayingMovies: null,
		popularMovies: null,
		upcomingMovies: null,
		topRated: null,
	},
	reducers: {
		addTrailerMovies: (state, action) => {
			state.trailerVideos = action.payload
		},
	},
})

export const { addTrailerMovies } = moviesSlice.actions

export default moviesSlice.reducer
