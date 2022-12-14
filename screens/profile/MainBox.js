import { View, StyleSheet, Text, Image, Pressable } from "react-native"
import ColorPalette from "../../theme/ColorPalette"
import { LinearGradient } from "expo-linear-gradient"
import Ionicons from "@expo/vector-icons/Ionicons"
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withTiming,
	useDerivedValue,
	interpolateColor,
	withSpring,
	withRepeat,
	withDelay,
} from "react-native-reanimated"

export default function MainBox() {
	const offset = useSharedValue(0)
	const AnimStyle = useAnimatedStyle(() => {
		return {
			opacity: 1 - offset.value,
			transform: [{ scale: offset.value * 3 }],
		}
	})

	function offsetStuff() {
		offset.value = withRepeat(withTiming(1, { duration: 3000 }), -1)
	}
	offsetStuff()

	return (
		<View style={styles.container}>
			<LinearGradient
				colors={["#EEF1FF", "#D2DAFF"]}
				style={styles.mainBox}
			>
				<Animated.View
					style={[styles.animatedBox, AnimStyle]}
				></Animated.View>
				<View style={styles.textContainer}>
					<Text style={styles.text}>witaj,</Text>
					<View style={{ flexDirection: "row" }}>
						<Text style={styles.textName}>Kamil</Text>
						<Text
							style={[
								styles.textName,
								{ color: ColorPalette.magenta400 },
							]}
						>
							!
						</Text>
					</View>
				</View>
			</LinearGradient>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		height: 150,
		marginTop: 20,
		shadowColor: "#000",
		shadowOffset: {
			width: 2,
			height: 0.5,
		},
		shadowOpacity: 0.43,
		shadowRadius: 2.5,
		elevation: 4,

		alignItems: "flex-end",
	},
	mainBox: {
		width: "90%",
		height: "100%",
		backgroundColor: "yellow",
		borderTopLeftRadius: 20,
		borderBottomLeftRadius: 20,
		paddingRight: 20,
		paddingVertical: 20,
		alignItems: "flex-end",
		justifyContent: "center",
	},
	textContainer: {
		justifyContent: "flex-end",
		height: "100%",
		alignItems: "flex-end",
	},
	text: {
		color: "rgb(155, 125, 255)",
		fontWeight: "600",
		fontSize: 20,
		letterSpacing: 1.5,
	},
	textName: {
		color: ColorPalette.blue500,
		fontSize: 50,
		letterSpacing: 1.5,
		fontWeight: "400",
	},
	imgView: {
		height: "100%",
		justifyContent: "center",
		position: "absolute",
		width: "100%",
		left: 30,
		bottom: 20,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4.5,
		},
		shadowOpacity: 1,
		shadowRadius: 10.5,
		elevation: 4,
		zIndex: 1,
	},
	animatedBox: {
		position: "absolute",
		width: 165,
		height: 165,
		backgroundColor: "rgba(100, 100, 255, 0.1)",
		right: 0,
		borderRadius: "100%",
	},
})
