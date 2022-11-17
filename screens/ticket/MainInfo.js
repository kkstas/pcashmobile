import { View, Pressable, StyleSheet, Text } from 'react-native'

export default function MainInfo() {
	return (
		<Pressable style={styles.container}>
			<Text style={styles.text}>Wypełnij zgloszenie asdfsdfsdf</Text>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		justifyContent: 'center'

	},
	text: {

	}
})
