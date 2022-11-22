import { BlurView } from "expo-blur"
import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native"
import Header from "../../components/header/Header"
import ColorPalette from "../../theme/ColorPalette"
import MainBox from "./MainBox"
import TicketBox from "./employeeModule/TicketBox"
import OpinionBox from "./customerModule/OpinionBox"
import ReceiptBox from "./customerModule/ReceiptBox"
import ScannerBox from "./serviceModule/ScannerBox"
import ServiceBox from "./serviceModule/ServiceBox"
import Separator from "./Separator"
import { useSelector } from "react-redux"
import ServiceSeparator from "./serviceModule/ServiceSeparator"
import EmployeeSeparator from "./employeeModule/EmployeeSeparator"
import CustomerSeparator from "./customerModule/CustomerSeparator"
import AllReceiptsBox from "./customerModule/AllReceiptsBox"
import YourProfileBox from "./customerModule/YourProfileBox"
import YourTicketsBox from "./employeeModule/YourTicketsBox"
import YourFormsBox from "./serviceModule/YourFormsBox"
import ServiceProfileBox from "./serviceModule/ServiceProfileBox"

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
			<CustomerSeparator />
			<View style={styles.moduleContainer}>
				<OpinionBox onPress={() => navigation.navigate("Opinion")} />
				<ReceiptBox onPress={() => navigation.navigate("Receipt")} />
			</View>
			<View style={styles.moduleContainer}>
				<AllReceiptsBox
					onPress={() =>
						navigation.navigate("DocsStackNavigator", {
							screen: "Docs",
						})
					}
				/>
				<YourProfileBox
					onPress={() =>
						navigation.navigate("ProfileStackNavigator", {
							screen: "Profile",
						})
					}
				/>
			</View>
			<EmployeeSeparator />
			<View style={styles.moduleContainer}>
				<TicketBox onPress={() => navigation.navigate("Ticket")} />
				<ReceiptBox onPress={() => navigation.navigate("Receipt")} />
			</View>
			<View style={styles.moduleContainer}>
				<YourTicketsBox
					onPress={() =>
						navigation.navigate("DocsStackNavigator", {
							screen: "Docs",
						})
					}
				/>
				<YourProfileBox
					onPress={() =>
						navigation.navigate("ProfileStackNavigator", {
							screen: "Profile",
						})
					}
				/>
			</View>
			<ServiceSeparator />
			<View style={styles.moduleContainer}>
				<ServiceBox />
				<ScannerBox onPress={() => navigation.navigate("Scan")} />
			</View>
			<View style={styles.moduleContainer}>
				<YourFormsBox
					onPress={() =>
						navigation.navigate("DocsStackNavigator", {
							screen: "Docs",
						})
					}
				/>
				<ServiceProfileBox
					onPress={() =>
						navigation.navigate("ProfileStackNavigator", {
							screen: "Profile ",
						})
					}
				/>
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
