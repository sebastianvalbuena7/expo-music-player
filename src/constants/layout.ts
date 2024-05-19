import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { colors } from "./token";

export const StackScreenWithSearchBar: NativeStackNavigationOptions = {
    headerLargeTitle: true,
    headerLargeStyle: {
        backgroundColor: colors.background
    },
    headerLargeTitleStyle: {
        color: colors.text
    },
    headerTintColor: colors.text,
    // headerTransparent: false,
    headerStyle: {
        backgroundColor: 'transparent'
    },
    headerBlurEffect: 'prominent',
    headerShadowVisible: false,
    headerTitleStyle: {
        fontSize: 30
    }
}