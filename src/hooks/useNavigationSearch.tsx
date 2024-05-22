import { colors } from '@/constants/token'
import { useNavigation } from 'expo-router'
import { useEffect, useLayoutEffect, useState } from 'react'
import { SearchBarProps } from 'react-native-screens'

const defaultSearchOptions: SearchBarProps = {
	tintColor: colors.primary,
	hideWhenScrolling: false,
	textColor: '#ffffff',
	headerIconColor: '#ffffff'
}

export const useNavigationSearch = ({
	searchBarOptions,
}: {
	searchBarOptions?: SearchBarProps
}) => {
	const [search, setSearch] = useState('')

	const navigation = useNavigation()

	const handleOnChangeText: SearchBarProps['onChangeText'] = ({ nativeEvent: { text } }) => {
		setSearch(text)
	}

	useEffect(() => {
		navigation.setOptions({
			headerSearchBarOptions: {
				...defaultSearchOptions,
				...searchBarOptions,
				onChangeText: handleOnChangeText
			},
		})
	}, [navigation, searchBarOptions])

	return search
}