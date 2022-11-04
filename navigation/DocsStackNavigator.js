import { createNativeStackNavigator } from "@react-navigation/native-stack"
import DocsScreen from "../screens/docs/DocsScreen"
import ColorPalette from "../theme/ColorPalette"

const Stack = createNativeStackNavigator()

export default function DocsStackNavigator() {
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
				name="Docs"
				component={DocsScreen}
			/>
		</Stack.Navigator>
	)
}
