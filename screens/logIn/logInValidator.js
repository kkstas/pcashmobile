export default function loginValidator(loginString, passwordString) {
	const validator = {
		isOk: false,
		loginErr: "",
		passwordErr: "",
	}

	if (loginString.length >= 0 && passwordString.length >= 0) {
		validator.isOk = true
	} else {
		if (loginString.length == 0) {
			validator.loginErr = "To pole jest puste!"
		}
		if (passwordString.length == 0) {
			validator.passwordErr = "To pole jest puste!"
		}
	}

	return validator
}
