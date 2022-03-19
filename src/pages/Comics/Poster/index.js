import styles from "./style";
import { Text, View, Animated } from 'react-native';
import 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from "react-native-vector-icons/FontAwesome";

export default function Poster(props) {

    return (
        <View style={{ padding: 10 }}>
            <Animated.Image
                style={[styles.imagem, { opacity: props.fadeAnim }]}
                source={{ uri: props.urlImagem + ".jpg" }}
            />
            <LinearGradient
                colors={['rgba(0,0,0,1.0)', 'transparent']}
                start={[0, 1]}
                end={[1, 0]}
                style={styles.gradiente}
            >
                <View style={styles.containerNome}>
                    <View>
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

                <View style={styles.containerDescricao}>
                    <Text style={{ marginBottom: 10, color: "white" }}>
                        {props.description}
                    </Text>
                </View>
            </LinearGradient>
        </View>
    );
}
