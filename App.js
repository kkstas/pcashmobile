import { StatusBar } from "expo-status-bar"
import { NavigationContainer } from "@react-navigation/native"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import HomeStackNavigator from "./navigation/HomeStackNavigator"
import ProfileStackNavigator from "./navigation/ProfileStackNavigator"
import DocsStackNavigator from "./navigation/DocsStackNavigator"
import TabBar from "./components/tabBar/TabBar"
import { enableFreeze } from "react-native-screens"

enableFreeze(true)
const Tab = createMaterialTopTabNavigator()

export default function App() {
	return (
		<>
			<StatusBar style="dark" />
			<NavigationContainer>
				<Tab.Navigator
					tabBar={(props) => <TabBar {...props} />}
					tabBarPosition="bottom"
					initialRouteName="HomeStackNavigator"
				>
					<Tab.Screen
						name="DocsStackNavigator"
						component={DocsStackNavigator}
						options={{
							tabBarLabel: "Documents",
						}}
					/>
					<Tab.Screen
						name="HomeStackNavigator"
						component={HomeStackNavigator}
						options={{
							tabBarLabel: "Dom",
						}}
					/>
					<Tab.Screen
						name="ProfileStackNavigator"
						component={ProfileStackNavigator}
						options={{
							tabBarLabel: "Profil",
						}}
					/>
				</Tab.Navigator>
			</NavigationContainer>
		</>
	)
}
