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
