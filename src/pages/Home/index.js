import { View, Animated } from 'react-native';
import md5 from 'md5';
import { useEffect, useRef, useState } from 'react';
import 'react-native-gesture-handler';

import Header from "./Header";
import Heroes from "./Heroes";
import ModalErro from "./Modal";

const publicKey = "2383d8ea939a06cfbe270d611f9e73a7";
const privateKey = "3eafb441e3c16610dfbb2375c83c464b89317a16";
const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

export default function Home({ navigation }) {

    const [characters, setCharacters] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false)
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const animWidthLogo = useRef(new Animated.Value(2)).current;

    const animaLogo = () => {
        Animated.timing(animWidthLogo, {
            toValue: 50,
            duration: 2000,
            useNativeDriver: true
        }).start();
    }

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true
        }).start();
    }

    async function allCharacters() {
        var axios = require("axios").default;
        var options = {
            method: 'GET',
            url: "http://gateway.marvel.com/v1/public/characters?ts=" + time + "&apikey=" + publicKey + "&hash=" + hash + "",
        };
        await axios.request(options).then(function (response) {
            setCharacters(response.data.data.results)
        }).catch(function (error) {
            console.error(error);
        });
    }

    function buscaApi() {
        if (search == "") {
            setModalVisible(true)
        }
        else {
            var axios = require("axios").default;
            var options = {
                method: 'GET',
                url: "http://gateway.marvel.com/v1/public/characters?nameStartsWith=" + search + "&ts=" + time + "&apikey=" + publicKey + "&hash=" + hash + "",
            };
            axios.request(options).then(function (response) {
                setCharacters(response.data.data.results)
            }).catch(function (error) {
                console.error(error);
            });
        }
    }

    useEffect(async () => {
        await allCharacters();
        setLoading(true);
        fadeIn()
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <Header
                search={search}
                setSearch={setSearch}
                buscaApi={buscaApi}
                animWidthLogo={animWidthLogo}
            />
            <Heroes
                allCharacters={allCharacters}
                loading={loading}
                characters={characters}
                fadeAnim={fadeAnim}
                navigation={navigation}
            />
            <ModalErro
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
        </View>
    );
}
