/* eslint-disable @typescript-eslint/no-explicit-any */
import MovieCardComponent from "./MovieCardComponent"
import {
	MovieListTypes,
	MovieDetailTypes,
	MovieCardType,
} from "../types/MovieDetailType"
import { Link } from "react-router-dom"

const MovieList = ({ title, movies }: MovieDetailTypes) => {
	// console.log(title)
	// console.log("checking movies", movies)
	// if (!movies) return // early return

	return (
		<div className=" px-3">
			<div className="flex  items-center justify-between ">
				<h1 className="text-2xl py-2   text-white">{title}</h1>
				<Link
					to="/movies"
					className="text-yellow-400 py-2 mr-10 cursor-pointer hover:underline hover:text-yellow-200 transition duration-200 ease-in-out text-lg"
				>
					see more{" "}
				</Link>
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
