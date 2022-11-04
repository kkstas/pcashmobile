import { StyleSheet, Text, Pressable } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"
import ColorPalette from "../../../theme/ColorPalette"

export default function TicketBox() {
	return (
		<Pressable
			style={({ pressed }) => [
				styles.container,
				pressed && styles.pressed,
			]}
		>
			<Ionicons
				name="camera-outline"
				size={24}
				color={ColorPalette.blue400}
			/>
			<Text style={styles.text}>Utwórz zgłoszenie</Text>
		</Pressable>
	)
}
const styles = StyleSheet.create({
	container: {
		width: "45%",
		height: 100,
		backgroundColor: "#fff",
		borderRadius: 15,
		justifyContent: "center",
		alignItems: "center",
		marginHorizontal: 5,
		bottom: 0,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1.5,
		},
		shadowOpacity: 0.1,
		shadowRadius: 1.5,
		elevation: 3,
	},
	text: {
		color: ColorPalette.blue400,
		marginTop: 6,
	},
	pressed: {
		opacity: 0.5,
	},
})
