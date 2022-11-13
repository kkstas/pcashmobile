import { useState } from "react"
import { StyleSheet, View, Text, Pressable } from "react-native"
import Header from "../../components/header/Header"
import DocElement from "./docElement/DocElement"
import DocsMenu from "./docsMenu/DocsMenu"
import Separator from "./docsMenu/Separator"
import Experimental from "./experimental"
import MainBox from "./MainBox"
import defaultData from "../../utils/defaultData"
import ColorPalette from "../../theme/ColorPalette"
import * as Haptics from "expo-haptics"

export default function DocsScreen() {
	const initialChecks = defaultData.map((el) => {
		return {
			...el,
			checked: false,
		}
	})
	const [checkedList, setCheckedList] = useState(initialChecks)

	function toggleCheck(id) {
		setCheckedList((prevState) => {
			const newState = prevState.map((el) => {
				if (el.id !== id) {
					return el
				} else {
					return {
						...el,
						checked: el.checked ? false : true,
					}
				}
			})
			return newState
		})
	}

	function deleteCheck(id) {
		setCheckedList((prevState) => {
			const newState = prevState.filter((el) => el.id !== id)
			return newState
		})
	}

	function checkAll(bool) {
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
		setCheckedList((prevState) => {
			const newState = prevState.map((el) => {
				return {
					...el,
					checked: bool,
				}
			})
			return newState
		})
	}

	const docElements = checkedList.map((data) => (
		<DocElement
			data={data}
			key={data.id}
			toggleCheck={toggleCheck}
			deleteCheck={deleteCheck}
		/>
	))

	return (
		<Header
			goBack={false}
			logOut={true}
		>
			<MainBox />
			<Separator />
			<DocsMenu checkAll={checkAll} />
			<View style={styles.documentsContainer}>{docElements}</View>
			<Experimental />
		</Header>
	)
}

const styles = StyleSheet.create({
	documentsContainer: {
		flex: 1,
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 18,
		paddingHorizontal: "7%",
		backgroundColor: ColorPalette.backgroundDarker,
	},
})
