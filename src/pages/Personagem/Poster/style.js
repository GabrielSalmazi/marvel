import { BackHandler, StyleSheet } from "react-native";

const styles = StyleSheet.create({

    imagem: {
        width: "100%",
        height: 300,
        position: "absolute",
    },

    nomePersonagem: {
        fontWeight: "bold",
        fontSize: 35,
        color: "white",
        fontFamily:"Bangers"
    },

    gradiente:{
        width: "100%",
        height: 300,
        justifyContent: "space-between",
        padding: 20
    },

    containerEstrela:{
        flexDirection: "row",
    },

    estrela:{
        marginHorizontal: 3
    },

    containerNome:{
        flexDirection: "row",
        justifyContent: "space-between"
    },
});

export default styles