import { Pressable, View, StyleSheet, Text } from "react-native"
import ColorPalette from "../../../../theme/ColorPalette"
import Ionicons from "@expo/vector-icons/Ionicons"
import {
	PermissionStatus,
	useMediaLibraryPermissions,
	launchImageLibraryAsync,
	MediaTypeOptions,
} from "expo-image-picker"
import * as VideoThumbnails from "expo-video-thumbnails"
import * as Haptics from "expo-haptics"
import { useDispatch } from "react-redux"
import {
	setMedia,
	setThumbnailUri,
} from "../../../../store/redux/slices/ticketMedia"
import { LinearGradient } from "expo-linear-gradient"

export default function PickMediaButton() {
	const dispatch = useDispatch()
	const [mediaLibraryPermissionInformation, requestMediaPermission] =
		useMediaLibraryPermissions()

	async function verifyMediaPermissions() {
		if (
			mediaLibraryPermissionInformation.status ===
			PermissionStatus.UNDETERMINED
		) {
			const mediaPermissionResponse = await requestMediaPermission()
			return mediaPermissionResponse.granted
		}
		if (
			mediaLibraryPermissionInformation.status === PermissionStatus.DENIED
		) {
			Alert.alert(
				"Nie wyrażono zgody na dostęp do biblioteki zdjęć",
				"Aby aplikacja poprawnie działa, musisz wyrazić zgody."
			)
			return false
		}
		return true
	}

	async function pickMediaHandler() {
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
				colors={[ColorPalette.blue200, ColorPalette.blue500]}
			>
				<Pressable
					style={({ pressed }) => [
						styles.pickFromGallery,
						pressed && styles.pressed,
					]}
					onPress={pickMediaHandler}
				>
					<Ionicons
						name="images"
						size={36}
						color={ColorPalette.white}
					/>
				</Pressable>
			</LinearGradient>
			<Text style={styles.smallerBodyText}>Wybierz</Text>
			<Text style={styles.smallerBodyText}>z galerii</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	pickFromGallery: {
		width: 70,
		height: 70,
		borderRadius: 35,
		margin: 4,
		justifyContent: "center",
		alignItems: "center",
	},
	pressed: {
		backgroundColor: "rgba(0, 0, 0, 0.35)",
	},
	singleBtnContainer: {
		justifyContent: "center",
		alignItems: "center",
		margin: 8,
	},
	smallerBodyText: {
		fontWeight: "400",
		fontSize: 15,
		lineHeight: 20,
	},
	grad: {
		width: 70,
		height: 70,
		borderRadius: 35,
		margin: 4,
		justifyContent: "center",
		alignItems: "center",
	},
})
