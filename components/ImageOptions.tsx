import { View, StyleSheet } from "react-native";
import IconButton from "./IconButton";
import CircleButton from "./CircleButton";

export default function ImageOptions({ setShowAppOptions }) {

    const onReset = () => {
        setShowAppOptions(false);
    };

    const onAddSticker = () => {
        // we will implement this later
    };

    const onSaveImageAsync = async () => {
        // we will implement this later
    };

    return (
        <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
                <IconButton icon="refresh" label="Reset" onPress={onReset} />
                <CircleButton onPress={onAddSticker} />
                <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    optionsContainer: {
        position: 'absolute',
        bottom: 80,
    },
    optionsRow: {
        alignItems: 'center',
        flexDirection: 'row',
    },
})