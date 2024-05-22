import { FlatList, FlatListProps, View } from "react-native";
// import library from '@/assets/data/library.json';
import { TrackListItem } from "./TrackListItem";
import { utilsStyles } from '../styles/index';

export type TracksListProps = Partial<FlatListProps<unknown>> & {
    tracks: any[];
};

const ItemDivider = () => {
    return (
        <View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }} />
    )
}

export const TracksList = ({ tracks, ...flatListProps }: TracksListProps) => {
    return (
        <FlatList
            contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
            data={tracks}
            ItemSeparatorComponent={ItemDivider}
            ListFooterComponent={ItemDivider}
            renderItem={({ item: track }) =>
                <TrackListItem track={{
                    ...track,
                    image: track.artwork
                }}
                />
            }
            {...flatListProps}
        />
    )
}
