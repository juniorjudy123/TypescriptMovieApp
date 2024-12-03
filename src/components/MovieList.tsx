/* eslint-disable @typescript-eslint/no-explicit-any */
import MovieCardComponent from "./MovieCardComponent"
import {
	MovieListTypes,
	MovieDetailTypes,
	MovieCardType,
} from "../types/MovieDetailType"

const MovieList = ({ title, movies }: MovieDetailTypes) => {
	// console.log(title)
	// console.log("checking movies", movies)
	// if (!movies) return // early return

	return (
		<div className=" px-3">
			<div className="flex justify-between align-center">
				<h1 className="text-2xl py-4 text-white">{title}</h1>
				<span className="text-white py-4 pr-2">see more </span>
			</div>
			<div className="flex overflow-x-scroll">
				<div className="flex">
					{movies?.map(({ id, poster_path }: any) => (
						<MovieCardComponent id={id} poster_path={poster_path} />
					))}
					{/* movies?.map(({ id, poster_path }:any) => {
  if (!id || !poster_path) return null; // Handle missing properties
  return <MovieCardComponent key={id} id={id} posterpath={poster_path} />;
}); */}
				</div>
			</div>
		</div>
	)
}

export default MovieList
