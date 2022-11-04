import { LinearGradient } from "expo-linear-gradient"
import { View, Text, StyleSheet } from "react-native"
import ColorPalette from "../../../theme/ColorPalette"

export default function ModuleTitle() {
	return (
		<View style={styles.container}>
			<LinearGradient
				style={styles.boxContainer}
				colors={[
					"rgba(245, 245, 255, 0.4)",

					"rgba(255, 255, 255, 1)",

					"rgba(245, 245, 255, 0.4)",
				]}
			>
				<Text style={styles.text}>Twoje moduły:</Text>
			</LinearGradient>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		height: 50,
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 15,
	},
	boxContainer: {
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
	text: {
		color: ColorPalette.blue400,
		fontWeight: "400",
		fontSize: 20,
	},
})
