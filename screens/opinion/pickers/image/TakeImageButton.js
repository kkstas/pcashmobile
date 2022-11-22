import { Pressable, View, StyleSheet, Text } from "react-native"
import ColorPalette from "../../../../theme/ColorPalette"
import Ionicons from "@expo/vector-icons/Ionicons"
import {
	PermissionStatus,
	MediaTypeOptions,
	launchCameraAsync,
	useCameraPermissions,
} from "expo-image-picker"
import * as VideoThumbnails from "expo-video-thumbnails"
import * as Haptics from "expo-haptics"
import { useDispatch } from "react-redux"
import {
	setMedia,
	setThumbnailUri,
} from "../../../../store/redux/slices/ticketMedia"
import { LinearGradient } from "expo-linear-gradient"

export default function TakeImageButton() {
	const dispatch = useDispatch()
	const [cameraPermissionInformation, requestPermission] =
		useCameraPermissions()

	async function verifyPermissions() {
		if (
			cameraPermissionInformation.status === PermissionStatus.UNDETERMINED
		) {
			const permissionResponse = await requestPermission()
			return permissionResponse.granted
		}
		if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
			Alert.alert(
				"Nie wyrażono zgody na dostęp do kamery / biblioteki zdjęć",
				"Aby aplikacja poprawnie działa, musisz wyraźić zgody."
			)
			return false
		}
		return true
	}

	async function takeImageHandler() {
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
		const hasPermission = await verifyPermissions()
		if (!hasPermission) {
			return
		}
		const image = await launchCameraAsync({
			mediaTypes: MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 4],
			quality: 0.5,
		})
		if (image.type === "video") {
			const thumbnailImage = await VideoThumbnails.getThumbnailAsync(
				image.uri,
				{ time: 1000 }
			)
			dispatch(setMedia(image))
			dispatch(setThumbnailUri(thumbnailImage.uri))
		} else {
			dispatch(setMedia(image))
			dispatch(setThumbnailUri(image.uri))
		}
	}

	return (
		<View style={styles.singleBtnContainer}>
			<LinearGradient
				style={styles.grad}
				colors={[ColorPalette.blue200, ColorPalette.blue400dark]}
			>
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
			</LinearGradient>
			<Text style={styles.smallerBodyText}>Zrób</Text>
			<Text style={styles.smallerBodyText}>zdjęcie</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	pressed: {
		backgroundColor: "rgba(0, 0, 0, 0.35)",
	},
	singleBtnContainer: {
		justifyContent: "center",
		alignItems: "center",
		margin: 8,
	},
	smallerBodyText: {
		fontWeight: "500",
		color: ColorPalette.blue400dark,
		fontSize: 15,
		lineHeight: 18,
	},
	takePhoto: {
		width: 70,
		height: 70,
		borderRadius: 35,
		justifyContent: "center",
		alignItems: "center",
		margin: 4,
	},
	grad: {
		width: 70,
		height: 70,
		borderRadius: 35,
		backgroundColor: ColorPalette.blue200,
		justifyContent: "center",
		alignItems: "center",
		margin: 4,
		marginBottom: 8,
	},
})
