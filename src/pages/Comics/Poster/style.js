import { BackHandler, StyleSheet } from "react-native";

const styles = StyleSheet.create({

    imagem: {
        width: "100%",
        height: 600,
        position: "absolute",
        margin: 10,
        borderRadius: 10
    },

    gradiente: {
        width: "100%",
        height: 600,
        justifyContent: "space-between",
        padding: 20,
        borderRadius: 10
    },

    containerNome: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    containerDescricao: {
        flexDirection: "row",
    },
  
});

export default styles