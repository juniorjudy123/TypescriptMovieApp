import MovieCardComponent from "./MovieCardComponent" // Assuming MovieCardComponent is imported
import VideoBg from "../assets/bg-gradient.mov"
import { useSelector } from "react-redux"
import clockImg from "../assets/clock.png"

const MovieInfoComponent = () => {
	const movieDetails = useSelector((store) => store.movies.movieDetails)
	// console.log("movieDetails", movieDetails)
	if (!movieDetails) return <div>Loading...</div> // If no movie details, show loading

	// Destructure the movie details
	const {
		genres,
		title,
		overview,
		release_date,
		runtime,
		vote_average,
		backdrop_path,
	} = movieDetails

	// Format runtime to be in hours and minutes
	const formattedRuntime = `${Math.floor(runtime / 60)}h ${runtime % 60}m`

	return (
		<div className="relative">
			{/* Background Video */}
			<video
				className="absolute inset-0 w-full h-full object-cover"
				src={VideoBg}
				autoPlay
				muted
				loop
			/>

			<div className="flex justify-center items-center min-h-screen">
				{/* Centered Movie Details Box */}
				<div className="w-3/4 md:w-1/2 bg-white shadow-lg rounded-xl overflow-hidden relative z-10">
					<div className="absolute top-10 left-5 p-6">
						{/* Movie Poster */}
						{/* <MovieCardComponent posterpath={backdrop_path} /> */}
					</div>

					<div className="flex flex-col h-[30rem]">
						{/* White Section: Movie Title and Genre */}
						<div className="flex-1 bg-white p-6">
							<h1 className="text-3xl font-bold mb-3">{title}</h1>
							<div className="text-gray-500 text-sm mb-4">
								<span>Release Date {release_date}</span> |
								<div className="flex p-2 ">
									{" "}
									<img src={clockImg} className=" w-5"></img>{" "}
									<span className="ml-2">{formattedRuntime} |</span>
								</div>
								{genres?.map((genre) => genre.name).join(", ")}
							</div>
							<p className="text-lg text-gray-700">{overview}</p>
						</div>

						{/* Yellow Section: Ratings */}
						<div className="flex-1 bg-yellow-500 p-6">
							<div className="flex justify-between items-center">
								<div className="text-white font-semibold text-xl">Rating</div>
								<div className="text-white text-2xl">{vote_average} / 10</div>
							</div>
							<div className="mt-4 text-white">
								<span className="font-semibold">Genres: </span>
								{genres?.map((genre) => genre.name).join(", ")}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MovieInfoComponent
