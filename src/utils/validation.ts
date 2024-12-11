export const checkValidData = (email, password, name) => {
	if (!email || !password) {
		return "Email and password are required."
	}
	const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
	if (!emailPattern.test(email)) {
		return "Invalid email format."
	}
	if (!name && !isSignIn) {
		return "Full name is required for sign up."
	}
	if (password.length < 6) {
		return "Password must be at least 6 characters."
	}
	return "" // Return empty string when no errors.
}
