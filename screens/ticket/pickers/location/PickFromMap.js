import { View, StyleSheet, Text, Pressable } from 'react-native'

export default function PickFromMap() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>pick from map btn</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: 70,
		height: 70,
		borderWidth: 1,
		borderColor: 'black',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		padding: 2,

	}
})
