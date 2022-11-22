import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/home/HomeScreen"
import ScanScreen from "../screens/scan/ScanScreen"
import ColorPalette from "../theme/ColorPalette"
import ReceiptScreen from "../screens/receipt/ReceiptScreen"
import TicketScreen from "../screens/ticket/TicketScreen"
import OpinionScreen from "../screens/opinion/OpinionScreen"

const Stack = createNativeStackNavigator()

export default function HomeStackNavigator() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				contentStyle: {
					backgroundColor: ColorPalette.backgroundLight,
				},
			}}
		>
			<Stack.Screen
				name="Home"
				component={HomeScreen}
			/>
			<Stack.Screen
				name="Scan"
				component={ScanScreen}
			/>
			<Stack.Screen
				name="Receipt"
				component={ReceiptScreen}
			/>
			<Stack.Screen
				name="Ticket"
				component={TicketScreen}
			/>
			<Stack.Screen
				name="Opinion"
				component={OpinionScreen}
			/>
		</Stack.Navigator>
	)
}
