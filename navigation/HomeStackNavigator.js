import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/home/HomeScreen"
import ScanScreen from "../screens/scan/ScanScreen"
import ColorPalette from "../theme/ColorPalette"

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
		</Stack.Navigator>
	)
}
