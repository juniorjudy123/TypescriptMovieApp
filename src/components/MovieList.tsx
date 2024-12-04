// // /* eslint-disable @typescript-eslint/no-explicit-any */
// // import MovieCardComponent from "./MovieCardComponent"
// // import {
// // 	MovieListTypes,
// // 	MovieDetailTypes,
// // 	MovieCardType,
// // } from "../types/MovieDetailType"
// // import { Link } from "react-router-dom"

// // const MovieList = ({ title, movies }: MovieDetailTypes) => {
// // 	console.log("checking movies", movies)
// // 	if (!movies) return // early return

// // 	return (
// // 		<div className=" px-3">
// // 			<div className="flex  items-center justify-between ">
// // 				<h1 className="text-2xl py-2   text-white">{title}</h1>
// // 				<Link
// // 					to="/movies"
// // 					className="text-yellow-400 py-2 mr-10 cursor-pointer hover:underline hover:text-yellow-200 transition duration-200 ease-in-out text-lg"
// // 				>
// // 					see more{" "}
// // 				</Link>
// // 			</div>
// // 			<div className="flex overflow-x-scroll hide-scrollbar">
// // 				<div className="flex  ">
// // 					{movies?.map(({ id, poster_path }: any) => (
// // 						<MovieCardComponent key={id} id={id} poster_path={poster_path} />
// // 					))}
// // 					{/* movies?.map(({ id, poster_path }:any) => {
// //   if (!id || !poster_path) return null; // Handle missing properties
// //   return <MovieCardComponent key={id} id={id} posterpath={poster_path} />;
// // }); */}
// // 				</div>
// // 			</div>
// // 		</div>
// // 	)
// // }

// // export default MovieList

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import MovieCardComponent from "./MovieCardComponent"
import { MovieDetailTypes } from "../types/MovieDetailType"

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 9,
		slidesToSlide: 8, // Adjust based on preference
	},
	// tablet: {
	// 	breakpoint: { max: 1024, min: 464 },
	// 	items: 2,
	// 	slidesToSlide: 2,
	// },
	// mobile: {
	// 	breakpoint: { max: 464, min: 0 },
	// 	items: 1,
	// 	slidesToSlide: 1,
	// },
}

const MovieList = ({ title, movies }: MovieDetailTypes) => {
	if (!movies) return // early return
	return (
		<div className="px-3">
			{/* Section Title */}
			<div className="flex items-center justify-between">
				<h1 className="text-2xl py-2 text-white">{title}</h1>
				<span className="text-yellow-400 py-2 cursor-pointer hover:underline hover:text-yellow-200 transition duration-200 ease-in-out text-lg">
					See more
				</span>
			</div>

			{/* Carousel */}
			<div className="relative ">
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
					itemClass="carousel-item-padding-40-px"
					shouldResetAutoplay={true}
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
