import { StyleSheet, View, Text, Pressable } from "react-native";
import Header from "../../components/header/Header";

export default function DocsScreen() {
	return (
		<Header
			goBack={false}
			logOut={false}
		>
			<Text>Doc Screen</Text>
		</Header>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
	},
});
