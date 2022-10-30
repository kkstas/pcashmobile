import { Pressable, View, Image, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ColorPalette from "../../theme/ColorPalette";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TitleComponent({ title }) {
	const navigation = useNavigation();

	return (
		<Pressable
			style={({ pressed }) => [
				styles.container,
				pressed && styles.pressed,
			]}
			onPress={() => navigation.goBack()}
		>
			<Image
				style={styles.logo}
				source={require("../../assets/ITCARD-svg-210126-OK.png")}
			/>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "100%",
	},
	logo: {
		width: 90,
		height: 19,
		opacity: 0.8,
	},
	pressed: {
		opacity: 0.5,
	},
	text: {
		color: ColorPalette.blue400,
		width: 100,
		maxHeight: 18,
		textAlign: "center",
	},
});
