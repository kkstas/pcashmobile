import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import HomeStackNavigator from "./HomeStackNavigator"
import ProfileStackNavigator from "./ProfileStackNavigator"
import DocsStackNavigator from "./DocsStackNavigator"
import TabBar from "../components/tabBar/TabBar"
import { useState } from "react"

const Tab = createMaterialTopTabNavigator()

export default function MainNav() {
	return (
		<Tab.Navigator
			tabBar={(props) => <TabBar {...props} />}
			tabBarPosition="bottom"
			initialRouteName="HomeStackNavigator"
			screenOptions={{
				swipeEnabled: false,
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
