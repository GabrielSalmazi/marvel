import styles from './style';
import { Text, View, TouchableOpacity, Modal } from 'react-native';
import 'react-native-gesture-handler';

export default function ModalErro(props) {

    return (
        <View>
           <Modal
                visible={props.modalVisible}
                transparent={true}
                animationType="slide"
            >
                <View style={styles.modal}>
                    <View style={styles.containerErro}>
                        <Text style={styles.textErro}>Erro!</Text>
                        <Text style={{ textAlign: "center" }}>Preencha o campo corretamente</Text>
                        <TouchableOpacity style={styles.btnFechar} onPress={() => props.setModalVisible(false)}>
                            <Text style={styles.textBtnFechar}>Ok</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
