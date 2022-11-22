import { View, Text, StyleSheet } from "react-native"
import ColorPalette from "../../../../theme/ColorPalette"
import { LinearGradient } from "expo-linear-gradient"
import LocateMe from "./LocateMe"
import PickFromMap from "./PickFromMap"

export default function LocationBox() {
	let locationPreview = <Text></Text>

	return (
		<>
			<View style={styles.textContainer}>
				<Text style={styles.text}>2. Wskaż bankomat:</Text>
			</View>
			<View style={styles.mainView}>
				<LinearGradient
					colors={[ColorPalette.white, ColorPalette.backgroundDarker]}
					style={styles.locationPreview}
				>
					{locationPreview}
				</LinearGradient>
				<View style={styles.buttonsContainer}>
					<LocateMe />
					<PickFromMap />
				</View>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	locationPreview: {
		width: "90%",
		height: 250,
		marginVertical: 10,
		marginHorizontal: 5,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 15,
		position: "relative",
	},
	mediaContainer: {
		width: "90%",
		position: "relative",
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		width: "100%",
		height: "100%",
		borderRadius: 15,
	},
	mainView: {
		flex: 1,
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1.5,
		},
		shadowOpacity: 0.1,
		shadowRadius: 1.5,
		elevation: 3,
	},
	buttonsContainer: {
		position: "absolute",
		flexDirection: "row",
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 15,
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
