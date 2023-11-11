import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import PrimaryButton from './components/PrimaryButton';
import { pickImageAsync } from './util/images'

const PlaceholderImage = require('./assets/images/1.png');

const onCanceled = () => {
  alert('You did not select any image.');
}

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSelectImage = async () => {
    await pickImageAsync({ setSelectedImage, onCanceled });
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          placeholderImageSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
      </View>
      <View style={styles.footerContainer}>
        <PrimaryButton
          label="Choose a photo"
          onPress={handleSelectImage}
        />
        <Button
          label="Use this photo"
        />
      </View>
      <StatusBar style="light" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});