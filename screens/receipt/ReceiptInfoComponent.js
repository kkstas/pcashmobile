import { View, StyleSheet, Text, Pressable } from "react-native"
import { BlurView } from "expo-blur"
import Ionicons from "@expo/vector-icons/Ionicons"
import ColorPalette from "../../theme/ColorPalette"

export default function ReceiptInfoComponent() {
	return (
		<View style={styles.container}>
			<BlurView
				intensity={75}
				tint="dark"
				style={styles.blurContainer}
			>
				<View style={styles.box}>
					<Ionicons
						name="scan-outline"
						size={50}
						color={ColorPalette.backgroundDarker}
					/>
					<Text style={styles.text}>Wyceluj telefon w kod QR</Text>
				</View>
			</BlurView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		height: "100%",
		paddingTop: "90%",
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	blurContainer: {
		flex: 1,
		width: "70%",
		marginTop: "70%",
		borderTopLeftRadius: 35,
		borderTopRightRadius: 35,
		marginBottom: 85,
		overflow: "hidden",
	},
	box: {
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 20,
		color: ColorPalette.backgroundDarker,
		marginTop: 10,
		marginBottom: 20,
	},
})
