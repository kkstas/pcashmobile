import { StyleSheet, View, Text, Pressable } from "react-native";
import Header from "../../components/header/Header";

export default function ProfileScreen() {
	return (
		<Header
			goBack={false}
			logOut={true}
		>
			<Text>Profile Screen</Text>
		</Header>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
	},
});
