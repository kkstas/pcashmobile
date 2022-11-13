import { BlurView } from "expo-blur"
import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native"
import Header from "../../components/header/Header"
import ColorPalette from "../../theme/ColorPalette"
import MainBox from "./MainBox"
import AllTicketsBox from "./moduleBoxes/AllTicketsBox"
import OpinionBox from "./moduleBoxes/OpinionBox"
import ReceiptBox from "./moduleBoxes/ReceiptBox"
import ScannerBox from "./moduleBoxes/ScannerBox"
import ServiceBox from "./moduleBoxes/ServiceBox"
import TicketBox from "./moduleBoxes/TicketBox"
import Separator from "./Separator"
import { useSelector } from "react-redux"

export default function HomeScreen({ navigation }) {
	const isLoggedIn = useSelector((state) => state.userInfo.isLoggedIn)
	if (!isLoggedIn) {
		navigation.replace("Logging")
	}
	return (
		<Header
			goBack={false}
			logOut={true}
		>
			<MainBox />
			<Separator />
			<View style={styles.moduleContainer}>
				<ScannerBox onPress={() => navigation.navigate("Scan")} />
				<TicketBox onPress={() => navigation.navigate("Ticket")} />
			</View>
			<View style={styles.moduleContainer}>
				<ReceiptBox onPress={() => navigation.navigate("Receipt")} />
				<AllTicketsBox />
			</View>
			<View style={styles.moduleContainer}>
				<OpinionBox />
				<ServiceBox />
			</View>
			<View style={styles.bottomCoverView}></View>
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
	bottomCoverView: {
		width: "100%",
		height: 140,
	},
})
