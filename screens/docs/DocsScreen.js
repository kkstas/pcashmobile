import { StyleSheet, View, Text, Pressable } from "react-native"
import Header from "../../components/header/Header"
import DocElement from "./docElement/DocElement"
import Experimental from "./experimental"
import MainBox from "./MainBox"

export default function DocsScreen() {
	return (
		<Header
			goBack={false}
			logOut={false}
		>
			<MainBox />
			<View style={styles.documentsContainer}>
				<DocElement />
				<DocElement />
				<DocElement />
			</View>
			<Experimental />
		</Header>
	)
}

const styles = StyleSheet.create({
	documentsContainer: {
		flex: 1,
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 18,
		paddingHorizontal: "10%",
	},
})
