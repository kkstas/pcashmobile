import {
	View,
	StyleSheet,
	Pressable,
	Keyboard,
	Text,
	TextInput,
} from "react-native"
import ColorPalette from "../../theme/ColorPalette"
import { useState } from "react"
import * as Haptics from "expo-haptics"
import Ionicons from "@expo/vector-icons/Ionicons"

export default function PasswordInput({
	placeholder,
	value,
	onChangeText,
	err,
	onFocus,
	onBlur,
}) {
	const [borderColor, setBorderColor] = useState(ColorPalette.blue400)
	const [textColor, setTextColor] = useState(ColorPalette.blue400)

	function blurSettings() {
		onBlur()
		setBorderColor(ColorPalette.blue400)
		setTextColor(ColorPalette.blue400)
	}

	function focusSettings() {
		onFocus()
		setBorderColor(ColorPalette.magenta400)
		setTextColor(ColorPalette.blue400dark)
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
	}

	return (
		<View style={styles.container}>
			<View style={styles.textContainer}>
				<Text style={[styles.text, { color: borderColor }]}>Hasło</Text>
			</View>
			{err && (
				<View style={styles.errTextContainer}>
					<Text style={styles.errText}>{err}</Text>
				</View>
			)}
			<TextInput
				onChangeText={onChangeText}
				value={value}
				autoCapitalize="none"
				autoCorrect={false}
				autoComplete="off"
				secureTextEntry={true}
				placeholder={placeholder}
				maxLength={50}
				style={[
					styles.textInput,
					{
						borderColor: borderColor,
						color: textColor,
					},
				]}
				onBlur={blurSettings}
				onFocus={focusSettings}
				onSubmitEditing={Keyboard.dismiss}
			/>
			<Ionicons
				name="shield-outline"
				size={16}
				color={borderColor}
				style={styles.icon}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	textInput: {
		width: "100%",
		paddingVertical: 12,
		paddingHorizontal: 12,
		borderRadius: 10,
		borderWidth: 0.4,
		marginBottom: 10,
		paddingLeft: 34,
	},
	icon: {
		position: "absolute",
		left: 9,
		paddingBottom: 10,
		opacity: 0.7,
	},
	text: {
		width: "100%",
		fontSize: 11,
	},
	textContainer: {
		backgroundColor: "#fff",
		position: "absolute",
		top: -7,
		zIndex: 3,
		paddingHorizontal: 4,
		left: 22,
	},
	errTextContainer: {
		position: "absolute",
		bottom: -5,
		zIndex: 3,
		paddingHorizontal: 4,
		right: 22,
	},
	errText: {
		fontSize: 11,
		color: "#ff0000",
	},
})
