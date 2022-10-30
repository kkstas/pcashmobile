import { View, Pressable, Text, StyleSheet, ScrollView } from "react-native";
import ColorPalette from "../../theme/ColorPalette";
import HeaderComponent from "./HeaderComponent";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { BlurView } from "expo-blur";

export default function Header({ title, children, goBack, logOut }) {
	const [headerHeight, setHeaderHeight] = useState();
	return (
		<View style={styles.container}>
			<View
				style={styles.headerWrapper}
				onLayout={(event) => {
					setHeaderHeight(event.nativeEvent.layout.height);
				}}
			>
				<BlurView
					intensity={50}
					style={[
						styles.floatingBlur,
						headerHeight && { height: headerHeight },
					]}
				/>
				<HeaderComponent
					title={title}
					goBack={goBack}
					logOut={logOut}
				/>
			</View>
			<ScrollView style={[styles.scroll]}>
				<View
					style={[
						styles.contentWrapper,
						headerHeight && { paddingTop: headerHeight },
					]}
				>
					{children}
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
	},
	headerWrapper: {
		width: "97%",
		borderBottomLeftRadius: 35,
		borderBottomRightRadius: 35,
		position: "absolute",
		top: 0,
		zIndex: 10,
		maxHeight: 100,
	},
	contentWrapper: {
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	scroll: {
		width: "100%",
		height: "100%",
		flex: 1,
	},
	floatingBlur: {
		position: "absolute",
		width: "100%",
		height: "20%",
		top: 0,
		justifyContent: "center",
		alignItems: "center",
		zIndex: 0,
		borderBottomLeftRadius: 25,
		borderBottomRightRadius: 25,
		overflow: "hidden",
	},
});
