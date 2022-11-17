import { View, StyleSheet, Text, Pressable } from "react-native"
import ColorPalette from "../../../theme/ColorPalette"
// import LocateMe from "./location/LocateMe"
// import PickFromMap from "./location/PickFromMap"

export default function LocationBox() {
	return (
		<View style={styles.container}>
			{/* <LocateMe /> */}
			{/* <PickFromMap /> */}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "90%",
		height: 100,
		backgroundColor: "#fff",
		borderRadius: 15,
		justifyContent: "space-around",
		alignItems: "center",
		flexDirection: "row",
		marginVertical: 10,
		marginHorizontal: 5,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1.5,
		},
		shadowOpacity: 0.1,
		shadowRadius: 1.5,
		elevation: 3,
	},
})
