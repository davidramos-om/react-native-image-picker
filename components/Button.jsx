import { View, Pressable, Text } from 'react-native';
import { styles } from './styles';

export default function Button({ label, onPress }) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}
