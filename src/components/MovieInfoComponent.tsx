import MovieCardComponent from "./MovieCardComponent" // Assuming MovieCardComponent is imported
import VideoBg from "../assets/bg-gradient.mov"

const MovieInfoComponent = () => {
	return (
		<div>
			<div className="flex justify-center items-center h-screen ">
				<video
					className="absolute inset-0 w-full h-full object-cover"
					src={VideoBg}
					autoPlay
					muted
				/>

				{/* Centered Box */}
				<div className="w-3/4 bg-white shadow-lg rounded-xl overflow-hidden relative">
					{/* Movie Card */}
					<div className="absolute top-6 left-5 p-6">
						<MovieCardComponent
							posterpath={"/aosm8NMQ3UyoBVpSxyimorCQykC.jpg"}
						/>
					</div>

					{/* White and Yellow Sections inside the main box */}
					<div className="flex flex-col h-[30rem]">
						{/* White Section */}
						<div className="flex-1 bg-white"></div>

						{/* Yellow Section */}
						<div className="flex-1 bg-yellow-500"></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MovieInfoComponent
