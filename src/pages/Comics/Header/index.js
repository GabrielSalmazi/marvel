import styles from "./style";
import { Text, View } from 'react-native';
import 'react-native-gesture-handler';
import {BebasNeue_400Regular, useFonts} from "@expo-google-fonts/bebas-neue"
import AppLoading from "expo-app-loading"

export default function Header(props) {
    let [fontsLoadedBebas] = useFonts({
        "BebasNeue": BebasNeue_400Regular
    });

    if (!fontsLoadedBebas) {
        return (
            <AppLoading/>
        );
    }
    return (
        <View style={styles.nomeComics}>
            <Text style={styles.textNomeComics}>{props.title}</Text>
        </View>
    );
}
