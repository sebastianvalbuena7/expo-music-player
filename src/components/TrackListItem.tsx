import { unknownTrackImageUri } from "@/constants/images"
import { colors, fontSize } from "@/constants/token"
import { defaultStyles } from "@/styles"
import { StyleSheet, Text, TouchableHighlight, View } from "react-native"
import FastImage from "react-native-fast-image"

export type TrackListItemProps = {
    track: { title: string, image?: string, artist?: string }
}

export const TrackListItem = ({ track }: TrackListItemProps) => {
    const { title, image, artist } = track;

    const isActiveTrack = false;

    return (
        <TouchableHighlight style={styles.trackItemContainer}>
            <View>
                <View>
                    <FastImage
                        source={{
                            uri: image ?? unknownTrackImageUri,
                            priority: FastImage.priority.normal
                        }}
                        style={{
                            ...styles.trackArtworkImage,
                            opacity: isActiveTrack ? 0.6 : 1
                        }}
                    />
                </View>

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
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
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
        fontSize: 14
    },
    trackItemContainer: {
        flexDirection: 'row',
        columnGap: 14,
        alignItems: 'center',
        paddingRight: 20
    }
});