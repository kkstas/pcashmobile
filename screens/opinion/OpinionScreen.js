import { useState } from "react"
import { View, StyleSheet, Pressable, Text } from "react-native"
import Header from "../../components/header/Header"
import BodyInput from "./inputs/BodyInput"
import TitleInput from "./inputs/TitleInput"
import ImageBox from "./pickers/image/ImageBox"
import LocationBox from "./pickers/location/LocationBox"
import SubmitBtn from "./SubmitBtn"
import MainInfo from "./MainInfo"
import PhotoSeparator from "./PhotoSeparator"
import LocationSeparator from "./LocationSeparator"

export default function OpinionScreen() {
	const [bodyText, setBodyText] = useState("")
	const [titleText, setTitleText] = useState("")

	return (
		<Header
			goBack={true}
			isBackgroundTransparent={true}
		>
			<View style={styles.container}>
				<MainInfo />
				<BodyInput
					value={bodyText}
					onChangeText={setBodyText}
				/>
				<LocationSeparator />
				<LocationBox />
				<PhotoSeparator />
				<ImageBox />
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
		paddingTop: 10,
		paddingBottom: 90,
	},
})
