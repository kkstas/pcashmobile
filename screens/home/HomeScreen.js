import { BlurView } from "expo-blur"
import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native"
import Header from "../../components/header/Header"
import ColorPalette from "../../theme/ColorPalette"
import MainBox from "./MainBox"
import AllTicketsBox from "./moduleBoxes/AllTicketsBox"
import ModuleTitle from "./moduleBoxes/ModuleTitle"
import OpinionBox from "./moduleBoxes/OpinionBox"
import ReceiptBox from "./moduleBoxes/ReceiptBox"
import ScannerBox from "./moduleBoxes/ScannerBox"
import ServiceBox from "./moduleBoxes/ServiceBox"
import TicketBox from "./moduleBoxes/TicketBox"

export default function HomeScreen({ navigation }) {
	return (
		<Header
			goBack={false}
			logOut={false}
		>
			<MainBox />

			<View
				style={{
					width: "85%",
					height: 1,
					borderBottomWidth: 1,
					borderBottomColor: ColorPalette.blue400,
					opacity: 0.2,
					marginTop: 15,
					marginBottom: 5,
				}}
			/>
			<View style={styles.moduleContainer}>
				<ScannerBox onPress={() => navigation.navigate("Scan")} />
				<TicketBox />
			</View>
			<View style={styles.moduleContainer}>
				<ReceiptBox />
				<AllTicketsBox />
			</View>
			<View style={styles.moduleContainer}>
				<OpinionBox />
				<ServiceBox />
			</View>
		</Header>
	)
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
	moduleContainer: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		marginVertical: 5,
	},
})
