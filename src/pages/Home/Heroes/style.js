import { BackHandler, StyleSheet } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";

const styles = StyleSheet.create({

    scroll: {
        marginBottom: 20,
        padding: 10
    },

    titulo: {
        color: "#ec1d24",
        fontWeight: "bold",
        fontSize: 23,
        marginTop: 10,
        fontFamily:"BebasNeue"
    },
    tituloAll: {
        color: "silver",
        fontWeight: "bold",
        fontSize: 23,
        marginTop: 10,
        fontFamily:"BebasNeue"
    },
  

    card:{
        width: 300,
        height: 400,
        backgroundColor: "white",
        marginHorizontal: 3,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1,
    },

    gradiente:{
        width: "100%",
        height: "100%",
        justifyContent: "space-between",
        padding: 20,
        borderRadius: 5
    },

    imagem: {
        width: "100%",
        height: "100%",
        position: "absolute",
        borderRadius: 5,
        backgroundColor: "red",
    },
    moldura:{
        width: "100%",
        height: "100%",
        position: "absolute",

        borderColor: "black",
        borderWidth: 4,
        marginTop: -10
    },

    nomePersonagem: {
        fontWeight: "bold",
        fontStyle: "italic",
        fontSize: 35,
        color: "white",
        fontFamily: "Bangers"
    },

    descricao: {
        fontSize: 10,
        fontWeight: "bold",
        color: "silver",
    },
    vazio:{
        padding: 20
    },

    backgroundImage:{
        width: "100%",
        height: "100%",
        position: "absolute",
        opacity: 0.05
    },

    tituloHabilidades:{
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        marginBottom: 10,
        fontFamily:"BebasNeue"
    },

    habilidades:{
        color: "silver",
        fontFamily:"BebasNeue",
        fontSize: 16
    },

    habilidadesIcon:{
        marginHorizontal: 2
    }
});

export default styles