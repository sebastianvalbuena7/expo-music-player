import { defaultStyles } from "@/styles"
import { Stack } from "expo-router"
import { View } from "react-native"
import { StackScreenWithSearchBar } from '@/constants/layout';

const SongsScreensLayout = () => {
    return (
        <View style={defaultStyles.container}>
            <Stack>
                <Stack.Screen
                    name="index"
                    options={{
                        ...StackScreenWithSearchBar,
                        headerTitle: 'Songs',
                        // contentStyle: {
                        //     marginTop: 10
                        // }
                    }}
                />
            </Stack>
        </View>
    )
}

export default SongsScreensLayout;