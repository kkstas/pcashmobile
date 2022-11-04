import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ProfileScreen from "../screens/profile/ProfileScreen"
import ColorPalette from "../theme/ColorPalette"

const Stack = createNativeStackNavigator()

export default function ProfileStackNavigator() {
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
				name="Profile"
				component={ProfileScreen}
			/>
		</Stack.Navigator>
	)
}
