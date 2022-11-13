import { StyleSheet, View, Text, Pressable } from "react-native"
import CheckAllBox from "./CheckAllBox"
import ExportAllBox from "./ExportAllBox"
import ExportCheckedBox from "./ExportCheckedBox"
import { LinearGradient } from "expo-linear-gradient"
import ColorPalette from "../../../theme/ColorPalette"

export default function DocsMenu({ checkAll }) {
	return (
		<View style={styles.mainView}>
			<LinearGradient
				colors={[
					"rgba(253, 224, 255, 0.7)",
					"rgba(143, 196, 255, 0.4)",
				]}
				style={styles.container}
			>
				<CheckAllBox checkAll={checkAll} />
				<ExportAllBox />
				<ExportCheckedBox />
			</LinearGradient>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "86%",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 5,
		paddingVertical: 18,
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
		height: 70,
		flexDirection: "row",
		borderWidth: 0.1,
		borderColor: ColorPalette.blue400dark,
	},
	mainView: {
		shadowColor: "#000",
		marginTop: 15,
		shadowOffset: {
			width: 0,
			height: 1.4,
		},
		shadowOpacity: 0.14,
		shadowRadius: 1.2,
		elevation: 3,
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		borderBottomWidth: 0.2,
		borderBottomColor: "rgba(0, 54, 153, 0.6)",
		// backgroundColor: ColorPalette.backgroundDarker,
	},
})
