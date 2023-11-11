import * as ImagePicker from 'expo-image-picker';

export const pickImageAsync = async ({ setSelectedImage, onCanceled }) => {
    const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
    });

    if (result.canceled) {
        onCanceled?.();
    } else {
        setSelectedImage?.(result.assets[0].uri);
    }
};
