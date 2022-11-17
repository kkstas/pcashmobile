import { useState } from "react"
import { View, StyleSheet, Pressable, Text } from "react-native"
import Header from "../../components/header/Header"
import BodyInput from "./inputs/BodyInput"
import TitleInput from "./inputs/TitleInput"
import ImageBox from "./pickers/ImageBox"
import LocationBox from "./pickers/LocationBox"
import SubmitBtn from "./SubmitBtn"
import MainInfo from "./MainInfo"

export default function TicketScreen() {
	const [bodyText, setBodyText] = useState("")
	const [titleText, setTitleText] = useState("")
	const [pickedLocation, setPickedLocation] = useState()
	const [selectedImage, setSelectedImage] = useState()

	function takeImageHandler(imageUri) {
		setSelectedImage(imageUri)
	}

	return (
		<Header
			goBack={true}
			isBackgroundTransparent={true}
		>
			<View style={styles.container}>
				<MainInfo />
				<TitleInput
					value={titleText}
					onChangeText={setTitleText}
				/>
				<BodyInput
					value={bodyText}
					onChangeText={setBodyText}
				/>
				<LocationBox />
				<ImageBox onTakeImage={takeImageHandler} />
				<SubmitBtn />
			</View>
		</Header>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 10,
	},
})
