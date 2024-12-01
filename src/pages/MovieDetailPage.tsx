import { useParams } from "react-router-dom"
import HeaderComponent from "../components/HeaderComponent"
import MovieInfoComponent from "../components/MovieInfoComponent"
import useMovieDetails from "../hooks/useMovieDetails"

const MovieDetailsPage = () => {
	const { id } = useParams()
	useMovieDetails(`https://api.themoviedb.org/3/movie/${id}?language=en-US`)
	return (
		<div>
			<HeaderComponent />
			<MovieInfoComponent />
		</div>
	)
}

export default MovieDetailsPage
