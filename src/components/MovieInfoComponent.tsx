import { useState } from "react"
import { useSelector } from "react-redux"
import VideoBg from "../assets/bg-gradient.mov"
import movieclapperimg from "../assets/movie.png"
import movieapplogo from "../assets/movieapplogo.jpg"
import { RootState } from "../utils/appStore"

const MovieInfoComponent = () => {
	const [playTrailer, setPlayTrailer] = useState(false)
	const movieDetails = useSelector(
		(store: RootState) => store.movies.movieDetails
	)
	const trailer = useSelector((store: RootState) => store.movies?.trailerVideo)

	if (!movieDetails)
		return <div className="text-white text-center">Loading...</div>

	const {
		genres,
		overview,
		origin_country,
		release_date,
		vote_average,
		title,
	} = movieDetails

	return (
		<div className="relative">
			{/* Full-screen video background */}
			<div className="absolute inset-0 w-full h-full">
				<video
					className="w-full h-full object-cover"
					src={VideoBg}
					autoPlay
					muted
					loop
				/>
			</div>
			{/* Centered Box */}
			<div className="flex  p-14 items-center h-screen relative z-10 opacity-85">
				{/* Overlapping Card */}
				<div className="bg-gray-900 shadow-lg rounded-lg w-3/4 md:w-1/2 lg:w-1/3 z-20 p-4">
					<div
						className="relative w-full overflow-hidden pt-56 "
						// style={{ paddingTop: "56.25%" }}
					>
						{!playTrailer ? (
							<div
								className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center cursor-pointer"
								onClick={() => setPlayTrailer(true)}
							>
								{/* Thumbnail */}
								<img
									className="absolute top-0 left-0 w-full h-full object-cover"
									src={`https://img.youtube.com/vi/${trailer?.key}/hqdefault.jpg`}
									alt="Trailer Thumbnail"
								/>
								{/* Play Icon */}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-12 w-12 text-white z-20"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M14.752 11.168l-5.197-3.013A1 1 0 008 9.06v5.879a1 1 0 001.555.832l5.197-3.013a1 1 0 000-1.664z"
									/>
								</svg>
							</div>
						) : (
							<iframe
								className="absolute top-0 left-0 w-full h-full"
								src={
									"https://www.youtube.com/embed/" +
									trailer?.key +
									"?&autoplay=1&mute=1&playlist=" +
									trailer?.key +
									"&loop=1"
								}
								title="YouTube video player"
								allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							></iframe>
						)}
						<img
							src={movieapplogo}
							className=" opacity-90 w-20 rounded-full p-5 absolute bottom-6  right-2  z-10"
							alt="movieapp-logo"
						></img>
						<div className="absolute bottom-0 left-0 w-full h-8 bg-black opacity-100"></div>
						<div className="absolute top-0 left-0 w-full h-12 bg-black opacity-100"></div>
					</div>
					{/* Card Content */}
					<div className="p-4">
						<div className="flex items-center  mb-3">
							<img
								src={movieclapperimg}
								className="w-10 h-10 object-contain p-2"
								alt="movie clapper"
							/>
							<h2 className="text-white font-bold text-2xl mb-0">{title}</h2>
						</div>
						<p className="text-gray-300 text-md mb-4">
							<span className="font-semibold "></span>{" "}
							{genres?.map((genre) => genre.name).join(" | ")}
						</p>

						<p className="text-white text-sm mb-4">{overview}</p>

						<p className="text-gray-300 text-sm mb-2">
							<span className="font-semibold">Origin Country:</span>{" "}
							{origin_country?.join(", ")}
						</p>
						<p className="text-gray-300 text-sm mb-2">
							<span className="font-semibold">Release Date:</span>{" "}
							{release_date}
						</p>
						<p className="text-gray-300 text-sm mb-4">
							<span className="font-semibold">Rating:</span> {vote_average}{" "}
							(IMDb)
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MovieInfoComponent
