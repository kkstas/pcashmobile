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
import { useEffect, useState } from "react"

export default function MainBox() {
	const offset = useSharedValue(0)
	const AnimStyle = useAnimatedStyle(() => {
		return {
			opacity: 1 - offset.value,
			transform: [{ scale: offset.value * 3 }],
		}
	})

	function offsetStuff() {
		offset.value = withDelay(
			2820,
			withRepeat(withTiming(1, { duration: 3000 }), -1)
		)
	}
	offsetStuff()
	const offsetSmallest = useSharedValue(0)
	const offsetMid = useSharedValue(0)
	const offsetLargest = useSharedValue(0)

	const StyleSmallest = useAnimatedStyle(() => {
		return {
			transform: [{ translateY: offsetSmallest.value }],
		}
	})
	const StyleMid = useAnimatedStyle(() => {
		return {
			transform: [{ translateY: offsetMid.value }],
		}
	})
	const StyleLargest = useAnimatedStyle(() => {
		return {
			transform: [{ translateY: offsetLargest.value }],
		}
	})

	function flow() {
		offsetSmallest.value = withDelay(
			1000,
			withRepeat(withTiming(5, { duration: 3000 }), -1, true)
		)
		offsetMid.value = withDelay(
			500,
			withRepeat(withTiming(8, { duration: 3000 }), -1, true)
		)
		offsetLargest.value = withRepeat(
			withTiming(12, { duration: 3000 }),
			-1,
			true
		)
	}

	flow()

	return (
		<View style={styles.container}>
			<LinearGradient
				colors={[
					"rgb(33, 5, 89)",
					"rgba(56, 35, 138, 1)",
					ColorPalette.blue400,
				]}
				style={styles.mainBox}
			>
				<Animated.View
					style={[styles.animatedBox, AnimStyle]}
				></Animated.View>
				<Animated.View
					style={[
						{
							position: "absolute",
							bottom: 50,
							right: 74,
							opacity: 0.35,
						},
						StyleSmallest,
					]}
				>
					<Ionicons
						name="document-outline"
						size={42}
						color={ColorPalette.magenta400}
					/>
				</Animated.View>
				<Animated.View
					style={[
						{
							position: "absolute",
							bottom: 42,
							right: 52,
							opacity: 0.6,
						},
						StyleMid,
					]}
				>
					<Ionicons
						name="document-outline"
						size={60}
						color={ColorPalette.blue300}
					/>
				</Animated.View>
				<Animated.View
					style={[
						{ position: "absolute", bottom: 30, right: 20 },
						StyleLargest,
					]}
				>
					<Ionicons
						name="document-outline"
						size={84}
						color={ColorPalette.blue200}
					/>
				</Animated.View>
				{/* <View style={styles.imgView}>
					<Image
						source={require("../../assets/logo.png")}
						style={{ width: 230, height: 106 }}
					/>
				</View> */}
				<View style={styles.textContainer}>
					<Text style={styles.text}>Twoje zapisane</Text>
					<View style={{ flexDirection: "row" }}>
						<Text style={styles.textName}>Dokumenty</Text>
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
		paddingLeft: 20,
		paddingVertical: 20,
		alignItems: "flex-start",
		justifyContent: "center",
	},
	textContainer: {
		justifyContent: "flex-end",
		height: "100%",
		alignItems: "flex-start",
	},
	text: {
		color: "rgb(215, 205, 255)",
		fontWeight: "600",
		fontSize: 17,
		letterSpacing: 1.5,
	},
	textName: {
		color: "#ffffff",
		fontSize: 35,
		letterSpacing: 1.5,
		fontWeight: "400",
	},
	imgView: {
		height: "100%",
		justifyContent: "center",
		position: "absolute",
		width: "100%",
		right: -200,
		bottom: 20,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4.5,
		},
		shadowOpacity: 1,
		shadowRadius: 10.5,
		elevation: 4,
	},
	animatedBox: {
		position: "absolute",
		width: 165,
		height: 165,
		backgroundColor: ColorPalette.blue500,
		right: -165,
		borderRadius: "100%",
	},
})
