import HeaderComponent from "../components/HeaderComponent"
import useMovies from "../hooks/useMovies"
import MovieInfoComponent from "../components/MovieInfoComponent"

const MovieDetailsPage = () => {
	useMovieDetails(
		"https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
	)
	return (
		<div>
			<HeaderComponent />
			<MovieInfoComponent />
		</div>
	)
}

export default MovieDetailsPage
