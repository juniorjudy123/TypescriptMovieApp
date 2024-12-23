const FooterComponent = () => {
	return (
		<div className="overflow-y-hidden -mt-5  ">
			<footer className=" bg-gray-900 shadow p-4 dark:bg-gray-900 w-full z-10">
				<div className="mx-auto w-full p-2 md:flex md:items-center md:justify-between">
					<span className="text-sm text-gray-300 sm:text-center dark:text-gray-400">
						© 2024{" "}
						<a href="https://flowbite.com/" className="hover:underline">
							Prime Cinemas™
						</a>
						. All Rights Reserved.
					</span>
					<ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 dark:text-gray-400 sm:mt-0">
						<li>
							<a href="#" className="hover:underline me-4 md:me-6">
								About
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline me-4 md:me-6">
								Privacy Policy
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline me-4 md:me-6">
								Licensing
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</footer>
		</div>
	)
}

export default FooterComponent
