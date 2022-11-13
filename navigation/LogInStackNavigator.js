import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LogInScreen from "../screens/logIn/LogInScreen"
import ColorPalette from "../theme/ColorPalette"

const Stack = createNativeStackNavigator()

export default function LogInStackNavigator() {
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
				name="LogIn"
				component={LogInScreen}
			/>
		</Stack.Navigator>
	)
}
