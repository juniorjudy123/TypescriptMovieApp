import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBriefcase } from "@fortawesome/free-solid-svg-icons"

const TrailerTitleComponent = ({ title, description }) => {
	return (
		<div className="w-screen  aspect-video top-2 absolute pt-[20%] px-10 text-white bg-gradient-to-r from-black  mt-[-150px]">
			<h1 className="text-3xl font-semibold font-sans">{title}</h1>
			<p className=" text-base w-1/5  my-5 pt-4 font-roboto text-left">
				{description}
			</p>
			<div className="flex items-center">
				<FontAwesomeIcon
					icon={faBriefcase} // Pass the icon object here
					style={{ color: "#f3d053" }}
					className="opacity-85 p-2"
				/>
				<span className="p-2 text-xl font-seriff font-semibold">
					Watch with Gold membership
				</span>
			</div>

			<div className="mt-4">
				<button className="bg-white font-roboto text-black p-3 px-16 border border-gray-400 mr-3 cursor-pointer text-md rounded-sm font-semibold  hover:text-black hover:scale-105 active:scale-95 active:bg-[#0048d5] transition-all duration-200 hover:bg-opacity-80">
					▶️Play
				</button>
				<button className=" bg-gray-400 font-roboto text-black p-3 px-16 border border-gray-400 cursor-pointer text-md  font-semibold rounded-sm  hover: hover:scale-105 active:scale-95 active:bg-[#0048d5] transition-all duration-200 hover:bg-opacity-80 hover:bg-white">
					ℹ️ More info
				</button>
			</div>
		</div>
	)
}

export default TrailerTitleComponent
