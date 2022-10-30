import { StyleSheet, View, Text, Pressable } from "react-native"
import Header from "../../components/header/Header"
import Experimental from "./experimental"
import MainBox from "./MainBox"

export default function DocsScreen() {
	return (
		<Header
			goBack={false}
			logOut={false}
		>
			<MainBox />
			<Experimental />
			<Text>Doc Screen</Text>
		</Header>
	)
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
	},
})
