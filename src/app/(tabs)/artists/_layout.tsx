import { defaultStyles } from "@/styles"
import { Stack } from "expo-router"
import { View } from "react-native"
import { StackScreenWithSearchBar } from '../../../constants/layout';

const ArtistsScreensLayout = () => {
    return (
        <View style={defaultStyles.container}>
            <Stack>
                <Stack.Screen name="index" options={{
                    ...StackScreenWithSearchBar,
                    headerTitle: 'Artists'
                }} />
            </Stack>
        </View>
    )
}

export default ArtistsScreensLayout;