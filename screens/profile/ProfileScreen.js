// import { LinearGradient } from "expo-linear-gradient"
import { StyleSheet, View, Text, Pressable } from "react-native"
import Header from "../../components/header/Header"
import MainBox from "./MainBox"
import Separator from "./Separator"

export default function ProfileScreen() {
	return (
		// <LinearGradient
		// 	style={{ width: "100%", height: "100%" }}
		// 	colors={["#3E6D9C", "#001253"]}
		// >
		<Header
			goBack={false}
			logOut={true}
		>
			<MainBox />
			<Separator />
		</Header>
		// </LinearGradient>
	)
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
	},
})
