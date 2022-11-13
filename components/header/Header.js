import { View, Pressable, Text, StyleSheet, ScrollView } from "react-native"
import HeaderComponent from "./HeaderComponent"
import { useState } from "react"
import ColorPalette from "../../theme/ColorPalette"

export default function Header({
	title,
	children,
	goBack,
	logOut,
	isBackgroundTransparent,
}) {
	const [headerHeight, setHeaderHeight] = useState()

	return (
		<View
			style={[
				styles.container,
				!isBackgroundTransparent && {
					backgroundColor: ColorPalette.backgroundLight,
				},
			]}
		>
			<View
				style={styles.headerWrapper}
				onLayout={(event) => {
					setHeaderHeight(event.nativeEvent.layout.height)
				}}
			>
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
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
		zIndex: 4,
	},
	headerWrapper: {
		width: "97%",
		borderBottomLeftRadius: 35,
		borderBottomRightRadius: 35,
		position: "absolute",
		top: 0,
		zIndex: 10,
		maxHeight: 100,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.8,
		elevation: 4,
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
})
