import styles from './style';
import { Text, View, ScrollView, Image, TouchableOpacity, ActivityIndicator, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/FontAwesome";
import { useFonts, Bangers_400Regular } from "@expo-google-fonts/bangers";
import { BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue"
import AppLoading from "expo-app-loading"

export default function Heroes(props) {
    let [fontsLoadedBangers] = useFonts({
        "Bangers": Bangers_400Regular
    });

    let [fontsLoadedBebas] = useFonts({
        "BebasNeue": BebasNeue_400Regular
    });

    if (!fontsLoadedBangers) {
        return (
            <AppLoading />
        );
    }

    if (!fontsLoadedBebas) {
        return (
            <AppLoading />
        );
    }

    return (
        <View>
            <Image
                style={styles.backgroundImage}
                source={require('../../../imagens/quadrinho-fundo2.jpg')}
            />
            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20 }}>
                <Text style={styles.titulo}>Heroes</Text>
                <TouchableOpacity onPress={props.allCharacters}>
                    <Text style={styles.tituloAll}>All</Text>
                </TouchableOpacity>
            </View>
            {props.loading == true ?
                props.characters.length > 0 ?
                    <ScrollView style={styles.scroll} horizontal={true} showsHorizontalScrollIndicator={false}>
                        {props.characters.map(
                            (personagem, index) => {
                                return (
                                    <Animated.View key={index} style={{ opacity: props.fadeAnim }}>

                                        <TouchableOpacity
                                            style={styles.card}
                                            onPress={() => props.navigation.navigate('Personagem', {
                                                urlImagem: personagem.thumbnail.path + "." + personagem.thumbnail.extension,
                                                nome: personagem.name,
                                                descricao: personagem.description,
                                                comics: personagem.comics,
                                                series: personagem.series,
                                                stories: personagem.stories,
                                                events: personagem.events
                                        })}>
                                            <View>

                                                <Image
                                                    style={styles.imagem}
                                                    source={{ uri: personagem.thumbnail.path + "." + personagem.thumbnail.extension }}
                                                />
                                                <LinearGradient
                                                    colors={['rgba(0,0,0,1)', 'transparent']}
                                                    start={[0, 1]}
                                                    end={[1, 0]}
                                                    style={styles.gradiente}
                                                >
                                                    <View style={{ padding: 10 }}>
                                                        <Text style={styles.nomePersonagem}>{personagem.name}</Text>
                                                    </View>
                                                    <View style={{ padding: 10 }}>
                                                        <View>
                                                            <Text style={styles.tituloHabilidades}>Skills</Text>
                                                            <View style={{ flexDirection: "row" }}>
                                                                <View>
                                                                    <Text style={styles.habilidades}>Power</Text>
                                                                </View>
                                                                <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 10 }}>
                                                                    <Icon name="circle" size={10} color={"tomato"} style={styles.habilidadesIcon} />
                                                                    <Icon name="circle" size={10} color={"tomato"} style={styles.habilidadesIcon} />
                                                                    <Icon name="circle" size={10} color={"tomato"} style={styles.habilidadesIcon} />
                                                                    <Icon name="circle-o" size={10} color={"tomato"} style={styles.habilidadesIcon} />
                                                                    <Icon name="circle-o" size={10} color={"tomato"} style={styles.habilidadesIcon} />
                                                                    <Icon name="circle-o" size={10} color={"tomato"} style={styles.habilidadesIcon} />
                                                                </View>
                                                            </View>

                                                            <View style={{ flexDirection: "row" }}>
                                                                <View>
                                                                    <Text style={styles.habilidades}>Force</Text>
                                                                </View>
                                                                <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 10 }}>
                                                                    <Icon name="circle" size={10} color={"tomato"} style={styles.habilidadesIcon} />
                                                                    <Icon name="circle" size={10} color={"tomato"} style={styles.habilidadesIcon} />
                                                                    <Icon name="circle" size={10} color={"tomato"} style={styles.habilidadesIcon} />
                                                                    <Icon name="circle-o" size={10} color={"tomato"} style={styles.habilidadesIcon} />
                                                                    <Icon name="circle-o" size={10} color={"tomato"} style={styles.habilidadesIcon} />
                                                                    <Icon name="circle-o" size={10} color={"tomato"} style={styles.habilidadesIcon} />
                                                                </View>
                                                            </View>

                                                            <View style={{ flexDirection: "row" }}>
                                                                <View>
                                                                    <Text style={styles.habilidades}>Intelligence</Text>
                                                                </View>
                                                                <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 10 }}>
                                                                    <Icon name="circle" size={10} color={"tomato"} style={styles.habilidadesIcon} />
                                                                    <Icon name="circle" size={10} color={"tomato"} style={styles.habilidadesIcon} />
                                                                    <Icon name="circle" size={10} color={"tomato"} style={styles.habilidadesIcon} />
                                                                    <Icon name="circle-o" size={10} color={"tomato"} style={styles.habilidadesIcon} />
                                                                    <Icon name="circle-o" size={10} color={"tomato"} style={styles.habilidadesIcon} />
                                                                    <Icon name="circle-o" size={10} color={"tomato"} style={styles.habilidadesIcon} />
                                                                </View>
                                                            </View>

                                                            <View style={{ flexDirection: "row" }}>
                                                                <View>
                                                                    <Text style={styles.habilidades}>Velocity</Text>
                                                                </View>
                                                                <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 10 }}>
                                                                    <Icon name="circle" size={10} color={"tomato"} style={styles.habilidadesIcon} />
                                                                    <Icon name="circle" size={10} color={"tomato"} style={styles.habilidadesIcon} />
                                                                    <Icon name="circle" size={10} color={"tomato"} style={styles.habilidadesIcon} />
                                                                    <Icon name="circle-o" size={10} color={"tomato"} style={styles.habilidadesIcon} />
                                                                    <Icon name="circle-o" size={10} color={"tomato"} style={styles.habilidadesIcon} />
                                                                    <Icon name="circle-o" size={10} color={"tomato"} style={styles.habilidadesIcon} />
                                                                </View>
                                                            </View>

                                                        </View>
                                                    </View>
                                                    {/*<View style={{ padding: 10 }}>
                                                    <Text style={styles.descricao}>{personagem.comics.items.length > 0 ? personagem.comics.items[0].name : ""}</Text>
                                                </View>*/}
                                                </LinearGradient>
                                            </View>
                                            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center"}} onPress={() => alert("a")}>
                                                <Icon name="send" size={18} color={"silver"} style={{marginRight: 15, marginTop: 10}}/>
                                                <Icon name="comment-o" size={20} color={"silver"} style={{marginRight: 15, marginTop: 10}}/>
                                                <Icon name="thumbs-o-up" size={20} color={"silver"} style={{marginRight: 15, marginTop: 10}}/>
                                                <Icon name="thumbs-o-down" size={20} color={"silver"} style={{marginRight: 15, marginTop: 10}}/>
                                            </TouchableOpacity>
                                        </TouchableOpacity>
                                    </Animated.View>
                                )
                            }
                        )}
                    </ScrollView>
                    :
                    <View style={styles.vazio}>
                        <Text style={{ fontSize: 16, fontWeight: "bold", color: "silver" }}>Busca não encontrada</Text>
                    </View>
                :
                <ActivityIndicator />
            }
        </View>
    );
}
