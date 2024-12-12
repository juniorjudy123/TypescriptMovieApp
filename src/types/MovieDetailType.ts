// // src/redux/moviesSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

// Define types for the state
interface Movie {
	id: number
	title: string
	poster_path: string
	// Add any other properties that are relevant to your movie object
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

const initialState: MoviesState = {
	nowPlayingMovies: null,
	trailerVideo: null,
	popularMovies: null,
	upcomingMovies: null,
	topRatedMovies: null,
	trendingMovies: null,
	movieDetails: null,
	searchResults: [],
}

const moviesSlice = createSlice({
	name: "movies",
	initialState,
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
