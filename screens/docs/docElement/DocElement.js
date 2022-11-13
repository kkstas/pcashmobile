import { View, StyleSheet, Text, Pressable } from "react-native"
import ColorPalette from "../../../theme/ColorPalette"
import Ionicons from "@expo/vector-icons/Ionicons"
import DocRollDownMenu from "./DocRollDownMenu"
import * as Haptics from "expo-haptics"
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

export default function DocElement({ toggleCheck, data, deleteCheck }) {
	const {
		id,
		type,
		amount,
		transactionNumber,
		cardNumber,
		bankAccount,
		date,
		time,
		location,
		checked,
	} = data

	const typeText = type === "CashIn" ? "Wpłata" : "Wypłata"
	const offset = useSharedValue(0)
	const SlideStyle = useAnimatedStyle(() => {
		return {
			transform: [{ translateY: offset.value * 55 }],
		}
	})
	const BtnStyle = useAnimatedStyle(() => {
		return {
			transform: [{ rotate: `${offset.value * 180}deg` }],
		}
	})
	const PushContent = useAnimatedStyle(() => {
		return {
			marginBottom: offset.value * 55 + 12,
		}
	})

	function slideBar() {
		offset.value =
			offset.value === 0
				? withTiming(1, { duration: 200 })
				: withTiming(0)
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
	}

	function deleteHandler() {
		console.log("Delete clicked")
		deleteCheck(id)
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
	}

	function exportHandler() {
		console.log("Export clicked")
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
	}

	function moreHandler() {
		console.log("More clicked")
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
	}

	function checkHandler() {
		toggleCheck(id)
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
	}

	return (
		<Animated.View style={[styles.mainView, PushContent]}>
			<Pressable
				style={styles.container}
				onPress={slideBar}
			>
				<Pressable
					style={({ pressed }) => [
						styles.checkBox,
						pressed && styles.pressed,
					]}
					onPress={checkHandler}
				>
					<Ionicons
						name="square-outline"
						size={18}
						style={styles.checkIcon}
					/>
					{checked && (
						<Ionicons
							name="checkmark"
							size={28}
							style={styles.checkIconTwo}
						/>
					)}
				</Pressable>
				<View style={styles.textContainer}>
					<Text style={styles.title}>
						{typeText} {amount}
					</Text>
					<Text style={styles.bodyOne}>
						{time}, {date}
					</Text>
					<Text style={styles.bodyTwo}>
						{location.city}, {location.street}
					</Text>
				</View>
				<Pressable
					style={({ pressed }) => [
						styles.rollDownIconContainer,
						pressed && styles.pressed,
					]}
					onPress={slideBar}
				>
					<Animated.View style={BtnStyle}>
						<Ionicons
							name="chevron-down-outline"
							size={24}
							color={ColorPalette.blue400}
						/>
					</Animated.View>
				</Pressable>
			</Pressable>
			<DocRollDownMenu
				SlideStyle={SlideStyle}
				moreHandler={moreHandler}
				exportHandler={exportHandler}
				deleteHandler={deleteHandler}
			/>
		</Animated.View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		backgroundColor: ColorPalette.white,
		paddingRight: 20,
		paddingVertical: 19,
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
	mainView: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.18,
		shadowRadius: 1,
		elevation: 3,
	},
	title: {
		color: ColorPalette.blue400,
		fontSize: 15,
		fontWeight: "500",
		letterSpacing: 0.45,
		paddingBottom: 2,
	},
	bodyOne: {
		fontSize: 13,
		fontWeight: "300",
		color: ColorPalette.blue400dark,
	},
	bodyTwo: {
		fontSize: 13,
		fontWeight: "300",
		color: ColorPalette.blue400dark,
	},
	pressed: {
		opacity: 0.3,
	},
	checkBox: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		position: "relative",
		paddingLeft: 10,
		zIndex: 3,
	},
	checkIcon: {
		position: "absolute",
		color: ColorPalette.blue400,
	},
	checkIconTwo: {
		position: "absolute",
		color: ColorPalette.magenta400,
		paddingBottom: 5,
	},
})
