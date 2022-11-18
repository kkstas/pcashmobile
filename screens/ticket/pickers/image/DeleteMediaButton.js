import { StyleSheet, Pressable } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"
import * as Haptics from "expo-haptics"
import ColorPalette from "../../../../theme/ColorPalette"
import { useDispatch } from "react-redux"
import { clearAll } from "../../../../store/redux/slices/ticketMedia"
import { LinearGradient } from "expo-linear-gradient"

export default function DeleteMediaButton() {
	const dispatch = useDispatch()
	function deleteMediaHandler() {
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
		dispatch(clearAll())
	}

	return (
		<LinearGradient
			style={styles.grad}
			colors={["rgba(205, 9, 50, 1)", "rgb(255, 40, 50)"]}
		>
			<Pressable
				style={({ pressed }) => [
					styles.cross,
					pressed && styles.pressed,
				]}
				onPress={deleteMediaHandler}
			>
				<Ionicons
					name="close"
					size={36}
					color={ColorPalette.white}
				/>
			</Pressable>
		</LinearGradient>
	)
}

const styles = StyleSheet.create({
	grad: {
		position: "absolute",
		right: 10,
		bottom: 20,
		width: 50,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 30,
	},
	cross: {
		width: 50,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 30,
	},
	pressed: {
		opacity: 0.3,
	},
})
