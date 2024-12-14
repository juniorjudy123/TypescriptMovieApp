// import { createSlice } from "@reduxjs/toolkit"

// const moviesSlice = createSlice({
// 	name: "movies",
// 	initialState: {
// 		nowPlayingMovies: null,
// 		trailerVideo: null,
// 		popularMovies: null,
// 		upcomingMovies: null,
// 		topRatedMovies: null,
// 		trendingMovies: null,
// 		movieDetails: null,
// 		searchResults: [],
// 	},
// 	reducers: {
// 		addNowPlayingMovies: (state, action) => {
// 			state.nowPlayingMovies = action.payload
// 		},
// 		addTrailerVideo: (state, action) => {
// 			state.trailerVideo = action.payload
// 		},
// 		addPopularMovies: (state, action) => {
// 			state.popularMovies = action.payload
// 		},
// 		addUpcomingMovies: (state, action) => {
// 			state.upcomingMovies = action.payload
// 		},
// 		addTopRatedMovies: (state, action) => {
// 			state.topRatedMovies = action.payload
// 		},
// 		addTrendingMovies: (state, action) => {
// 			state.trendingMovies = action.payload
// 		},
// 		addMovieDetails: (state, action) => {
// 			state.movieDetails = action.payload
// 		},
// 		addSearchResults: (state, action) => {
// 			state.searchResults = action.payload
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
// 	addSearchResults,
// } = moviesSlice.actions

// export default moviesSlice.reducer

import { createSlice, PayloadAction } from "@reduxjs/toolkit"

// Define types for the state
interface Movie {
	adult?: boolean
	backdrop_path: string | URL
	genre_ids: number[]
	id: number
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path: string | URL
	release_date?: string | number
	title: string
	video: boolean
	vote_average: number
	vote_count: number
	origin_country: string
	genres: string
}

interface MoviesState {
	nowPlayingMovies: Movie[] | null
	trailerVideo: string | null
	popularMovies: Movie[] | null
	upcomingMovies: Movie[] | null
	topRatedMovies: Movie[] | null
	trendingMovies: Movie[] | null
	movieDetails: Movie | null
	searchResults: Movie[]
}

// Create slice with the state typed
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
		searchResults: [],
	} as MoviesState, // Type the initialState explicitly
	reducers: {
		addNowPlayingMovies: (state, action: PayloadAction<Movie[]>) => {
			state.nowPlayingMovies = action.payload
		},
		addTrailerVideo: (state, action: PayloadAction<string>) => {
			state.trailerVideo = action.payload
		},
		addPopularMovies: (state, action: PayloadAction<Movie[]>) => {
			state.popularMovies = action.payload
		},
		addUpcomingMovies: (state, action: PayloadAction<Movie[]>) => {
			state.upcomingMovies = action.payload
		},
		addTopRatedMovies: (state, action: PayloadAction<Movie[]>) => {
			state.topRatedMovies = action.payload
		},
		addTrendingMovies: (state, action: PayloadAction<Movie[]>) => {
			state.trendingMovies = action.payload
		},
		addMovieDetails: (state, action: PayloadAction<Movie>) => {
			state.movieDetails = action.payload
		},
		addSearchResults: (state, action: PayloadAction<Movie[]>) => {
			state.searchResults = action.payload
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
	addSearchResults,
} = moviesSlice.actions

export default moviesSlice.reducer
