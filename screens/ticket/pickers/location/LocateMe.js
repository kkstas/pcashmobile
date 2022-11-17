import { View, StyleSheet, Text, Pressable } from 'react-native'

export default function LocateMe() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>locate me btn</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: 50,
		height: 50,
		borderWidth: 1,
		borderColor: 'black',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {

	}
})
