import { colors, fontSize } from "@/constants/token";
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import { StyleSheet, View } from 'react-native';
import { FontAwesome, MaterialCommunityIcons, Ionicons, FontAwesome6 } from '@expo/vector-icons';

const TabsNavigation = () => {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: colors.primary,
            tabBarLabelStyle: {
                fontSize: fontSize.xs,
                fontWeight: '500'
            },
            headerShown: false,
            tabBarStyle: {
                position: 'absolute',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderTopWidth: 0,
                paddingTop: 2,
                paddingBottom: 4
            },
            tabBarBackground: () => (
                <BlurView intensity={20} style={{
                    ...StyleSheet.absoluteFillObject,
                    overflow: 'hidden',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    bottom: 0,
                    backgroundColor: '#000000CC'
                }} />
            )
        }}>
            <Tabs.Screen
                name="favorites"
                options={{
                    title: 'Favorites',
                    tabBarIcon: ({ color }) => <FontAwesome name="heart" size={20} color={color} />
                }}
            />
            <Tabs.Screen
                name="playlists"
                options={{
                    title: 'Playlists',
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name="playlist-play" size={28} color={color} />
                }}
            />
            <Tabs.Screen
                name="(songs)"
                options={{
                    title: 'Songs',
                    tabBarIcon: ({ color }) => <Ionicons name="musical-notes-sharp" size={24} color={color} />
                }}
            />
            <Tabs.Screen
                name="artists"
                options={{
                    title: 'Artists',
                    tabBarIcon: ({ color }) => <FontAwesome6 name="users-line" size={20} color={color} />
                }}
            />
        </Tabs>
    )
}

export default TabsNavigation;