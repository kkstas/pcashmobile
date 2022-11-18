import { Image, View, Text, StyleSheet } from "react-native"
import ColorPalette from "../../../../theme/ColorPalette"
import PickMediaButton from "./PickMediaButton"
import TakeImageButton from "./TakeImageButton"
import DeleteMediaButton from "./DeleteMediaButton"
import { useSelector } from "react-redux"
import { LinearGradient } from "expo-linear-gradient"
import MediaInfo from "./MediaInfo"

export default function ImageBox() {
	const thumbnailUri = useSelector((state) => state.ticketMedia.thumbnailUri)
	const media = useSelector((state) => state.ticketMedia.media)

	let mediaPreview = <Text></Text>

	if (thumbnailUri) {
		mediaPreview = (
			<Image
				style={styles.image}
				source={{ uri: thumbnailUri }}
			/>
		)
	}

	return (
		<View style={styles.mainView}>
			<LinearGradient
				colors={[ColorPalette.white, ColorPalette.backgroundDarker]}
				style={styles.imagePreview}
			>
				{mediaPreview}
			</LinearGradient>
			{!thumbnailUri && (
				<View style={styles.buttonsContainer}>
					<PickMediaButton />
					<TakeImageButton />
				</View>
			)}
			{thumbnailUri && (
				<View style={styles.mediaContainer}>
					<DeleteMediaButton />
					<MediaInfo
						type={media.type}
						data={
							media.type === "image"
								? media.fileSize
								: media.duration
						}
					/>
				</View>
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
		borderRadius: 15,
		position: "relative",
	},
	mediaContainer: {
		width: "90%",
		position: "relative",
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		width: "100%",
		height: "100%",
		borderRadius: 15,
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
	buttonsContainer: {
		position: "absolute",
		flexDirection: "row",
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 15,
	},
})
