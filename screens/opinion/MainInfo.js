import { View, Pressable, StyleSheet, Text } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"
import ColorPalette from "../../theme/ColorPalette"
import Separator from "./Separator"

export default function MainInfo() {
	return (
		<View style={styles.container}>
			<View style={styles.firstRow}>
				<Ionicons
					name="chatbubbles-outline"
					size={82}
					color={ColorPalette.blue400}
				/>
				<View style={styles.textContainer}>
					<Text style={styles.mainTextOne}>Przekaż nam</Text>
					<Text style={styles.mainTextTwo}>swoją opinię!</Text>
				</View>
			</View>
			<Separator />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		justifyContent: "center",
		paddingTop: 18,
	},
	firstRow: {
		flexDirection: "row",
		alignItems: "flex-end",
		paddingLeft: "12%",
		width: "100%",
		paddingHorizontal: 20,
	},
	textContainer: {
		paddingHorizontal: 10,
		paddingBottom: 3,
	},
	mainTextOne: {
		fontSize: 20,
		color: ColorPalette.blue400dark,
	},
	mainTextTwo: {
		fontSize: 30,
		color: ColorPalette.blue400,
	},
	text: {},
})
