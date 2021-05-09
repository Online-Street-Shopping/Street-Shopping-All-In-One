import { Button, Container, Form, H1, Input, Item, Text, View } from 'native-base';
import {
    ScrollView,
    StyleSheet,
    Image,
} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useEffect, useState } from 'react';
import { COLORS, images } from '../constants';
import { Card } from "react-native-elements";
import { TouchableOpacity } from 'react-native';
import { Alert } from 'react-native';

export default function MarketCard({ navigation, market }) {
    console.log("Market-Card", market);
    return (
        <>
            <Container style={{
                // backgroundColor: "red",
                flex: 0.35,
                height: "auto",
                margin: 10,
                padding: 5,
                borderRadius: 7,
                elevation: 1
            }}>
                <TouchableOpacity style={ styles.mainContentContainer}
                    onPress={
                        ()=>( 
                            navigation.navigate("MarketDetails", { market: market } )
                        )
                    }
                >
                    <Card>
                        <Card.Image
                            // source={{
                            //     uri: product.Media[0].FullPath
                            // }}
                            source={{
                                uri: market.marketImage 
                            }}
                        />
                        <View style={{
                            flexDirection: "row"
                        }}>
                            <View style={{ width: "75%" }}>
                                <H1 style={{
                                    fontWeight: "bold"
                                }}>
                                    { market.marketName}
                                </H1>
                            </View>
                            <View style={{ width: "25%" }}>
                                <Text style={{
                                    color: COLORS.primary,
                                    fontWeight: "bold",
                                    fontSize: 25,
                                }}>
                                    { market.rating } <AntDesign
                                            name="star"
                                            style={{
                                                fontSize: 25
                                            }}
                                        />
                                </Text>
                            </View>
                        </View>
                    </Card>
                </TouchableOpacity>
            </Container>
        </>
    )
}

const styles = StyleSheet.create({
    mainContentContainer: {
        // backgroundColor: "green",
        // margin: 5,
        // height: "auto"
        
    }
});
