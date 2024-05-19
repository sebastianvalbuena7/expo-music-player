import { defaultStyles } from "@/styles"
import { Stack } from "expo-router"
import { View } from "react-native"
import { StackScreenWithSearchBar } from '../../../constants/layout';

const PlaylistsScreensLayout = () => {
    return (
        <View style={defaultStyles.container}>
            <Stack>
                <Stack.Screen name="index" options={{
                    ...StackScreenWithSearchBar,
                    headerTitle: 'Playlists'
                }} />
            </Stack>
        </View>
    )
}

export default PlaylistsScreensLayout;