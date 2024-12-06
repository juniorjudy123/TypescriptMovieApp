// const Pagination = ({ currentPage, totalPages, onPageChange }) => {
// 	const handlePrevPage = () => {
// 		if (currentPage > 1) onPageChange(currentPage - 1)
// 	}

// 	const handleNextPage = () => {
// 		if (currentPage < totalPages) onPageChange(currentPage + 1)
// 	}

// 	return (
// 		<div className="flex justify-center space-x-3 mt-5">
// 			<button
// 				onClick={handlePrevPage}
// 				className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
// 				disabled={currentPage === 1}
// 			>
// 				Prev
// 			</button>
// 			<span className="text-white">
// 				Page {currentPage} of {totalPages}
// 			</span>
// 			<button
// 				onClick={handleNextPage}
// 				className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
// 				disabled={currentPage === totalPages}
// 			>
// 				Next
// 			</button>
// 		</div>
// 	)
// }

// export default Pagination
