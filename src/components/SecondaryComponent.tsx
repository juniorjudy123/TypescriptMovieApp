import MovieList from "./MovieList"
import { useSelector } from "react-redux"

const SecondaryComponent = () => {
	const { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } =
		useSelector((store: any) => store.movies)
	console.log(nowPlayingMovies)

	return (
		<div className="bg-black ">
			<div className="-mt-52  relative z-10">
				<MovieList title="Now Playing" movies={nowPlayingMovies} />
				<MovieList title="Upcoming Movies" movies={upcomingMovies} />
				<MovieList title="Top Rated" movies={topRatedMovies} />
				<MovieList title="Popular" movies={popularMovies} />
			</div>
		</div>
	)
}

export default SecondaryComponent
