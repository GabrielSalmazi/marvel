import { BackHandler, StyleSheet } from "react-native";

const styles = StyleSheet.create({

    comics:{
        padding: 10
    },

    titulo:{
        color: "#ec1d24",
        fontWeight: "bold",
        fontSize: 22,
        fontFamily: "BebasNeue"
    },

    card: {
        width: 150,
        height: 250,
        borderRadius: 20,
        marginHorizontal: 5,
        justifyContent: "space-between",
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 1,
    },

    scroll:{
        paddingVertical: 5
    },

    thumbnail:{
        width: 170,
        height: 250,
    },
    containerNomeComics:{
        width: 180,
        padding: 5
    },
    textNomeComics:{
        fontWeight: "bold",
        fontFamily: "BebasNeue",
        fontSize: 18
    }
});

export default styles