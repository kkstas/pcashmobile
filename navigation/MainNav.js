import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import HomeStackNavigator from "./HomeStackNavigator"
import ProfileStackNavigator from "./ProfileStackNavigator"
import DocsStackNavigator from "./DocsStackNavigator"
import TabBar from "../components/tabBar/TabBar"

const Tab = createMaterialTopTabNavigator()

export default function MainNav() {
	const [swipeEnabled, setSwipeEnabled] = useState(true)
	return (
		<Tab.Navigator
			tabBar={(props) => <TabBar {...props} />}
			tabBarPosition="bottom"
			initialRouteName="HomeStackNavigator"
			swipeEnabled={swipeEnabled}
			screenOptions={({ navigation, route }) => {
				if (
					route.name === "DocsStackNavigator" &&
					navigation.isFocused()
				) {
					setSwipeEnabled(true)
				} else if (
					route.name === "HomeStackNavigator" &&
					navigation.isFocused()
				) {
					setSwipeEnabled(true)
				} else if (
					route.name === "ProfileStackNavigator" &&
					navigation.isFocused()
				) {
					setSwipeEnabled(true)
				} else {
					setSwipeEnabled(false)
				}
			}}
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
				// component={ProfileStackNavigator}
				component={ProfileStackNavigator}
				options={{
					tabBarLabel: "Profil",
				}}
			/>
		</Tab.Navigator>
	)
}
