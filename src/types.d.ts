// src/declarations.d.ts or src/types.d.ts (ensure it's in your `src` folder)
declare module "*.jpg" {
	const value: string
	export default value
}

declare module "*.png" {
	const value: string
	export default value
}
