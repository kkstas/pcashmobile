import { View, StyleSheet } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"
import ColorPalette from "../../theme/ColorPalette"

export default function PhotoSeparator() {
	return (
		<View style={styles.container}>
			<View style={styles.line}></View>
			<View style={styles.iconContainer}>
				<Ionicons
					name="camera-outline"
					size={15}
					style={styles.icon}
				/>
			</View>
			<View style={styles.line}></View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: 20,
		marginTop: 20,
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
		flex: 3,
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
