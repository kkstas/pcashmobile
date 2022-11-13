import { StyleSheet, View, Text, Pressable } from "react-native"
import ColorPalette from "../../../theme/ColorPalette"
import Ionicons from "@expo/vector-icons/Ionicons"

export default function ExportAllBox() {
	return (
		<Pressable
			style={({ pressed }) => [
				styles.container,
				pressed && styles.pressed,
			]}
		>
			<Ionicons
				name="download-outline"
				size={25}
				style={styles.icon}
			/>
			<Text style={styles.text}>Eksportuj</Text>
			<Text style={styles.text}>wszystko</Text>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: 70,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(255, 255, 255, 0.8)",
	},
	icon: {
		color: ColorPalette.blue400,
		marginBottom: 5,
		marginTop: 3,
	},
	text: {
		fontSize: 10,
		color: ColorPalette.blue400dark,
		lineHeight: 10,
	},
	pressed: {
		opacity: 0.69,
		backgroundColor: "rgb(245, 245, 255)",
	},
})
