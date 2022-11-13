// import { LinearGradient } from "expo-linear-gradient"
import { StyleSheet, View, Text, Pressable } from "react-native"
import Header from "../../components/header/Header"
import LogInBox from "./LogInBox"
import Separator from "./Separator"

// import Separator from "./Separator"

export default function LogInScreen({ navigation }) {
	return (
		// <LinearGradient
		// 	style={{ width: "100%", height: "100%" }}
		// 	colors={["#3E6D9C", "#001253"]}
		// >
		<Header
			goBack={false}
			logOut={false}
		>
			<View style={styles.container}>
				<Separator />
				<LogInBox navigation={navigation} />
			</View>
		</Header>
		// </LinearGradient>
	)
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
		width: "100%",
		marginTop: 90,
	},
})
