const HeroComponent = () => {
	return (
		<div className="relative z-5 h-[50vh] ">
			<iframe
				className="w-full h-full  aspect-video "
				// className=" w-full aspect-video"
				src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				style={{ zIndex: -1 }}
				loading="lazy"
			></iframe>
		</div>
	)
}

export default HeroComponent
