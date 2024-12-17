export const checkValidData = (email, password, name, isSignIn) => {
	{
		if (!email || !password) {
			return "Email and password are required."
		}
		const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
		if (!emailPattern.test(email)) {
			return "Invalid email format."
		}
		if (!isSignIn && !name) {
			return "Full name is required for sign up."
		}
		if (password.length < 6) {
			return "Password must be at least 6 characters."
		}
	}

	return null
}

export const getErrorMessage = (errorCode: string): string => {
	let displayMessage = ""
	switch (errorCode) {
		case "auth/invalid-credential":
			displayMessage =
				"Invalid credentials. Please check your email and password"
			break
		case "auth/user-not-found":
			displayMessage = " No user found . Please check your email."
			break
		case "auth/wrong-password":
			displayMessage = " Wrong password . Please try again."
			break
		case "auth/invalid-email":
			displayMessage = "Invalid email address. Please enter a valid one "
			break
		default:
			displayMessage = "An error occurred. Please try again later."
			break
	}
	return displayMessage
}
