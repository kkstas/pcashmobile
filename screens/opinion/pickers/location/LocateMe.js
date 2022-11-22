import { Pressable, View, StyleSheet, Text } from "react-native"
import ColorPalette from "../../../../theme/ColorPalette"
import Ionicons from "@expo/vector-icons/Ionicons"
import * as Haptics from "expo-haptics"
import { useDispatch } from "react-redux"
import { LinearGradient } from "expo-linear-gradient"

export default function LocateMe() {
	return (
		<View style={styles.singleBtnContainer}>
			<LinearGradient
				style={styles.grad}
				colors={["rgb(60, 225, 222)", "rgb(37, 111, 104)"]}
			>
				<Pressable
					style={({ pressed }) => [
						styles.locateMeBtn,
						pressed && styles.pressed,
					]}
				>
					<Ionicons
						name="navigate"
						size={36}
						color={ColorPalette.white}
					/>
				</Pressable>
			</LinearGradient>
			<Text style={styles.smallerBodyText}>Zlokalizuj</Text>
			<Text style={styles.smallerBodyText}>mnie</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	locateMeBtn: {
		width: 70,
		height: 70,
		borderRadius: 35,
		paddingTop: 3,
		margin: 4,
		justifyContent: "center",
		alignItems: "center",
	},
	pressed: {
		backgroundColor: "rgba(0, 0, 0, 0.35)",
	},
	singleBtnContainer: {
		justifyContent: "center",
		alignItems: "center",
		margin: 8,
	},
	smallerBodyText: {
		fontWeight: "500",
		color: ColorPalette.blue400dark,
		fontSize: 15,
		lineHeight: 18,
	},
	grad: {
		width: 70,
		height: 70,
		borderRadius: 35,
		margin: 4,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 8,
	},
})
