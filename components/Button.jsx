import { View, Pressable, Text } from 'react-native';
import { styles } from './styles';

export default function Button({ label }) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}