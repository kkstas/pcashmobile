import { Pressable, StyleSheet, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import ColorPalette from "../../theme/ColorPalette"
import Ionicons from "@expo/vector-icons/Ionicons"
import { useDispatch } from "react-redux"
import { logOut } from "../../store/redux/slices/userInfo"

export default function LogOutButton() {
	const navigation = useNavigation()
	const dispatch = useDispatch()

	function handlePressed() {
		dispatch(logOut())
		navigation.replace("Logging")
	}
	return (
		<Pressable
			style={({ pressed }) => [
				styles.container,
				pressed && styles.pressed,
			]}
			onPress={handlePressed}
		>
			<Text style={styles.text}>Wyloguj</Text>
			<Ionicons
				name="log-out-outline"
				size={32}
				color={ColorPalette.blue400}
			/>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "100%",
		paddingRight: 16,
	},
	pressed: {
		opacity: 0.5,
	},
	text: {
		color: ColorPalette.blue400,
		paddingRight: 6,
	},
})
