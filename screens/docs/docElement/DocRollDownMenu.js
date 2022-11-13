import Ionicons from "@expo/vector-icons/Ionicons"
import { Pressable, StyleSheet, Text, View } from "react-native"
import Animated from "react-native-reanimated"
import ColorPalette from "../../../theme/ColorPalette"
import { LinearGradient } from "expo-linear-gradient"

export default function DocRollDownMenu({
	SlideStyle,
	exportHandler,
	moreHandler,
	deleteHandler,
}) {
	return (
		<Animated.View style={[styles.container, SlideStyle]}>
			<LinearGradient
				colors={[
					"rgba(233, 164, 255, 0.1)",
					"rgba(143, 196, 255, 0.1)",
				]}
				style={styles.iconContainer}
			>
				<Pressable
					style={({ pressed }) => [
						styles.pressable,
						pressed && styles.pressed,
					]}
					onPress={exportHandler}
				>
					<Ionicons
						name="share-outline"
						size={24}
						color={ColorPalette.blue500}
					/>
					<Text style={[styles.iconText, styles.iconTextOne]}>
						EKSPORTUJ
					</Text>
				</Pressable>
				<Pressable
					style={({ pressed }) => [
						styles.pressable,
						pressed && styles.pressed,
					]}
					onPress={moreHandler}
				>
					<Ionicons
						name="expand-outline"
						size={24}
						color={ColorPalette.blue400}
					/>
					<Text style={[styles.iconText, styles.iconTextTwo]}>
						PODGLAD
					</Text>
				</Pressable>
				<Pressable
					style={({ pressed }) => [
						styles.pressable,
						pressed && styles.pressed,
					]}
					onPress={deleteHandler}
				>
					<Ionicons
						name="close-outline"
						size={24}
						color={ColorPalette.delete}
					/>
					<Text style={[styles.iconText, styles.iconTextThree]}>
						USUŃ
					</Text>
				</Pressable>
			</LinearGradient>
		</Animated.View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: 70,
		// backgroundColor: "rgba(200, 224, 255, 0.56)",
		position: "absolute",
		bottom: 0,
		borderBottomLeftRadius: 15,
		borderBottomRightRadius: 15,
		zIndex: 1,
	},
	iconContainer: {
		width: "100%",
		flex: 1,
		justifyContent: "space-around",
		alignItems: "flex-end",
		flexDirection: "row",
		borderBottomLeftRadius: 15,
		borderBottomRightRadius: 15,
	},
	pressable: {
		justifyContent: "center",
		alignItems: "center",
		paddingBottom: 8,
		width: 90,
	},
	iconText: {
		paddingTop: 3,
		fontSize: 9,
		fontWeight: "400",
	},
	iconTextOne: {
		color: ColorPalette.blue500,
	},
	iconTextTwo: {
		color: ColorPalette.blue400,
	},
	iconTextThree: {
		color: ColorPalette.delete,
	},
	pressed: {
		opacity: 0.4,
	},
})
