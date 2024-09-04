import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        color: 'black',
    },
    modalView: {
        flex: 1, // Täyttää tyhjän tilan parentin tilasta
        justifyContent: 'flex-start', // modalView:n lapset alkaa yläreunasta
        alignItems: 'center', // modalView:n lapset keskelle
        backgroundColor: 'rgba(0,0,0,0)',
        paddingTop: height * 0.25 // Tämä on se mikä siirtää modalin ("laatikon") eli sen näkyvän osan
    },
    modalContent: {
        width: 300, // Defaulttina relative dpi
        padding: 20,
        backgroundColor: 'rgba(175,215,230,0.5)',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 20,
        color: 'black',
        marginBottom: 20,
    },
});

export default styles;