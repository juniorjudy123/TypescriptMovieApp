import { useDispatch } from "react-redux"
import { API_options } from "../utils/constants"
import { addTrailerVideo } from "../utils/slices/moviesSlice"
import { useEffect } from "react"

const useTrailerVideo = (movieId: any) => {
	const dispatch = useDispatch()

	const getTrailerVideos = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/" +
				movieId +
				"/videos?language=en-US",
			API_options
		)
		const json = await data.json()

		//filtering to get the trailer video
		const filteredData = json.results.filter((video) => video.type === "Teaser")
		const trailerVideo = filteredData.length ? filteredData[3] : json.results[0]
		dispatch(addTrailerVideo(trailerVideo))
	}
	useEffect(() => {
		getTrailerVideos()
	}, [])
}

export default useTrailerVideo
