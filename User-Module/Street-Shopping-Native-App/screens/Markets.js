import axios from 'axios';
import { Text } from 'native-base'
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import MarketCard from "../components/MarketCard";
import { urls } from '../constants';

export default function Markets({ navigation }) {
    
    const [ markets, setMarkets ] = useState();

    const getAllMarkets = async()=>{
		try{
            await axios.get( urls.GET_ALL_MARKET )
            .then(( response )=>{
                setMarkets( response.data );
                console.log("From setting...");
            })
            .catch(( error )=>{
                console.log( error );
            });
        } catch( error ){
            console.log( error );
        }
    };

    useEffect( ()=>{
        getAllMarkets();
        console.log( "Market:::", markets );
    }, []);

    return (
        <>
            <ScrollView>
                {
                    markets ? (
                        markets.map(( market )=>(
                            <TouchableOpacity
                                onPress={
                                    ()=>( 
                                        navigation.navigate("MarketDetails", market ) )
                                }
                            >
                                <MarketCard
                                    key={ market.marketId }
                                    navigation={ navigation }
                                    market={ market }
                                />  
                            </TouchableOpacity>
                        ))
                    ) : (
                        <Text></Text>
                    )
                }
            </ScrollView>
        </>
    )
}
