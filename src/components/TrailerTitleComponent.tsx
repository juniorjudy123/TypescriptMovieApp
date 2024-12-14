import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBriefcase, faPlay } from "@fortawesome/free-solid-svg-icons"

const TrailerTitleComponent = ({ title, description }) => {
	return (
		<div className="w-screen  aspect-video top-2 absolute pt-[20%] px-10 text-white bg-gradient-to-r from-black  mt-[-150px]">
			<h1 className="text-3xl font-semibold font-sans">{title}</h1>
			<p className=" text-base w-1/5  my-4 pt-4 font-roboto text-left">
				{description}
			</p>
			<div className="flex items-center">
				<FontAwesomeIcon
					icon={faBriefcase} // Pass the icon object here
					style={{ color: "#f3d053" }}
					className="opacity-85 p-1"
				/>
				<span className="p-2 text-lg font-seriff font-semibold">
					Watch with Gold membership
				</span>
			</div>

			<div className="mt-6 ">
				<button className="bg-gray-700 font-roboto text-white p-5 px-16 mr-6 cursor-pointer text-lg rounded-lg font-semibold  hover:text-black hover:bg-white hover:scale-105 active:scale-95 active:bg-[#0048d5] transition-all duration-200 hover:bg-opacity-80   ">
					<FontAwesomeIcon icon={faPlay} className="w-5 h-5 mr-3" />
					Watch now
				</button>
			</div>
		</div>
	)
}

export default TrailerTitleComponent
