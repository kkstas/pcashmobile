import { Pressable, View, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ColorPalette from "../../theme/ColorPalette";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function GoBackButton() {
	const navigation = useNavigation();

	return (
		<Pressable
			style={({ pressed }) => [
				styles.container,
				pressed && styles.pressed,
			]}
			onPress={() => navigation.pop(1)}
		>
			<Ionicons
				name="chevron-back"
				size={32}
				color={ColorPalette.blue400}
			/>
			<Text style={styles.text}>Wstecz</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "100%",
	},
	pressed: {
		opacity: 0.5,
	},
	text: {
		color: ColorPalette.blue400,
	},
});
