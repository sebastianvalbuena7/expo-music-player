import { FlatList, FlatListProps, View } from "react-native";
// import library from '@/assets/data/library.json';
import { TrackListItem } from "./TrackListItem";
import { utilsStyles } from '../styles/index';
import { Track } from "react-native-track-player";

export type TracksListProps = Partial<FlatListProps<Track>> & {
    tracks: Track[];
};

const ItemDivider = () => {
    return (
        <View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }} />
    )
}

export const TracksList = ({ tracks, ...flatListProps }: TracksListProps) => {
    const handleTrackSelect = (track: Track) => {
        console.log(track);
    }

    return (
        <FlatList
            contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
            data={tracks}
            ItemSeparatorComponent={ItemDivider}
            ListFooterComponent={ItemDivider}
            renderItem={({ item: track }) =>
                <TrackListItem
                    track={track}
                    onTrackSelect={handleTrackSelect}
                />
            }
            {...flatListProps}
        />
    )
}
