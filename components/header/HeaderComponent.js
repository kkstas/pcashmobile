import { View, Pressable, Text, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { LinearGradient } from "expo-linear-gradient"
import GoBackButton from "./GoBackButton"
import LogOutButton from "./LogOutButton"
import TitleComponent from "./TitleComponent"

export default function HeaderComponent({ title, goBack, logOut }) {
	return (
		<View style={styles.container}>
			<LinearGradient
				colors={[
					"rgba(60, 30, 130, 0.12)",
					"rgba(133, 194, 230, 0.15)",
				]}
				style={styles.grad}
			>
				<SafeAreaView style={styles.safeAreaContainer}>
					<View style={styles.leftButtonContainer}>
						{goBack && <GoBackButton />}
					</View>
					<View style={styles.titleContainer}>
						<TitleComponent title={title} />
					</View>
					<View style={styles.rightButtonContainer}>
						{logOut && <LogOutButton />}
					</View>
				</SafeAreaView>
			</LinearGradient>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		minHeight: 80,
		position: "relative",
		backgroundColor: "#fff",
		borderBottomLeftRadius: 25,
		borderBottomRightRadius: 25,
	},
	grad: {
		overflow: "hidden",
		borderBottomLeftRadius: 25,
		borderBottomRightRadius: 25,
		justifyContent: "center",
		alignItems: "center",
	},
	safeAreaContainer: {
		width: "100%",
		flexDirection: "row",
		maxHeight: 100,
		alignItems: "flex-start",
		justifyContent: "center",

		paddingTop: 7,
		paddingHorizontal: 5,
	},
	leftButtonContainer: {
		minHeight: 45,
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	rightButtonContainer: {
		minHeight: 45,
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	titleContainer: {
		minHeight: 45,
		flex: 2,
		justifyContent: "center",
		alignItems: "center",
	},
})
