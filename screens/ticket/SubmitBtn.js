import { View, Pressable, StyleSheet, Text } from "react-native"
import ColorPalette from "../../theme/ColorPalette"
import { LinearGradient } from "expo-linear-gradient"

export default function SubmitBtn(props) {
	return (
		<View style={styles.container}>
			<LinearGradient
				style={styles.grad}
				colors={[ColorPalette.green, "rgba(53, 214, 170, 0.9)"]}
			/>
			<Pressable
				style={({ pressed }) => [
					styles.pressable,
					pressed && styles.pressed,
				]}
			>
				<Text style={styles.text}>Wyślij zgłoszenie</Text>
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "90%",
		borderRadius: 15,
		justifyContent: "center",
		alignItems: "center",
		marginVertical: 10,
		marginHorizontal: 5,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1.5,
		},
		shadowOpacity: 0.25,
		shadowRadius: 1.9,
		elevation: 3,
		flex: 1,
	},
	pressable: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 10,
		paddingHorizontal: 15,
		borderRadius: 15,
		flex: 1,
		height: "100%",
	},
	pressed: {
		backgroundColor: "rgba(255, 255, 255, 0.5)",
	},
	text: {
		color: ColorPalette.white,
		fontSize: 16,
		fontWeight: "500",
	},
	grad: {
		flex: 1,
		width: "100%",
		position: "absolute",
		borderRadius: 15,
		height: "100%",
	},
})
