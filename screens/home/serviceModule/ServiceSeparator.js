import { View, Text, StyleSheet } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"
import ColorPalette from "../../../theme/ColorPalette"

export default function ServiceSeparator() {
	return (
		<View style={styles.container}>
			<View style={styles.line}></View>
			<View style={styles.iconContainer}>
				<Text style={styles.icon}>Moduł serwisanta</Text>
			</View>
			<View style={styles.line}></View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: 20,
		marginTop: 15,
		marginBottom: 5,
		position: "relative",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		opacity: 0.4,
	},
	line: {
		height: 0.5,
		backgroundColor: ColorPalette.blue400,
		flex: 1,
	},
	icon: {
		color: ColorPalette.blue400,
	},
	iconContainer: {
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
	},
})
