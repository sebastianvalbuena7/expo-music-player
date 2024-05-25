import { unknownTrackImageUri } from "@/constants/images"
import { colors, fontSize } from "@/constants/token"
import { defaultStyles } from "@/styles"
import { Image, StyleSheet, Text, TouchableHighlight, View } from "react-native"
import FastImage from "react-native-fast-image"
import { Track, useActiveTrack } from "react-native-track-player"
import { Entypo } from "@expo/vector-icons";

export type TrackListItemProps = {
    track: Track;
    onTrackSelect: (track: Track) => void;
}

export const TrackListItem = ({ track, onTrackSelect: handleTrackSelect }: TrackListItemProps) => {
    const { title, image, artist, artwork } = track;

    const isActiveTrack = useActiveTrack()?.url === track.url;

    return (
        <TouchableHighlight onPress={() => handleTrackSelect(track)} >
            <View style={styles.trackItemContainer}>
                <View>
                    <FastImage
                        source={{
                            uri: artwork ?? unknownTrackImageUri,
                            priority: FastImage.priority.normal
                        }}
                        style={{
                            ...styles.trackArtworkImage,
                            opacity: isActiveTrack ? 0.6 : 1
                        }}
                    />
                </View>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
                    {/* Track title * artist */}
                    <View style={{ width: '100%' }}>
                        <Text
                            numberOfLines={1}
                            style={{
                                ...styles.trackTitleText,
                                color: isActiveTrack ? colors.primary : colors.text
                            }}
                        >
                            {title}
                        </Text>

                        {artist && (
                            <Text
                                numberOfLines={1}
                                style={styles.trackArtistText}
                            >
                                {artist}
                            </Text>
                        )}
                    </View>

                    <Entypo
                        name="dots-three-horizontal"
                        size={18}
                        color={colors.icon}
                    />
                </View>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    trackItemContainer: {
        flexDirection: 'row',
        columnGap: 14,
        alignItems: 'center',
        paddingRight: 20
    },
    trackArtworkImage: {
        borderRadius: 8,
        width: 50,
        height: 50
    },
    trackTitleText: {
        ...defaultStyles.text,
        fontSize: fontSize.sm,
        fontWeight: '600',
        maxWidth: '90%'
    },
    trackArtistText: {
        ...defaultStyles.text,
        color: colors.textMuted,
        fontSize: 14,
        marginTop: 4
    },
    trackPausedIndicator: {
        position: 'absolute',
        top: 14,
        left: 14,
    },
});