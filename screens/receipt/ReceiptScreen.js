import { StyleSheet, View, Alert, Text, Button, Pressable } from "react-native"
import Header from "../../components/header/Header"
import { BarCodeScanner } from "expo-barcode-scanner"
import React, { useState, useEffect } from "react"
import { BlurView } from "expo-blur"
import ReceiptInfoComponent from "./ReceiptInfoComponent"

export default function ReceiptScreen({ navigation }) {
	const [hasPermission, setHasPermission] = useState(null)
	const [scanned, setScanned] = useState(false)

	useEffect(() => {
		const getBarCodeScannerPermissions = async () => {
			const { status } = await BarCodeScanner.requestPermissionsAsync()
			setHasPermission(status === "granted")
		}

		getBarCodeScannerPermissions()
	}, [])

	function goPop() {
		setScanned(false)
		navigation.pop(1)
	}

	const handleBarCodeScanned = ({ type, data }) => {
		console.log(data)
		setScanned(true)

		Alert.alert(
			"Zeskanowano pomyślnie!",
			"Naciśnij, aby przejść do zeskanowanych dokumentów.",
			[
				{
					text: "Dalej",
					onPress: () => goPop(),
				},
			]
		)
	}

	if (hasPermission === null) {
		return <Text>Requesting for camera permission</Text>
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>
	}

	return (
		<View style={styles.mainView}>
			<View style={styles.floatingHeader}>
				<Header
					goBack={true}
					isBackgroundTransparent={true}
				/>
				<ReceiptInfoComponent />
			</View>
			<View style={styles.container}>
				<BarCodeScanner
					onBarCodeScanned={
						scanned ? undefined : handleBarCodeScanned
					}
					style={StyleSheet.absoluteFillObject}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	mainView: {
		flex: 1,
	},
	container: {
		flexDirection: "column",
		justifyContent: "center",
		position: "relative",
		height: "100%",
		alignItems: "center",
		width: "100%",
	},
	floatingHeader: {
		position: "absolute",
		width: "100%",
		height: "100%",
		top: 0,
		justifyContent: "center",
		alignItems: "center",
		zIndex: 5,
	},
	floatingBlur: {
		position: "absolute",
		width: "100%",
		height: "20%",
		top: 0,
		justifyContent: "center",
		alignItems: "center",
		zIndex: 1,
	},
})
