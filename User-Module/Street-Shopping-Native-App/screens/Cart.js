import { Button, Container, Form, H1, Input, Item, Text, View } from 'native-base';
import {
    ScrollView,
    StyleSheet,
    Image,
} from "react-native";
import { TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { COLORS, images } from '../constants';
import { Card } from "react-native-elements";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Cart() {
    console.log("From cart screen--------------------");
    const [ products, setProducts ] = useState();
    const [ quantity, setQuantity ] = useState(1);
    // const [ quantity2, setQuantity2 ] = useState();

    let quantities = new Map();

    const plusCart = ()=>{
        setQuantity( quantity + 1 );
    };

    const minusCart = ()=>{
        if( quantity > 0 )
        setQuantity( quantity - 1 );
    };

    const getCartProducts = async()=>{
        const cartPro = await AsyncStorage.getItem("@CartProducts");
        let cartProducts = [];
        cartProducts = await JSON.parse( cartPro );
        console.log( "Fetching....", cartProducts );
        // products.push( cartProducts );
        setProducts( cartProducts );
        console.log("Cart-screen", products);
    };

    useEffect( async ()=>{
        getCartProducts();

        console.log("Cart-screen", products);
        // if( products ){
        //     products.forEach(product => {
        //         let temp = product.productId;
        //         quantities.set( temp, 1);
        //         console.log( "----------", temp, 1);
        //         console.log( quantities.get( temp ));
        //     });
        // }
    }, []);

    return ( 
        <ScrollView>
        <Container style={{
            height: "auto"
        }}>
            { products ? (
                products.map( (product) =>(
                    <Card key={ product.productId }>
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
                            <View style={{ width: "auto", flexDirection: "row" }}>
                                <TouchableOpacity
                                    onPress={ ()=>( plusCart() )}
                                    style={{
                                        backgroundColor: COLORS.primary,
                                        height: 40,
                                        width: 40,
                                        borderRadius: 50,
                                        margin: 10,
                                        padding: 5
                                    }}
                                >
                                    <AntDesign
                                        name="plus"
                                        style={{
                                        textAlign: "center",
                                        color: "white",
                                        fontWeight: "bold",
                                        fontSize: 30
                                        }}
                                    />
                                </TouchableOpacity>
                                <Text style={{
                                        textAlign: "right",
                                        fontWeight: "bold",
                                        fontSize: 30,
                                        margin: 5,
                                        padding: 5
                                        }}>{ quantity }</Text>
                            </View>
                            <View style={{ width: "auto"}}>
                            <TouchableOpacity
                                    onPress={ ()=>( minusCart() )}
                                    style={{
                                        backgroundColor: COLORS.primary,
                                        height: 40,
                                        width: 40,
                                        borderRadius: 50,
                                        margin: 10,
                                        padding: 5,
                                        flexDirection: "row"
                                    }}
                                >
                                    <AntDesign
                                        name="minus"
                                        style={{
                                        textAlign: "center",
                                        color: "white",
                                        fontWeight: "bold",
                                        fontSize: 30
                                        }}
                                    />
                            </TouchableOpacity>
                                <Text style={{
                                        fontWeight: "bold",
                                        fontSize: 20
                                        }}>Total amount: { ( product.price ) * quantity }</Text>
                            </View>
                        </View>
                    </Card>
                ))
            ) : (
                <Text>Cart it Empty</Text>
            )}
        </Container>
        </ScrollView>
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

