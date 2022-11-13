import { View, Pressable, Keyboard, StyleSheet, Text } from "react-native"
import ColorPalette from "../../theme/ColorPalette"
import LogInInput from "./LogInInput"
import { useState } from "react"
import * as Haptics from "expo-haptics"
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withTiming,
	Easing,
} from "react-native-reanimated"
import PasswordInput from "./PasswordInput"
import LogInButton from "./LogInButton"
import { useDispatch, useSelector } from "react-redux"
import { logIn } from "../../store/redux/slices/userInfo"
import loginValidator from "./logInValidator"

export default function LogInBox({ navigation }) {
	/* redux */
	const dispatch = useDispatch()
	const isLoggedIn = useSelector((state) => state.userInfo.isLoggedIn)
	/* //redux end */

	if (isLoggedIn) {
		navigation.replace("Main")
	}

	/* animacja przy on/off klawiatury w tel */
	/* animacja przy on/off klawiatury w tel */
	const offset = useSharedValue(0)
	const animatedStyles = useAnimatedStyle(() => {
		return {
			transform: [{ translateY: offset.value }],
		}
	})
	/* ten effect został zastąpiony onBlur i onFocus w inputach */
	// useEffect(() => {
	// 	const subscriptionAdd = Keyboard.addListener(
	// 		"keyboardDidShow",
	// 		_keyboardDidShow
	// 	)
	// 	const subscriptionRem = Keyboard.addListener(
	// 		"keyboardDidHide",
	// 		_keyboardDidHide
	// 	)
	// 	// cleanup function
	// 	return () => {
	// 		subscriptionAdd.remove()
	// 		subscriptionRem.remove()
	// 	}
	// }, [])

	const onFocusLogin = () => {
		offset.value = withTiming(-100, {
			duration: 350,
			easing: Easing.bezier(0.33, 1, 0.68, 1),
		})
		setLogInErrText("")
	}
	const onFocusPassword = () => {
		offset.value = withTiming(-100, {
			duration: 350,
			easing: Easing.bezier(0.33, 1, 0.68, 1),
		})
		setPasswordErrText("")
	}

	const _keyboardDidHide = () => {
		offset.value = withTiming(0, {
			duration: 350,
			easing: Easing.bezier(0.33, 1, 0.68, 1),
		})
	}
	/* ^ animacja przy toggle on/off klawiatury na tel */
	/* ^ animacja przy toggle on/off klawiatury na tel */

	const [userInputName, setUserInputName] = useState("")
	const [userInputPassword, setUserInputPassword] = useState("")

	const [logInErrText, setLogInErrText] = useState("")
	const [passwordErrText, setPasswordErrText] = useState("")

	function helpHandler() {
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
		console.log("help pressed")
	}

	function loginHandler() {
		const validator = loginValidator(userInputName, userInputPassword)
		if (validator.isOk) {
			dispatch(logIn(userInputName))
			setUserInputName("")
			setUserInputPassword("")
			navigation.replace("Main")
			Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
		} else {
			setLogInErrText(validator.loginErr)
			setPasswordErrText(validator.passwordErr)
			Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
		}
	}

	return (
		<Animated.View style={[styles.container, animatedStyles]}>
			<View style={styles.textView}>
				<Text style={styles.text}>Logowanie</Text>
				<View style={styles.bottomLine}></View>
				<View style={styles.bottomLineTwo}></View>
			</View>
			<LogInInput
				placeholder="Login lub adres e-mail"
				value={userInputName}
				onChangeText={setUserInputName}
				err={logInErrText}
				onFocus={onFocusLogin}
				onBlur={_keyboardDidHide}
			/>
			<PasswordInput
				placeholder="Hasło"
				value={userInputPassword}
				onChangeText={setUserInputPassword}
				err={passwordErrText}
				onFocus={onFocusPassword}
				onBlur={_keyboardDidHide}
			/>
			<LogInButton onPress={loginHandler} />
			<Pressable
				onPress={helpHandler}
				style={({ pressed }) => [
					styles.helpView,
					pressed && styles.pressed,
				]}
			>
				<Text style={styles.helpText}>Pomoc</Text>
			</Pressable>
		</Animated.View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "90%",

		paddingHorizontal: "8%",
		backgroundColor: ColorPalette.white,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 30,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.12,
		shadowRadius: 1.8,
		elevation: 4,
		marginTop: 45,
	},
	text: {
		fontSize: 40,
		fontWeight: "300",
		color: ColorPalette.blue400,
		zIndex: 1,
		letterSpacing: 1,
	},
	textView: {
		width: "100%",
		marginBottom: 30,
		marginLeft: 15,
		marginTop: 28,
	},
	bottomLine: {
		borderTopWidth: 1.6,
		opacity: 0.9,
		borderTopColor: ColorPalette.magenta400,
		width: "14%",
		zIndex: 0,
		position: "absolute",
		bottom: 6,
	},
	bottomLineTwo: {
		borderTopWidth: 1.5,
		opacity: 0.9,
		borderTopColor: ColorPalette.blue300,
		width: "10%",
		zIndex: 0,
		position: "absolute",
		bottom: 4.5,
	},
	helpView: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 12,
		paddingBottom: 20,
	},
	helpText: {
		color: ColorPalette.blue400,
		fontWeight: "400",
		fontSize: 14,
	},
	pressed: {
		opacity: 0.4,
	},
})
