// import { createSlice } from "@reduxjs/toolkit"

// const moviesSlice = createSlice({
// 	name: "movies",
// 	initialState: {
// 		nowPlayingMovies: { data: null, currentPage: 1 },
// 		trailerVideo: null,
// 		popularMovies: { data: null, currentPage: 1 },
// 		upcomingMovies: { data: null, currentPage: 1 },
// 		topRatedMovies: { data: null, currentPage: 1 },
// 		trendingMovies: { data: null, currentPage: 1 },
// 		movieDetails: null,
// 		// isLoading:
// 	},
// 	reducers: {
// 		addNowPlayingMovies: (state, action) => {
// 			state.nowPlayingMovies.data = action.payload
// 			state.nowPlayingMovies.currentPage = action.payload.page
// 		},
// 		addTrailerVideo: (state, action) => {
// 			state.trailerVideo = action.payload
// 		},
// 		addPopularMovies: (state, action) => {
// 			state.popularMovies.data = action.payload
// 			state.popularMovies.currentPage = action.payload.page
// 		},
// 		addUpcomingMovies: (state, action) => {
// 			state.upcomingMovies.data = action.payload
// 			state.upcomingMovies.currentPage = action.payload.page
// 		},
// 		addTopRatedMovies: (state, action) => {
// 			state.topRatedMovies.data = action.payload
// 			state.topRatedMovies.currentPage = action.payload.page
// 		},
// 		addTrendingMovies: (state, action) => {
// 			state.trendingMovies.data = action.payload
// 			state.trendingMovies.currentPage = action.payload.page
// 		},
// 		addMovieDetails: (state, action) => {
// 			state.movieDetails = action.payload
// 		},
// 	},
// })

// export const {
// 	addNowPlayingMovies,
// 	addTrailerVideo,
// 	addPopularMovies,
// 	addUpcomingMovies,
// 	addTopRatedMovies,
// 	addTrendingMovies,
// 	addMovieDetails,
// } = moviesSlice.actions

// export default moviesSlice.reducer

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
		// isLoading:
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
