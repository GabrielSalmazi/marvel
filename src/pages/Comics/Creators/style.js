import { BackHandler, StyleSheet } from "react-native";

const styles = StyleSheet.create({

    containerInfo: {
        padding: 10,
    },

    titulo: {
        color: "#ec1d24",
        fontWeight: "bold",
        fontSize: 22,
        fontFamily: "BebasNeue"
    },

    containerDados:{
        backgroundColor: "white",
        padding: 10,
        marginTop: 5
    },

    creators:{
        fontWeight: "bold",
        color: "#202020",
        fontFamily: "BebasNeue",
        fontSize: 16
        
    },
    
    role:{
        fontWeight: "bold",
        color: "silver",
        marginLeft: 2,
        fontFamily: "BebasNeue",
        fontSize: 16
    },

    bordaCreator:{
        borderLeftColor: "#ec1d24",
        borderLeftWidth: 2,
        paddingLeft: 5,
        marginBottom: 10
    }
});

export default styles