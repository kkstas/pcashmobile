import { Pressable, View, StyleSheet, Text } from "react-native"
import ColorPalette from "../../../../theme/ColorPalette"
import Ionicons from "@expo/vector-icons/Ionicons"
import * as Haptics from "expo-haptics"
import { useDispatch } from "react-redux"
import { LinearGradient } from "expo-linear-gradient"

export default function PickFromMap() {
	return (
		<View style={styles.singleBtnContainer}>
			<LinearGradient
				style={styles.grad}
				colors={["#D0B8A8", "#665A48"]}
			>
				<Pressable
					style={({ pressed }) => [
						styles.pickFromMap,
						pressed && styles.pressed,
					]}
				>
					<Ionicons
						name="map"
						size={36}
						color={ColorPalette.white}
					/>
				</Pressable>
			</LinearGradient>
			<Text style={styles.smallerBodyText}>Zaznacz</Text>
			<Text style={styles.smallerBodyText}>na mapie</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	pickFromMap: {
		width: 70,
		height: 70,
		borderRadius: 35,
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
