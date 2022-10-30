import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/profile/ProfileScreen";
import DocsScreen from "../screens/docs/DocsScreen";

const Stack = createNativeStackNavigator();

export default function DocsStackNavigator() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen
				name="Docs"
				component={DocsScreen}
			/>
		</Stack.Navigator>
	);
}
