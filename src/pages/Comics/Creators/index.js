import styles from "./style";
import { Text, View } from 'react-native';
import 'react-native-gesture-handler';
import {BebasNeue_400Regular, useFonts} from "@expo-google-fonts/bebas-neue"
import AppLoading from "expo-app-loading"

export default function Creators(props) {

    let [fontsLoadedBebas] = useFonts({
        "BebasNeue": BebasNeue_400Regular
    });

    if (!fontsLoadedBebas) {
        return (
            <AppLoading/>
        );
    }

    return (
        <View style={styles.containerInfo}>
            <Text style={styles.titulo}>Creators</Text>
            <View style={styles.containerDados}>
                {props.comics.map(
                    (creators, index) => {
                        return (
                            <View key={index} style={styles.bordaCreator}>
                                <Text style={styles.creators}>{creators.name}</Text>
                                <Text style={styles.role}>{creators.role}</Text>
                            </View>
                        )
                    }
                )}
            </View>
        </View>
    );
}
