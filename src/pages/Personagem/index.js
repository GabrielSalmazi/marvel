import { View, ScrollView, Animated } from 'react-native';
import md5 from 'md5';
import { useEffect, useState, useRef } from 'react';
import 'react-native-gesture-handler';

import Poster from "./Poster";
import Descricao from "./Descricao";
import Comics from "./Comics";

const publicKey = "2383d8ea939a06cfbe270d611f9e73a7";
const privateKey = "3eafb441e3c16610dfbb2375c83c464b89317a16";
const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

export default function Personagem({ navigation, route }) {

    const [comics, setComics] = useState([]);
    const [loading, setLoading] = useState(false);
    const dados = [];

    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start();
    }

    async function comicsId(urlComics) {
        var axios = require("axios").default;
        var options = {
            method: 'GET',
            url: urlComics + "?ts=" + time + "&apikey=" + publicKey + "&hash=" + hash + "",
        };
        await axios.request(options).then(function (response) {
            dados.push(response.data.data.results);
        }).catch(function (error) {
            console.error(error);
        });
    }

    useEffect(async () => {
        for (var i = 0; i < route.params?.comics.items.length; i++) {
            await comicsId(route.params?.comics.items[i].resourceURI);
        }
        setComics(dados);
        setLoading(true);
        fadeIn()
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <Poster
                urlImagem={route.params?.urlImagem}
                nome={route.params?.nome}
            />
            <ScrollView>
                <Descricao
                    descricao={route.params?.descricao}
                />
                <Comics
                    comics={comics}
                    navigation={navigation}
                    loading={loading}
                    fadeAnim={fadeAnim}
                />
            </ScrollView>
        </View>
    );
}
