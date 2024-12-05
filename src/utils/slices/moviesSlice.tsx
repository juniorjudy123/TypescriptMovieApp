import { createSlice } from "@reduxjs/toolkit"

const moviesSlice = createSlice({
	name: "movies",
	initialState: {
		nowPlayingMovies: null,
		trailerVideo: null,
		popularMovies: null,
		upcomingMovies: null,
		topRatedMovies: null,
		trendingMovies: null,
		movieDetails: null,
	},
	reducers: {
		addNowPlayingMovies: (state, action) => {
			state.nowPlayingMovies = action.payload
		},
		addTrailerVideo: (state, action) => {
			state.trailerVideo = action.payload
		},
		addPopularMovies: (state, action) => {
			state.popularMovies = action.payload
		},
		addUpcomingMovies: (state, action) => {
			state.upcomingMovies = action.payload
		},
		addTopRatedMovies: (state, action) => {
			state.topRatedMovies = action.payload
		},
		addTrendingMovies: (state, action) => {
			state.topRatedMovies = action.payload
		},
		addMovieDetails: (state, action) => {
			state.movieDetails = action.payload
		},
	},
})

export const {
	addNowPlayingMovies,
	addTrailerVideo,
	addPopularMovies,
	addUpcomingMovies,
	addTopRatedMovies,
	addTrendingMovies,
	addMovieDetails,
} = moviesSlice.actions

export default moviesSlice.reducer
