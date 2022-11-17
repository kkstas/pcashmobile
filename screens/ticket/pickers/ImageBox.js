import {
	Alert,
	Button,
	Image,
	View,
	Text,
	StyleSheet,
	Pressable,
} from "react-native"
import {
	launchCameraAsync,
	useCameraPermissions,
	PermissionStatus,
	useMediaLibraryPermissions,
	launchImageLibraryAsync,
	MediaTypeOptions,
} from "expo-image-picker"
import { useState } from "react"
import ColorPalette from "../../../theme/ColorPalette"
import Ionicons from "@expo/vector-icons/Ionicons"
import * as Haptics from "expo-haptics"
import * as VideoThumbnails from "expo-video-thumbnails"

export default function ImageBox({ onTakeImage }) {
	const [cameraPermissionInformation, requestPermission] =
		useCameraPermissions()
	const [pickedImage, setPickedImage] = useState()
	const [mediaLibraryPermissionInformation, requestMediaPermission] =
		useMediaLibraryPermissions()

	async function verifyPermissions() {
		if (
			cameraPermissionInformation.status === PermissionStatus.UNDETERMINED
		) {
			const permissionResponse = await requestPermission()
			/* zwraca true jeśli permission jest granted */
			return permissionResponse.granted
		}
		if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
			Alert.alert(
				"Nie wyrażono zgody na dostęp do kamery / biblioteki zdjęć",
				"Aby aplikacja poprawnie działa, musisz wyraźić zgody."
			)
			/* jak permission jest denied, to pojawia się alert */
			return false
		}
		/* jak permission nie jest ani UNDETERMINED ani DENIED to oznacza że jest zgoda */
		return true
	}

	async function verifyMediaPermissions() {
		if (
			mediaLibraryPermissionInformation.status ===
			PermissionStatus.UNDETERMINED
		) {
			const mediaPermissionResponse = await requestMediaPermission()
			/* zwraca true jeśli permission jest granted */
			return mediaPermissionResponse.granted
		}
		if (
			mediaLibraryPermissionInformation.status === PermissionStatus.DENIED
		) {
			Alert.alert(
				"Nie wyrażono zgody na dostęp do biblioteki zdjęć",
				"Aby aplikacja poprawnie działa, musisz wyrazić zgody."
			)
			/* jak permission jest denied, to pojawia się alert */
			return false
		}
		/* jak permission nie jest ani UNDETERMINED ani DENIED to oznacza że jest zgoda */
		return true
	}

	function deleteImageHandler() {
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
		setPickedImage()
	}

	async function takeImageHandler() {
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
		const hasPermission = await verifyPermissions()
		if (!hasPermission) {
			return
		}
		const image = await launchCameraAsync({
			allowsEditing: true,
			aspect: [4, 4],
			quality: 0.5,
		})
		setPickedImage(image.uri)
		onTakeImage(image.uri)
	}

	async function pickImageHandler() {
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
		const hasMediaPermission = await verifyMediaPermissions()
		if (!hasMediaPermission) {
			return
		}
		const image = await launchImageLibraryAsync({
			mediaTypes: MediaTypeOptions.All,
			aspect: [4, 4],
			quality: 0.5,
			allowsEditing: true,
		})

		const { uri } = await VideoThumbnails.getThumbnailAsync(
			"http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
			{
				time: 15000,
			}
		)

		console.log(image)
		if (image.type === "video") {
			const thumbnailImage = await VideoThumbnails.getThumbnailAsync(
				image.uri,
				{ time: 1000 }
			)
			setPickedImage(thumbnailImage.uri)
			onTakeImage(thumbnailImage.uri)
		} else {
			setPickedImage(image.uri)
			onTakeImage(image.uri)
		}
	}

	let imagePreview = <Text></Text>

	if (pickedImage) {
		imagePreview = (
			<Image
				style={styles.image}
				source={{ uri: pickedImage }}
			/>
		)
	}

	return (
		<View style={styles.mainView}>
			<View style={styles.imagePreview}>{imagePreview}</View>
			{!pickedImage && (
				<View style={styles.buttonsContainer}>
					<View style={styles.singleBtnContainer}>
						<Pressable
							style={({ pressed }) => [
								styles.pickFromGallery,
								pressed && styles.pressed,
							]}
							onPress={pickImageHandler}
						>
							<Ionicons
								name="images"
								size={36}
								color={ColorPalette.white}
							/>
						</Pressable>
						<Text style={styles.smallerBodyText}>Wybierz</Text>
						<Text style={styles.smallerBodyText}>z galerii</Text>
					</View>
					<View style={styles.singleBtnContainer}>
						<Pressable
							style={({ pressed }) => [
								styles.takePhoto,
								pressed && styles.pressed,
							]}
							onPress={takeImageHandler}
						>
							<Ionicons
								name="camera"
								size={36}
								color={ColorPalette.white}
							/>
						</Pressable>
						<Text style={styles.smallerBodyText}>Zrób</Text>
						<Text style={styles.smallerBodyText}>zdjęcie</Text>
					</View>
				</View>
			)}
			{pickedImage && (
				<Pressable
					style={({ pressed }) => [
						styles.cross,
						pressed && styles.pressed,
					]}
					onPress={deleteImageHandler}
				>
					<Ionicons
						name="close"
						size={36}
						color={ColorPalette.white}
					/>
				</Pressable>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	imagePreview: {
		width: "90%",
		height: 250,
		marginVertical: 10,
		marginHorizontal: 5,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: ColorPalette.white,
		borderRadius: 15,
		position: "relative",
	},
	image: {
		width: "100%",
		height: "100%",
		borderRadius: 15,
	},
	smallerBodyText: {
		fontWeight: "400",
		fontSize: 15,
		lineHeight: 20,
	},
	mainView: {
		flex: 1,
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1.5,
		},
		shadowOpacity: 0.1,
		shadowRadius: 1.5,
		elevation: 3,
	},
	takePhoto: {
		width: 70,
		height: 70,
		borderRadius: 35,
		backgroundColor: ColorPalette.blue200,
		justifyContent: "center",
		alignItems: "center",
		margin: 4,
	},
	pickFromGallery: {
		width: 70,
		height: 70,
		borderRadius: 35,
		margin: 4,
		backgroundColor: ColorPalette.blue500,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonsContainer: {
		position: "absolute",
		flexDirection: "row",
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 15,
	},
	cross: {
		position: "absolute",
		right: 30,
		bottom: 10,
		width: 50,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 30,
		backgroundColor: "red",
		opacity: 0.8,
	},
	pressed: {
		opacity: 0.3,
	},
	singleBtnContainer: {
		justifyContent: "center",
		alignItems: "center",
		margin: 8,
	},
})
