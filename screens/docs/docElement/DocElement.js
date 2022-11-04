import { View, StyleSheet, Text, Pressable } from "react-native"
import ColorPalette from "../../../theme/ColorPalette"
import Ionicons from "@expo/vector-icons/Ionicons"
import DocRollDownMenu from "./DocRollDownMenu"
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
import { BlurView } from "expo-blur"

export default function DocElement() {
	const offset = useSharedValue(0)
	const SlideStyle = useAnimatedStyle(() => {
		return {
			transform: [{ translateY: offset.value * 45 }],
		}
	})
	const BtnStyle = useAnimatedStyle(() => {
		return {
			transform: [{ rotate: `${offset.value * 180}deg` }],
		}
	})
	const PushContent = useAnimatedStyle(() => {
		return {
			marginBottom: offset.value * 45 + 12,
		}
	})

	function slideBar() {
		offset.value = offset.value === 0 ? withTiming(1) : withTiming(0)
	}
	return (
		<Animated.View style={PushContent}>
			<View style={styles.container}>
				<View style={styles.textContainer}>
					<Text style={styles.title}>Wypłata 150,00 zł</Text>
					<Text style={styles.bodyOne}>15:03, 09.02.2022</Text>
					<Text style={styles.bodyTwo}>
						Wrocław, ul. Krawiecka 34/1a
					</Text>
				</View>
				<Pressable
					style={styles.rollDownIconContainer}
					onPress={slideBar}
				>
					<Animated.View style={BtnStyle}>
						<Ionicons
							name="chevron-down-outline"
							size={34}
							color={ColorPalette.blue500}
						/>
					</Animated.View>
				</Pressable>
			</View>
			<DocRollDownMenu SlideStyle={SlideStyle} />
		</Animated.View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		backgroundColor: ColorPalette.white,
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderRadius: 15,
		minHeight: 60,
		flexDirection: "row",
		justifyContent: "space-between",
		zIndex: 2,
	},
	textContainer: {
		flex: 6,
	},
	rollDownIconContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "flex-end",
	},
})
