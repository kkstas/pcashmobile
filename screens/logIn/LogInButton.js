import { StyleSheet, Pressable, Text } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import ColorPalette from "../../theme/ColorPalette"

export default function LogInButton({ onPress }) {
	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => [
				styles.container,
				pressed && styles.pressed,
			]}
		>
			<LinearGradient
				style={styles.grad}
				colors={[ColorPalette.blue400, ColorPalette.blue400dark]}
			>
				<Text style={styles.text}>Zaloguj</Text>
			</LinearGradient>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: 40,
		borderRadius: 10,
		marginTop: 12,
	},
	grad: {
		flex: 1,
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		letterSpacing: 1.7,
		fontWeight: "300",
		color: ColorPalette.white,
		fontSize: 20,
	},
	pressed: {
		opacity: 0.4,
	},
})
