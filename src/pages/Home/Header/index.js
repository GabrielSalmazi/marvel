import styles from './style';
import { View, Image, TextInput, TouchableOpacity, StatusBar, Animated} from 'react-native';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Header(props) {
    //console.log(props.animWidthLogo);
    return (
        <View>
            <StatusBar
                barStyle="light-content"
            />
            <View style={styles.header}>
                <View style={{ marginBottom: 10 }}>
                    <Image
                        style={{ width: 130, height: 50 }}
                        //style={{ width: props.animWidthLogo, height: props.animHeightLogo }}
                        source={require('../../../imagens/marvel.png')}
                    />
                </View>
                <View style={styles.areaInput}>
                    <View style={{ width: "90%" }}>
                        <TextInput
                            style={styles.inputText}
                            value={props.search}
                            onChangeText={(texto) => props.setSearch(texto)}
                            placeholder={"Search"}
                        />
                    </View>
                    <TouchableOpacity
                        style={{ width: "10%" }}
                        onPress={props.buscaApi}
                    >
                        <Icon name="search" size={20} color={"silver"} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
