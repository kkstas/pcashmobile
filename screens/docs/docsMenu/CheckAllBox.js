import { StyleSheet, View, Text, Pressable } from "react-native"
import ColorPalette from "../../../theme/ColorPalette"
import Ionicons from "@expo/vector-icons/Ionicons"
import { useState } from "react"

export default function CheckAllBox({ checkAll }) {
	const [check, setCheck] = useState("true")

	function toggleHandler() {
		checkAll(check)
		setCheck((prevState) => !prevState)
	}

	return (
		<Pressable
			style={({ pressed }) => [
				styles.container,
				pressed && styles.pressed,
			]}
			onPress={toggleHandler}
		>
			<Ionicons
				name="checkbox-outline"
				size={23}
				style={styles.icon}
			/>
			<Text style={styles.text}>{check ? "Zaznacz" : "Odznacz"}</Text>
			<Text style={styles.text}>wszystko</Text>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: 70,
		backgroundColor: ColorPalette.white,

		borderTopLeftRadius: 15,
		justifyContent: "center",
		alignItems: "center",
	},
	icon: {
		color: ColorPalette.magenta400,
		marginBottom: 4,
		marginTop: 4,
	},
	text: {
		fontSize: 10,
		color: ColorPalette.blue400dark,
		lineHeight: 10,
	},
	pressed: {
		opacity: 0.7,
	},
})
