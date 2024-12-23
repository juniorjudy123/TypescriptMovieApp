export interface MovieListTypes {
	adult?: boolean
	backdrop_path: URL
	genre_ids: number[]
	id: number
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path: URL
	release_date: string
	title: string
	video: boolean
	vote_average: number
	vote_count: number
}

export interface MovieDetailTypes {
	title: string
	movies: MovieDetailTypes[]
	genres: number[]
	overview: string
	origin_country: string
	release_date: string
	vote_average: number
	id: number
	poster_path: URL
}

export interface MovieCardType {
	id?: number
	poster_path?: URL | string
}

export interface HeaderParameterTypes {
	setSearchQuery: string
	setIsSearch: boolean
}
