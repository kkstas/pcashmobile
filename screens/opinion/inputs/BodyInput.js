import { View, TextInput, StyleSheet, Text } from "react-native"
import ColorPalette from "../../../theme/ColorPalette"
import LocationSeparator from "../LocationSeparator"

export default function BodyInput({ onChangeText, value }) {
	return (
		<>
			<View style={styles.textContainer}>
				<Text style={styles.text}>1. Opisz zgłoszenie:</Text>
			</View>
			<View style={styles.container}>
				<TextInput
					style={styles.input}
					placeholder="Opis zgłoszenia"
					multiline
					numberOfLines={4}
					onChangeText={(text) => onChangeText(text)}
					value={value}
				/>
			</View>
		</>
	)
}

const styles = StyleSheet.flatten({
	container: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 10,
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
	textContainer: {
		width: "90%",
		paddingBottom: 5,
		paddingLeft: 12,
	},
	text: {
		color: ColorPalette.blue400,
		fontSize: 22,
		paddingTop: 10,
	},
})
