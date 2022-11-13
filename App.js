import { StatusBar } from "expo-status-bar"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { enableFreeze } from "react-native-screens"
import { Provider } from "react-redux"
import { store } from "./store/redux/store"
import LogInStackNavigator from "./navigation/LogInStackNavigator"
import MainNav from "./navigation/MainNav"

enableFreeze(true)
const Stack = createNativeStackNavigator()

export default function App() {
	return (
		<>
			<StatusBar style="dark" />
			<Provider store={store}>
				<NavigationContainer>
					<Stack.Navigator
						initialRouteName="Logging"
						screenOptions={{
							headerShown: false,
						}}
					>
						<Stack.Screen
							name="Main"
							component={MainNav}
						/>
						<Stack.Screen
							name="Logging"
							component={LogInStackNavigator}
							options={{
								tabBarShown: false,
							}}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</Provider>
		</>
	)
}
