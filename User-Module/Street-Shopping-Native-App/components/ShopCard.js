import { 
    Container, 
    Content,
    H1,
    H2,
    H3,
    Text,
    View, 
 } from 'native-base';
 import {
     ScrollView,
     StyleSheet,
     Image,
 } from "react-native";
//  import { Card } from "react-native-elements";
import React, { useEffect, useState } from 'react';
import { SliderBox } from "react-native-image-slider-box";
import { images, COLORS, urls } from "../constants/";
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native';
import axios from 'axios';

export default function ShopCard({ navigation, shop }) {

    console.log("Shop-Card:", shop);
    return (
        <>
            <TouchableOpacity
                onPress={ ()=>( navigation.navigate("ShopDetails", { shop: shop }) )}
            >
                <View style={ styles.reviewMainContainer }>
                    <View style={{
                        flexDirection: "row",
                    }}>
                        <View style={{
                            // backgroundColor: "yellow",
                            width: "29%",
                        }}>
                            <Image
                                source={ images.staticProduct4 }
                                borderRadius={120}
                                style={{
                                    width: "100%",
                                    height: 100,
                                    marginTop: 10
                                }}
                            />
                        </View>
                        <View style={{
                            width: "71%",
                            margin: 5
                        }}>
                            <H1 style={{
                                color: COLORS.primary,
                                marginLeft: 10,
                                fontWeight: "bold"
                            }}>@{ shop.shopName }</H1>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: "row",
                    }}>
                        <View style={{
                            width: "70%",
                            flexDirection: "row",
                            alignItems: "center",
                        }}>
                            <TouchableOpacity>
                                <FontAwesome5
                                    name="shopping-cart"
                                    style={ styles.reviewSecondaryText }
                                />
                            </TouchableOpacity>
                            <Text style={{
                                backgroundColor: COLORS.placeHolderColor,
                                color: COLORS.lightTheme,
                                fontSize: 25,
                                width: "auto",
                                margin: 5,
                                padding: 5,
                                borderRadius: 7
                            }}>Shop Now !!</Text>
                        </View>
                        <View style={{
                            width: "33%",
                            flexDirection: "row",
                            alignItems: "center",
                        }}>
                            <Text style={ styles.reviewSecondaryText }>{ shop.shopRating }</Text>
                            <AntDesign
                                name="star"
                                style={ styles.reviewSecondaryText }
                            />
                        </View>
                    </View>
                </View>   
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: "100%",
        height: "auto",
        flexWrap: "wrap"
    },
    imageShow: {
        height: 400,
        width: "100%",
    },
    productDetailsContainer: {
        flex: 0.12,
        flexDirection: "row",
        width: "100%",
        height: "100%"
        // backgroundColor: "red",
    },
    imageContainer: {
        flex: 0.4,
        height: "100%",
        width: "100%",
        alignItems: "center",
    },
    productHeader: {
        width: "100%",
    },
    productName: {
        width: "75%",
        // backgroundColor: "blue",
        marginLeft: 10,
        alignSelf: "center"
    },
    productRating: {
        width: "25%",
        // backgroundColor: "green",
        alignSelf: "center",
        fontSize: 35
    },
    textStyleTitle: {
        // textAlign: "center",
        padding: 6,
        fontSize: 25,
        fontWeight: "bold",
        color: COLORS.primary
    },
    textStyleBody: {
        padding: 10,
        height: "100%"
    },
    productDescription: {
        flex: 0.3,
        height: "50%"
        // backgroundColor: "black",
        // margin: 5,
        // padding: 10,
    },
    reviewStyling: {
        flex: 0.7,
        height: "auto",
        flexWrap: "nowrap"
    },
    reviewMainContainer: {
        // backgroundColor: COLORS.tabSelectionColor,
        margin: 10,
        padding: 10,
        flexDirection: "row",
        flexWrap: "wrap",
        borderColor: COLORS.tabSelectionColor,
        borderWidth: 2.5,
        borderRadius: 10
    },
    reviewSecondaryText:{
        margin: 5,
        padding: 5,
        color: COLORS.primary,
        textAlign: "center",
        fontSize: 30,
        // margin: 2,
        padding: 2
    }
});
