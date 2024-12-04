import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import MovieCardComponent from "./MovieCardComponent"
import { MovieDetailTypes } from "../types/MovieDetailType"

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 8,
		slidesToSlide: 8, // Adjust based on preference
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 4,
		slidesToSlide: 4,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 2,
		slidesToSlide: 2,
	},
}

// Custom Left Arrow
const CustomLeftArrow = ({ onClick }) => (
	<button
		className="absolute left-0 z-10 bg-gray-700 text-white p-3 rounded-lg hover:bg-gray-500 transition duration-200 opacity-90"
		style={{ top: "50%", transform: "translateY(-50%)" }}
		onClick={onClick}
	>
		<FontAwesomeIcon icon={faChevronLeft} fade />
	</button>
)

// Custom Right Arrow
const CustomRightArrow = ({ onClick }) => (
	<button
		className="absolute right-0 z-10  bg-gray-700 text-white p-3 rounded-lg hover:bg-gray-500 transition duration-200 opacity-90"
		style={{ top: "50%", transform: "translateY(-50%)" }}
		onClick={onClick}
	>
		<FontAwesomeIcon icon={faChevronRight} fade />
	</button>
)

const MovieList = ({ title, movies }: MovieDetailTypes) => {
	if (!movies) return null // early return if no movies
	return (
		<div className="px-3">
			{/* Section Title */}
			<div className="flex items-center justify-between">
				<h1 className="text-2xl py-2 m-1 text-white">{title}</h1>
				<span className="text-yellow-400 py-2  mr-2 cursor-pointer hover:underline hover:text-yellow-200 transition duration-200 ease-in-out text-lg">
					See more
				</span>
			</div>

			{/* Carousel */}
			<div className="relative py-2 m-1">
				<Carousel
					swipeable={true}
					draggable={true}
					responsive={responsive}
					ssr={true}
					infinite={true}
					autoPlay={false}
					autoPlaySpeed={10000}
					keyBoardControl={true}
					customTransition="all .5"
					transitionDuration={500}
					containerClass="carousel-container"
					removeArrowOnDeviceType={["tablet", "mobile"]}
					dotListClass="custom-dot-list-style"
					itemClass="carousel-item-padding-30-px"
					shouldResetAutoplay={true}
					customLeftArrow={<CustomLeftArrow />}
					customRightArrow={<CustomRightArrow />}
				>
					{movies?.map(({ id, poster_path }) => (
						<MovieCardComponent key={id} id={id} poster_path={poster_path} />
					))}
				</Carousel>
			</div>
		</div>
	)
}

export default MovieList
