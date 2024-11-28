// import React from "react"
// import MovieCardComponent from "./MovieCardComponent"

// interface MovieProp {
// 	title: string
// 	movies: MovieListTypes
// }

// const MovieList = ({ title, movies }) => {
// 	console.log(checking"movies)
// 	if (!movies) return // early return
// 	return (
// 		<div className=" px-3">
// 			<h1 className="text-2xl py-4 text-white">{title}</h1>
// 			<div className="flex overflow-x-scroll">
// 				<div className="flex">
// 					{movies.map(({ id, poster_path }) => (
// 						<MovieCardComponent key={id} posterpath={poster_path} />
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default MovieList

import MovieCardComponent from "./MovieCardComponent"

const MovieList = ({ title, movies }) => {
	console.log("checking movies", movies)
	if (!movies) return // early return

	return (
		<div className=" px-3">
			<h1 className="text-2xl py-4 text-white">{title}</h1>
			<div className="flex overflow-x-scroll">
				<div className="flex">
					{movies.map((movie) => (
						<MovieCardComponent
							key={movie.id}
							id={movie.id}
							posterpath={movie.poster_path}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default MovieList
