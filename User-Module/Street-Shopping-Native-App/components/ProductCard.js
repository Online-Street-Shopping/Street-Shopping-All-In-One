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
import AsyncStorage from '@react-native-async-storage/async-storage';
import ecomCart from '@ecomplus/shopping-cart';

import { Alert } from 'react-native';

export default function ProductCard({ navigation, product }) {

    // AsyncStorage.removeItem("@CartProducts");

    console.log("Card: ", product);
    console.log("Card:Image ", product.Media[0].FullPath);

    ecomCart.on('change', ({ data }) => {
        console.log('Cart was changed!')
        console.log('Current cart data:', data)
    });

    const addToCart = async()=>{
        console.log("AddToCart: ", product);

        let existingList = [];

        let existing = await AsyncStorage.getItem("@CartProducts");
        if( existing != null ){
            existingList.push( await JSON.parse( existing ) );
        }
        // existingList = await ( existing ) ? JSON.parse( existing ) : null;
        
        console.log("Existing...", existingList );
        console.log("---------", existingList.length );

        if( existingList.length == 0 || existingList == null ){
            console.log("From IF--------", existingList.length);
            await AsyncStorage.setItem("@CartProducts", JSON.stringify( product ));
            await AsyncStorage.setItem( product.productId, "1");
        } else{
            console.log("From Else----", existingList.length);
            console.log("Existing..E.", existingList );

            let flag = false;

            console.log("Before for each=================");
            for( let i = 0; i < existingList.length; i++ ){
                console.log(existingList[i].productId);
                console.log("\n");
            }
            console.log("Between for each=================");
            await existingList.forEach(( p )=>{
                // console.log(p[0]);
                console.log("Matching_________", p.productId, "--", product.productId);
                if( p.productId === product.productId || p.productId == undefined ){
                    console.log("Matching_________", p.productId, "--", product.productId);
                    flag = true;
                }
            });


            if( !flag ){
                console.log("Not Exist^^^^^^^^^^^^^^^^^", product);
                await existingList.push( product );
                console.log("After-Appending*******", existingList );
                await AsyncStorage.setItem("@CartProducts", JSON.stringify( existingList ));
                await AsyncStorage.setItem( "@p1", "1");
            } else{
                console.log("Exit^^^^^^^^^^^^^^^^^^^");
                alert("Product ALready exit in the Cart !!!")
            }
        }

        console.log(( await AsyncStorage.getItem("@CartProducts")));
    };

    return (
        <>
            {/* <Container> */}
                <TouchableOpacity
                    onPress={(()=> {
                        console.log( "Navigation", product );
                        navigation.navigate("ProductDetails", { product: product } ) })}
                >
                    <Card>
                        <Card.Image
                            source={{
                                uri: product.Media[0].FullPath
                            }}
                        />
                        <View style={{
                            flexDirection: "row"
                        }}>
                            <View style={{ width: "75%" }}>
                                <H1 style={{
                                    fontWeight: "bold"
                                }}>
                                    { product.productName }
                                </H1>
                            </View>
                            <View style={{ width: "25%" }}>
                                <Text style={{
                                    color: COLORS.primary,
                                    fontWeight: "bold",
                                    fontSize: 25
                                }}>
                                    4.5 <AntDesign
                                            name="star"
                                            style={{
                                                fontSize: 25
                                            }}
                                        />
                                </Text>
                            </View>
                        </View>
                        <View style={{
                            flexDirection: "row"
                        }}>
                            <View style={{ width: "40%" }}>
                                <Text style={{
                                    fontWeight: "bold",
                                    fontSize: 25
                                }}>
                                    Rs. { product.price}/-
                                </Text>
                            </View>
                            <View>
                            {/* <View style={{ width: "60%" }}> */}
                                <TouchableOpacity>
                                    <Text style={{
                                        width: "auto",
                                        fontSize: 15,
                                        color: "white",
                                        fontWeight: "bold",
                                        backgroundColor: COLORS.placeHolderColor,
                                        margin: 5,
                                        padding: 5,
                                        borderRadius: 5
                                    }}>{product.Shop.shopName}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{
                            flexDirection: "row"
                        }}>
                            <View style={{ width: "50%" }}>
                                <TouchableOpacity
                                    onPress={ ()=>( addToCart() )}
                                >
                                    <Text style={{
                                        textAlign: "center",
                                        color: "white",
                                        fontWeight: "bold",
                                        backgroundColor: COLORS.primary,
                                        margin: 10,
                                        padding: 5,
                                        marginHorizontal: 5,
                                        height: 50,
                                        borderRadius: 5,
                                        fontSize: 22
                                    }}>Add to Cart</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: "50%" }}>
                                <TouchableOpacity>
                                    <Text style={{
                                        textAlign: "center",
                                        color: "white",
                                        fontWeight: "bold",
                                        backgroundColor: COLORS.primary,
                                        margin: 10,
                                        padding: 5,
                                        marginHorizontal: 5,
                                        height: 50,
                                        borderRadius: 5,
                                        fontSize: 22
                                    }}>Buy now</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Card>
                </TouchableOpacity>
            {/* </Container> */}
        </>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        // backgroundColor: "red",
        flex: 1,
        // flexDirection: "column",
        width: "100%",
        height: "auto",
        flexWrap: "wrap"
    },
    searchBarContainer: {
        flex: 0.1,
        flexDirection: "row",
        width: "100%",
        height: 60,
        backgroundColor: COLORS.primaryShade
    },
    mainContentContainer: {
        // backgroundColor: "red",
        flex: 0.9,
        height: "auto",
        width: "95%",
        padding: 5,
        margin: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    },
    cardContainer: {
        flexDirection: "row",
        width: "100%",
    },
    filterAreaTextTitle: {
        // color: COLORS.primary,
        color: COLORS.lightTheme,
        fontSize: 20,
        fontWeight: "bold",
        margin: 10,
    },
    filterAreaTextBody: {
        color: COLORS.placeHolderColor,
        fontSize: 18,
        backgroundColor: COLORS.tabSelectionColor,
        margin: 5,
        padding: 5,
        marginVertical: 10,
        borderRadius: 5
    }
});
