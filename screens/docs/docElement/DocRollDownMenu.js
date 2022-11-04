import { View, StyleSheet, Pressable, Text } from "react-native"
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

export default function DocRollDownMenu({ SlideStyle }) {
	return (
		<Animated.View style={[styles.container, SlideStyle]}>
			<Pressable style={styles.pressable}></Pressable>
		</Animated.View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: 60,
		backgroundColor: "rgba(110, 184, 245, 0.2)",
		position: "absolute",
		bottom: 0,
		borderBottomLeftRadius: 15,
		borderBottomRightRadius: 15,
		zIndex: 1,
	},
})
