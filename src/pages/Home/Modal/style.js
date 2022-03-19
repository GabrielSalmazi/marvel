import { BackHandler, StyleSheet } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";

const styles = StyleSheet.create({

    modal: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    containerErro: {
        width: 200,
        height: 150,
        backgroundColor: "white",
        borderRadius: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10
    },

    btnFechar:{
        width: "90%",
        height: 40,
        backgroundColor: "#ec1d24",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },

    textBtnFechar:{
        color: "white",
        fontWeight: "bold",
        fontSize: 16
    },

    textErro:{
        fontWeight: "bold",
        fontSize: 14,
        color: "#ec1d24"
    },
});

export default styles