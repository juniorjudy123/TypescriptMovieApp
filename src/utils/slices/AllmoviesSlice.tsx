import { createSlice } from "@reduxjs/toolkit"

const AllmoviesSlice = createSlice({
	name: "Allmovies",
	initialState: {
		nowPlayingMovies: {
			movies: [],
			total_pages: 0,
			total_results: 0,
			loading: false,
			error: null,
		},
		popularMovies: {
			movies: [],
			total_pages: 0,
			total_results: 0,
			loading: false,
			error: null,
		},
		upcomingMovies: {
			movies: [],
			total_pages: 0,
			total_results: 0,
			loading: false,
			error: null,
		},
		topRatedMovies: {
			movies: [],
			total_pages: 0,
			total_results: 0,
			loading: false,
			error: null,
		},
		trendingMovies: {
			movies: [],
			total_pages: 0,
			total_results: 0,
			loading: false,
			error: null,
		},
		movieDetails: null,
	},
	reducers: {
		// Action to start loading for a particular category
		setLoading: (state, action) => {
			const { category } = action.payload
			if (category && state[`${category}Movies`]) {
				state[`${category}Movies`].loading = true
			}
		},
		// Action to set error for a particular category
		setError: (state, action) => {
			const { category, error } = action.payload
			if (category && state[`${category}Movies`]) {
				state[`${category}Movies`].error = error
			}
		},
		// Action to add movies by category
		addMovieBycategory: (state, action) => {
			const { category, movies, total_pages, total_results } = action.payload
			if (category && state[`${category}Movies`]) {
				state[`${category}Movies`] = {
					movies,
					total_pages,
					total_results,
					loading: false, // Set loading to false when data is fetched
					error: null, // Clear any previous errors
				}
			}
		},
		// Action to clear movie details
		clearMovieDetails: (state) => {
			state.movieDetails = null
		},
	},
})

export const { addMovieBycategory, setLoading, setError, clearMovieDetails } =
	AllmoviesSlice.actions

export default AllmoviesSlice.reducer
