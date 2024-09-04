import React from "react";
import { View, Text, Pressable, Modal } from "react-native";
import styles from "./styles";

const MyModal = ({ modalVisible, setModalVisible }) => {
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => { setModalVisible(false) }} // Backbutton androidilla, ei tarvi muuta
        >
            <View style={styles.modalView}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalText}>This is a modal message</Text>
                    <Pressable onPress={() => setModalVisible(false)}>
                        <Text style={[styles.text, { color: 'blue', fontSize: 16 }]}>Close modal</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}

export default MyModal;