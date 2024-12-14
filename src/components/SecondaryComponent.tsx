import { RootState } from "../utils/appStore"
import MovieList from "./MovieList"
import { useSelector } from "react-redux"

const SecondaryComponent = () => {
	const {
		nowPlayingMovies,
		popularMovies,
		topRatedMovies,
		upcomingMovies,
		trendingMovies,
	} = useSelector((store: RootState) => store.movies)

	return (
		<div className="bg-black ">
			<div className="-mt-52 relative z-10">
				<MovieList
					title="Now Playing"
					movies={nowPlayingMovies}
					urlQuery="now_playing"
				/>
				<MovieList
					title="Upcoming Movies"
					movies={upcomingMovies}
					urlQuery="upcoming"
				/>
				<MovieList
					title="Top Rated"
					movies={topRatedMovies}
					urlQuery="top_rated"
				/>
				<MovieList title="Popular" movies={popularMovies} urlQuery="popular" />
			</div>
		</div>
	)
}

export default SecondaryComponent
