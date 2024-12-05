import { createSlice } from "@reduxjs/toolkit"

const AllmoviesSlice = createSlice({
	name: "Allmovies",
	initialState: {
		nowPlayingMovies: null,
		trailerVideo: null,
		popularMovies: null,
		upcomingMovies: null,
		topRatedMovies: null,
		trendingMovies: null,
		movieDetails: null,
		loading: false,
		error: null,
	},
	reducers: {
		// Action to add movies by category
		addMovieBycategory: (state, action) => {
			const { category, movies, total_pages, total_results } = action.payload
			// Dynamically setting category-based state key
			state[`${category}Movies`] = {
				movies,
				total_pages,
				total_results,
			}
		},
		// Action to set loading state
		addLoading: (state, action) => {
			state.loading = action.payload
		},
		// Action to set error state
		addError: (state, action) => {
			state.error = action.payload
		},
	},
})

export const { addMovieBycategory, addLoading, addError } =
	AllmoviesSlice.actions

export default AllmoviesSlice.reducer
