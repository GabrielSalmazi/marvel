import { View, ScrollView, ActivityIndicator, Animated } from 'react-native';
import md5 from 'md5';
import { useEffect, useState, useRef } from 'react';
import 'react-native-gesture-handler';

import Header from "./Header";
import Poster from "./Poster";
import Creators from "./Creators";

const publicKey = "2383d8ea939a06cfbe270d611f9e73a7";
const privateKey = "3eafb441e3c16610dfbb2375c83c464b89317a16";
const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);


export default function Comics({ route }) {

    const [comics, setComics] = useState([]);
    const [loading, setLoading] = useState(false);

    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start();
    }

    async function comicsInfo() {
        var axios = require("axios").default;
        var options = {
            method: 'GET',
            url: route.params.urlComics + "?ts=" + time + "&apikey=" + publicKey + "&hash=" + hash + "",
        };
        await axios.request(options).then(function (response) {
            setComics(response.data.data.results);
        }).catch(function (error) {
            console.error(error);
        });
    }

    useEffect(async () => {
        await comicsInfo();
        setLoading(true)
        fadeIn()
    }, [])

    return (
        <View style={{ flex: 1 }}>
            {loading == true ?
                <ScrollView>
                    <Header 
                        title={comics[0].title}
                    />
                    <Poster 
                        fadeAnim={fadeAnim}
                        urlImagem={comics[0].thumbnail.path}
                        nome={route.params?.nome}
                        description={comics[0].description}
                    />
                    <Creators 
                        comics={comics[0].creators.items}
                    />
                </ScrollView>
                :
                <ActivityIndicator />
            }
        </View>
    );
}
