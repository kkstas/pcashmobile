import { View, TextInput, StyleSheet, Text } from "react-native"
import ColorPalette from "../../../theme/ColorPalette"

export default function TitleInput({ onChangeText, value }) {
	return (
		<View style={styles.container}>
			<View style={styles.textContainer}>
				<Text style={styles.text}>Tytuł zgłoszenia:</Text>
			</View>
			<TextInput
				style={styles.input}
				placeholder="Tytuł zgłoszenia"
				onChangeText={onChangeText}
				value={value}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 10,
	},
	input: {
		width: "90%",
		color: ColorPalette.blue400dark,
		backgroundColor: ColorPalette.white,
		paddingHorizontal: 16,
		paddingVertical: 12,
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
	textContainer: {
		width: "90%",
		paddingBottom: 5,
		paddingLeft: 12,
	},
	text: {
		color: ColorPalette.blue400dark,
		fontSize: 16,
	},
})
