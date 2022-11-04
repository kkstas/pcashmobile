import { useRef, useState, useEffect } from "react"
import { View, StyleSheet, Text, Pressable, Button } from "react-native"
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withSpring,
	withRepeat,
} from "react-native-reanimated"
import { useAnimatedGestureHandler } from "react-native-reanimated"
import { PanGestureHandler } from "react-native-gesture-handler"
import ColorPalette from "../../theme/ColorPalette"

export default function Experimental() {
	const translateX = useSharedValue(0)
	const translateY = useSharedValue(0)

	const panGestureEvent = useAnimatedGestureHandler({
		onStart: (event, context) => {
			context.translateX = translateX.value
			context.translateY = translateY.value
		},
		onActive: (event, context) => {
			translateX.value = event.translationX + context.translateX
			translateY.value = event.translationY + context.translateY
		},
		onEnd: (event, context) => {
			const distance = Math.sqrt(
				translateX.value ** 2 + translateY.value ** 2
			)
			if (distance < 175) {
				translateX.value = withSpring(0)
				translateY.value = withSpring(0)
			}
		},
	})

	const rStyle = useAnimatedStyle(() => {
		return {
			transform: [
				{ translateX: translateX.value },
				{ translateY: translateY.value },
			],
		}
	})

	return (
		<View style={{ flex: 1, marginTop: 100 }}>
			<View style={styles.circle}>
				<PanGestureHandler onGestureEvent={panGestureEvent}>
					<Animated.View
						style={[
							{
								width: 100,
								height: 100,
								backgroundColor: ColorPalette.blue400,
								borderRadius: 40,
							},
							rStyle,
						]}
					></Animated.View>
				</PanGestureHandler>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	circle: {
		width: 350,
		height: 350,

		alignItems: "center",
		justifyContent: "center",
		borderRadius: 175,
		borderWidth: 4,
		borderColor: ColorPalette.blue400,
	},
})
