import styles from "./style";
import { Text, View, ScrollView, Image, TouchableOpacity, ActivityIndicator, Animated } from 'react-native';
import 'react-native-gesture-handler';
import {BebasNeue_400Regular, useFonts} from "@expo-google-fonts/bebas-neue"
import AppLoading from "expo-app-loading"

export default function Comics(props) {

    let [fontsLoadedBebas] = useFonts({
        "BebasNeue": BebasNeue_400Regular
    });

    if (!fontsLoadedBebas) {
        return (
            <AppLoading/>
        );
    }

    return (
        <View style={styles.comics}>
            <Text style={styles.titulo}>Comics</Text>
            {props.loading == true ?
                <ScrollView style={styles.scroll} horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        props.comics.map(
                            (comics, index) => {
                                return (
                                    <Animated.View key={index} style={{ opacity: props.fadeAnim }}>
                                        <TouchableOpacity style={styles.card} onPress={() => props.navigation.navigate('Comics', {
                                            nomeComics: comics[0].title,
                                            urlComics: comics[0].resourceURI
                                        })}>
                                            <Image
                                                style={styles.thumbnail}
                                                source={{ uri: comics[0].thumbnail.path + "." + comics[0].thumbnail.extension }}
                                            />
                                        </TouchableOpacity>
                                        <View style={styles.containerNomeComics}>
                                            <Text style={styles.textNomeComics}>{comics[0].title}</Text>
                                        </View>
                                    </Animated.View>
                                )
                            }
                        )
                    }
                </ScrollView>
                :
                <ActivityIndicator />
            }
        </View>
    );
}
