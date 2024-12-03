import { useSelector } from "react-redux"
import useTrailerVideo from "../hooks/useTrailerVideo"

const TrailerComponent = ({ movieId }) => {
	useTrailerVideo(movieId)

	// subscribing to the store which is now updated by the useTrailerVideo hook
	const trailer = useSelector((store) => store.movies?.trailerVideo)

	return (
		<div className="w-screen relative mt-[-120px]">
			<iframe
				className="w-screen aspect-video"
				src={
					"https://www.youtube.com/embed/" +
					trailer?.key +
					"?&autoplay=1&mute=1&playlist=" +
					trailer?.key +
					"&loop=1"
				}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				loading="lazy"
			></iframe>
		</div>
	)
}

export default TrailerComponent
