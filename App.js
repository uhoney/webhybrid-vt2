import React, { useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import styles from './components/styles';
import MyModal from './components/myModal';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);

  const clickModal = () => {
    setModalVisible(!modalVisible);
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={clickModal}>
        <Text style={styles.text}>Show modal message</Text>
      </Pressable>
      <MyModal modalVisible={modalVisible} setModalVisible={setModalVisible} />

    </View>
  );
}