import { BlurView } from "expo-blur";
import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import Header from "../../components/header/Header";
import ColorPalette from "../../theme/ColorPalette";

export default function HomeScreen({ navigation }) {
	return (
		<Header
			goBack={false}
			logOut={false}
		>
			<View style={styles.container}>
				<View style={styles.boxContainer}>
					<Pressable
						style={styles.box}
						onPress={() => navigation.navigate("Scan")}
					>
						<Text>skanuj</Text>
						<Text>dokument</Text>
					</Pressable>
					<View style={styles.box}></View>
				</View>
				<View style={styles.boxContainer}>
					<View style={styles.box}></View>
					<View style={styles.box}></View>
				</View>
				<View style={styles.boxContainer}>
					<View style={styles.box}></View>
					<View style={styles.box}></View>
				</View>
				<View style={styles.boxContainer}>
					<View style={styles.box}></View>
					<View style={styles.box}></View>
				</View>
				<View style={styles.boxContainer}>
					<View style={styles.box}></View>
					<View style={styles.box}></View>
				</View>
				<View style={styles.boxContainer}>
					<View style={styles.box}></View>
					<View style={styles.box}></View>
				</View>
				<View style={styles.boxContainer}>
					<View style={styles.box}></View>
					<View style={styles.box}></View>
				</View>
				<View style={styles.boxContainer}>
					<View style={styles.box}></View>
					<View style={styles.box}></View>
				</View>
				<View style={styles.boxContainer}>
					<View style={styles.box}></View>
					<View style={styles.box}></View>
				</View>
				<View style={styles.boxContainer}>
					<View style={styles.box}></View>
					<View style={styles.box}></View>
				</View>
				<View style={styles.boxContainer}>
					<View style={styles.box}></View>
					<View style={styles.box}></View>
				</View>
				<View style={styles.boxContainer}>
					<View style={styles.box}></View>
					<View style={styles.box}></View>
				</View>
			</View>
		</Header>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 10,
	},
	boxContainer: {
		flexDirection: "row",
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: "5%",
	},
	box: {
		borderWidth: 1,
		borderRadius: 15,
		borderColor: ColorPalette.blue500,
		flex: 1,
		margin: 5,
		height: 100,
		justifyContent: "center",
		alignItems: "center",
	},
});
