import React, { useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import styles from './components/styles';
import MyModal from './components/myModal';

export default function App() {

  // Tilamuuttuja ja funktio
  const [modalVisible, setModalVisible] = useState(false);

  // Boolean switch
  const clickModal = () => {
    setModalVisible(!modalVisible);
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={clickModal}>
        <Text style={styles.text}>Show modal message</Text>
      </Pressable>

      {/* Annetaan propseina modalin näkyvyyden tila ja funktio */}
      <MyModal myModal={modalVisible} setMyModal={setModalVisible} />

    </View>
  );
}