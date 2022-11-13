import { View, TextInput, StyleSheet, Text } from "react-native"
import ColorPalette from "../../../theme/ColorPalette"

export default function BodyInput({ onChangeText, value }) {
	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				placeholder="body input"
				multiline
				numberOfLines={4}
				onChangeText={(text) => onChangeText(text)}
				value={value}
			/>
		</View>
	)
}

const styles = StyleSheet.flatten({
	container: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 10,
	},
	input: {
		width: "90%",
		height: 140,
		backgroundColor: ColorPalette.white,
		color: ColorPalette.blue400dark,
		paddingHorizontal: 16,
		paddingTop: 12,
		paddingBottom: 12,
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.12,
		shadowRadius: 1.8,
		elevation: 4,
	},
})
