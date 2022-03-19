import styles from "./style";
import { Text, View, Image } from 'react-native';
import 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from "react-native-vector-icons/FontAwesome";
import { useFonts, Bangers_400Regular } from "@expo-google-fonts/bangers";
import {BebasNeue_400Regular, } from "@expo-google-fonts/bebas-neue"
import AppLoading from "expo-app-loading"

export default function Poster(props) {

    let [fontsLoadedBangers] = useFonts({
        "Bangers": Bangers_400Regular
    });


    let [fontsLoadedBebas] = useFonts({
        "BebasNeue": BebasNeue_400Regular
    });

    if (!fontsLoadedBangers) {
        return (
            <AppLoading/>
        );
    }

    if (!fontsLoadedBebas) {
        return (
            <AppLoading/>
        );
    }

    return (
        <View>
            <Image
                style={styles.imagem}
                source={{ uri: props.urlImagem }}
            />

            <LinearGradient
                colors={['rgba(0,0,0,1.0)', 'transparent']}
                start={[0, 1]}
                end={[1, 0]}
                style={styles.gradiente}
            >
                <View style={styles.containerNome}>
                    <View style={{width: "80%"}}>
                        <Text style={styles.nomePersonagem}>{props.nome}</Text>
                    </View>
                    <View>
                        <Icon name="share-alt" size={25} color={"tomato"} />
                    </View>
                </View>
                <View>
                    <Text style={{ marginBottom: 10, color: "white" }}>
                        <Icon name="star-half-empty" size={15} color={"white"} />  20
                    </Text>
                    <Text style={{ marginBottom: 10, color: "white" }}>
                        <Icon name="comment-o" size={15} color={"white"} />  15
                    </Text>
                    <Text style={{ marginBottom: 10, color: "white" }}>
                        <Icon name="thumbs-o-up" size={15} color={"white"} />  63
                    </Text>
                    <Text style={{ marginBottom: 10, color: "white" }}>
                        <Icon name="thumbs-o-down" size={15} color={"white"} />  2
                    </Text>
                </View>
                <View style={styles.containerEstrela}>
                    <View style={styles.estrela}>
                        <Icon name="star" size={20} color={"tomato"} />
                    </View>
                    <View style={styles.estrela}>
                        <Icon name="star" size={20} color={"tomato"} />
                    </View>
                    <View style={styles.estrela}>
                        <Icon name="star" size={20} color={"tomato"} />
                    </View>
                    <View style={styles.estrela}>
                        <Icon name="star-o" size={20} color={"tomato"} />
                    </View>
                    <View style={styles.estrela}>
                        <Icon name="star-o" size={20} color={"tomato"} />
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
}
