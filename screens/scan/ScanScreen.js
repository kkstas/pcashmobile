import { StyleSheet, View, Alert, Text, Button, Pressable } from "react-native";
import Header from "../../components/header/Header";
import { BarCodeScanner } from "expo-barcode-scanner";
import React, { useState, useEffect } from "react";
import { BlurView } from "expo-blur";

export default function ScanScreen({ navigation }) {
	const [hasPermission, setHasPermission] = useState(null);
	const [scanned, setScanned] = useState(false);

	useEffect(() => {
		const getBarCodeScannerPermissions = async () => {
			const { status } = await BarCodeScanner.requestPermissionsAsync();
			setHasPermission(status === "granted");
		};

		getBarCodeScannerPermissions();
	}, []);

	function goPop() {
		setScanned(false);
		navigation.pop(1);
	}

	const handleBarCodeScanned = ({ type, data }) => {
		setScanned(true);

		Alert.alert(
			"Zeskanowano pomyślnie!",
			"Naciśnij, aby przejść do zeskanowanych dokumentów.",
			[
				{
					text: "Dalej",
					onPress: () => goPop(),
				},
			]
		);
	};

	if (hasPermission === null) {
		return <Text>Requesting for camera permission</Text>;
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}

	return (
		<View style={styles.container}>
			<View style={styles.floatingHeader}>
				<Header goBack={true} />
			</View>
			<BarCodeScanner
				onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
				style={StyleSheet.absoluteFillObject}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
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
});
