import { View, StyleSheet, Text, Pressable } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"
import ColorPalette from "../../../theme/ColorPalette"

export default function AllReceiptsBox({ onPress }) {
	return (
		<Pressable
			style={({ pressed }) => [
				styles.container,
				pressed && styles.pressed,
			]}
			onPress={onPress}
		>
			<View style={styles.floatingChevron}>
				<Ionicons
					name="chevron-back-outline"
					size={34}
					color={ColorPalette.blue400}
				/>
			</View>
			<Ionicons
				name="document-text-outline"
				size={24}
				color={ColorPalette.blue400}
			/>
			<Text style={styles.text}>Twoje</Text>
			<Text style={styles.textTwo}>potwierdzenia</Text>
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
		paddingTop: 10,
	},
	text: {
		color: ColorPalette.blue400,
		paddingTop: 5,
	},
	textTwo: {
		color: ColorPalette.blue400,
	},
	pressed: {
		opacity: 0.5,
	},
	floatingChevron: {
		position: "absolute",
		left: 1,
		opacity: 0.2,
	},
})
