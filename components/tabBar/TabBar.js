import { View, Pressable, Text, StyleSheet } from "react-native"
import ColorPalette from "../../theme/ColorPalette"
import { SafeAreaView } from "react-native-safe-area-context"
import { LinearGradient } from "expo-linear-gradient"
import Ionicons from "@expo/vector-icons/Ionicons"
import { BlurView } from "expo-blur"
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withTiming,
	useDerivedValue,
	interpolateColor,
	withSpring,
} from "react-native-reanimated"
import { useEffect, useState } from "react"

////////////////////////////////////////////////
// wyłącza wszystkie warningi w symulacji!!!!!!!
import { YellowBox } from "react-native"
YellowBox.ignoreWarnings([""])
////////////////////////////////////////////////

export default function TabBar({ state, descriptors, navigation, position }) {
	const scaleLeft = useSharedValue(1)
	const scaleCenter = useSharedValue(1)
	const scaleRight = useSharedValue(1)

	const offset = useSharedValue(0)
	const sliderStyle = useAnimatedStyle(() => {
		return {
			transform: [{ translateX: offset.value }],
		}
	})

	const [pos, setPos] = useState()

	useEffect(() => {
		if (state.index === 0) {
			offset.value = withTiming(-pos / 3)
			scaleLeft.value = withTiming(1.5, { duration: 200 })
			scaleCenter.value = withTiming(1, { duration: 200 })
			scaleRight.value = withTiming(1, { duration: 200 })
		} else if (state.index === 1) {
			offset.value = withTiming(0)
			scaleLeft.value = withTiming(1, { duration: 200 })
			scaleCenter.value = withTiming(1.5, { duration: 200 })
			scaleRight.value = withTiming(1, { duration: 200 })
		} else if (state.index === 2) {
			offset.value = withTiming(pos / 3)
			scaleLeft.value = withTiming(1, { duration: 200 })
			scaleCenter.value = withTiming(1, { duration: 200 })
			scaleRight.value = withTiming(1.5, { duration: 200 })
		}
	}, [state.index])

	const styleLeft = useAnimatedStyle(() => {
		return {
			transform: [
				{ scale: scaleLeft.value },
				{ translateY: (scaleLeft.value - 1) * -6 },
			],
		}
	}, [])
	const styleRight = useAnimatedStyle(() => {
		return {
			transform: [
				{ scale: scaleRight.value },
				{ translateY: (scaleRight.value - 1) * -6 },
			],
		}
	}, [])
	const styleCenter = useAnimatedStyle(() => {
		return {
			transform: [
				{ scale: scaleCenter.value },
				{ translateY: (scaleCenter.value - 1) * -6 },
			],
		}
	}, [])

	return (
		<View style={styles.container}>
			<Animated.View style={[styles.slider, sliderStyle]}></Animated.View>
			<Animated.View
				style={[styles.sliderVisible, sliderStyle]}
			></Animated.View>
			<Animated.View
				style={[styles.sliderTwo, sliderStyle]}
			></Animated.View>
			<LinearGradient
				colors={[
					"rgba(133, 194, 230, 0.32)",
					"rgba(60, 30, 130, 0.45)",
				]}
				style={styles.grad}
			/>
			<BlurView
				intensity={85}
				tint="light"
				style={styles.blurContainer}
			>
				<SafeAreaView
					style={styles.safeAreaContainer}
					onLayout={(event) => {
						setPos(event.nativeEvent.layout.width)
					}}
				>
					{/* ikona po lewo */}
					<Pressable
						onPress={() =>
							navigation.navigate("DocsStackNavigator", {
								screen: "Docs",
							})
						}
						style={styles.pressable}
					>
						<Animated.View
							style={[styles.leftButtonContainer, styleLeft]}
						>
							<Ionicons
								name="document-text-outline"
								size={24}
								color={
									state.index === 0
										? ColorPalette.magenta400
										: ColorPalette.blue400
								}
							/>
						</Animated.View>
						<View style={styles.textView}>
							<Text
								style={[
									styles.iconText,
									state.index === 0
										? { color: ColorPalette.magenta400 }
										: { color: ColorPalette.blue400 },
								]}
							>
								Twoje pliki
							</Text>
						</View>
					</Pressable>

					{/* srodek / home */}
					<Pressable
						onPress={() =>
							navigation.navigate("HomeStackNavigator", {
								screen: "Home",
							})
						}
						style={styles.pressable}
					>
						<Animated.View
							style={[styles.titleContainer, styleCenter]}
						>
							<Ionicons
								name="home-outline"
								size={24}
								color={
									state.index === 1
										? ColorPalette.magenta400
										: ColorPalette.blue400
								}
							/>
						</Animated.View>
						<View style={styles.textView}>
							<Text
								style={[
									styles.iconText,
									state.index === 1
										? { color: ColorPalette.magenta400 }
										: { color: ColorPalette.blue400 },
								]}
							>
								Dom
							</Text>
						</View>
					</Pressable>
					{/* ikona po prawo */}
					<Pressable
						onPress={() =>
							navigation.navigate("ProfileStackNavigator", {
								screen: "Profile",
							})
						}
						style={styles.pressable}
					>
						<Animated.View
							style={[styles.rightButtonContainer, styleRight]}
						>
							<Ionicons
								name="person-outline"
								size={24}
								color={
									state.index === 2
										? ColorPalette.magenta400
										: ColorPalette.blue400
								}
							/>
						</Animated.View>
						<View style={styles.textView}>
							<Text
								style={[
									styles.iconText,
									state.index === 2
										? { color: ColorPalette.magenta400 }
										: { color: ColorPalette.blue400 },
								]}
							>
								Profil
							</Text>
						</View>
					</Pressable>
				</SafeAreaView>
			</BlurView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: 85,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "transparent",
		position: "absolute",
		bottom: 0,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: -1.5,
		},
		shadowOpacity: 0.13,
		shadowRadius: 2.5,
		elevation: 4,
	},
	slider: {
		borderTopWidth: 7,
		borderTopColor: ColorPalette.magenta400,
		width: 60,
		position: "absolute",
		top: "0%",
	},
	sliderVisible: {
		borderTopWidth: 3,
		borderTopColor: ColorPalette.white,
		width: 60,
		position: "absolute",
		top: "0%",
		opacity: 0.8,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		zIndex: 2,
	},
	sliderTwo: {
		height: "90%",
		width: 120,
		backgroundColor: "rgba(255, 255, 255, 0.3)",
		position: "absolute",
		bottom: 0,
		borderRadius: "100%",
	},
	safeAreaContainer: {
		width: "100%",
		flexDirection: "row",
	},
	pressable: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingBottom: 25,
	},
	leftButtonContainer: {
		minHeight: 50,
		width: "90%",
		justifyContent: "center",
		alignItems: "center",
	},
	rightButtonContainer: {
		minHeight: 50,
		width: "90%",
		justifyContent: "center",
		alignItems: "center",
	},
	titleContainer: {
		minHeight: 50,
		width: "90%",
		justifyContent: "center",
		alignItems: "center",
	},
	blurContainer: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		height: "100%",
		flex: 1,
	},
	grad: {
		width: "100%",
		flex: 1,
		height: "100%",
		position: "absolute",
		bottom: 0,
	},
	iconText: {
		fontSize: 11,
	},
	textView: {
		position: "absolute",
		bottom: "35%",
	},
})
