import { StyleSheet, View, Text, Pressable } from "react-native"
import ColorPalette from "../../../theme/ColorPalette"
import Ionicons from "@expo/vector-icons/Ionicons"

export default function ExportCheckedBox() {
	return (
		<Pressable
			style={({ pressed }) => [
				styles.container,
				pressed && styles.pressed,
			]}
		>
			<Ionicons
				name="share-outline"
				size={24}
				style={styles.icon}
			/>
			<Text style={styles.text}>Eksportuj</Text>
			<Text style={styles.text}>zaznaczone</Text>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: 70,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: ColorPalette.white,
	},
	icon: {
		color: ColorPalette.green,
		marginBottom: 5,
		marginTop: 3,
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
