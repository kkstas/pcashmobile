import { View, Text, StyleSheet } from "react-native"
import ColorPalette from "../../../../theme/ColorPalette"
import Ionicons from "@expo/vector-icons/Ionicons"
import { BlurView } from "expo-blur"

export default function MediaInfo({ type, data }) {
	let dataText = ""
	if (type === "image") {
		const bytes = Number(data)
		if (bytes < 100000) {
			const kbs = bytes / 1000
			dataText = `${kbs.toFixed(2)}KB`
		} else {
			const mbs = bytes / 1000000
			dataText = `${mbs.toFixed(2)}MB`
		}
	} else {
		const miliseconds = Number(data)
		const seconds = Math.round(data / 1000)
		const minutes = Math.floor(seconds / 60)
		const secondsLeft = seconds % 60
		const secondsLeftText =
			secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft
		dataText = `${minutes}:${secondsLeftText}`
	}

	return (
		<View style={styles.mainView}>
			<BlurView
				intensity={40}
				style={styles.container}
				tint="dark"
			>
				<Ionicons
					name={type === "image" ? "image" : "videocam-outline"}
					size={16}
					color={ColorPalette.white}
				/>
				<Text style={styles.text}>{dataText}</Text>
			</BlurView>
		</View>
	)
}

const styles = StyleSheet.create({
	mainView: {
		position: "absolute",
		width: 90,
		height: 27,
		backgroundColor: "rgba(100, 154, 253, 0.1)",
		bottom: 10,
		left: 20,
		justifyContent: "center",
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
		overflow: "hidden",
	},
	container: {
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		paddingTop: 1,
	},
	text: {
		color: ColorPalette.white,
		paddingBottom: 1,
		fontSize: 12,
		paddingLeft: 7,
	},
})
