import { useSelector } from "react-redux"
import TrailerTitleComponent from "./TrailerTitleComponent"
import TrailerComponent from "./TrailerComponent"

const HeroComponent = () => {
	const movies = useSelector((store) => store.movies?.nowPlayingMovies)

	if (!movies) return //early return

	const playingTrailer = movies[6]

	const { original_title, overview, id } = playingTrailer

	return (
		<div className="relative w-full overflow-hidden">
			<TrailerComponent movieId={id} />
			<TrailerTitleComponent title={original_title} description={overview} />
		</div>
	)
}

export default HeroComponent
