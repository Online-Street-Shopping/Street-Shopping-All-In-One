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
import { TouchableOpacity } from 'react-native';
import axios from 'axios';
import ShopCard from '../components/ShopCard';
import ProductCard from '../components/ProductCard';
import { Card } from "react-native-elements";

const ShopDetails = ({ navigation, route })=>{

    console.log( "Shop0-Details", route.params.shop);
    console.log("loading.....");

    const shop = route.params.shop;

    console.log(urls.GET_A_SHOP_WITH_PRODUCT + shop.shopId);

    const [ iShop, setIShop ] = useState( null );

    const getAllShops = async()=>{
        console.log("loading from in.....");
        console.log(urls.GET_A_SHOP_WITH_PRODUCT + shop.shopId);
        await axios.get( urls.GET_A_SHOP_WITH_PRODUCT + shop.shopId )
        .then(( response )=>{
            console.log("Setting iShop", response.data[0]);
            setIShop( response.data[0] );
            console.log( "ISHop-Product^^^^^^^^^^^^", response.data[0].Product );
            console.log( "ISHop-Product^^^^^^^^^^^^", iShop.Product );
        })
        .catch(( error )=>{
            console.log( error );
        });
    };

    useEffect( async ()=>{
        await getAllShops();
        console.log( "From Effect..", iShop );
    }, []);

    return (
        <>
            <ScrollView>
                { ( iShop ) ? (
                    <Container style={ styles.mainContainer }
                >
                    {/* Product Image */}
                    <Container style={ styles.imageContainer }>
                        <SliderBox
                            autoplay={ true } 
                            circleLoop={ true }  
                            images={[
                                // shop.shopImage
                                // images.staticProduct3,
                                // images.staticProduct4
                            ]}
                            style={ styles.imageShow }
                        />
                    </Container>
                    <View style={{ borderBottomColor: COLORS.hrLineColor , borderBottomWidth: 1, width: "95%", alignSelf: "center" }} />
                    <View style={ styles.productDetailsContainer }>
                        {/* Product-name */}
                        <View style={ styles.productName }>
                            <Text style={ styles.textStyleTitle }>{ iShop.shopName }</Text>
                        </View>
                        {/* Product-rating */}
                        <View  style={ styles.productRating }>
                            <Text style={ styles.textStyleTitle }>
                                { iShop.shopRating } <AntDesign name="star" style={ styles.textStyleTitle } />
                            </Text>
                        </View>
                    </View>
                    <View style={{ borderBottomColor: COLORS.hrLineColor , borderBottomWidth: 1, width: "95%", alignSelf: "center" }} />
                    {/* Product-description */}
                    <View style={ styles.productDescription }>
                        <Text style={ styles.textStyleBody }>
                            <Text style={{
                                fontSize: 25,
                                marginHorizontal: 15,
                                color: COLORS.placeHolderColor,
                                fontWeight: "bold"
                            }}>
                                Address : {" "}
                            </Text>
                        { iShop.Address.line1 }, { " " }
                        { iShop.Address.line2 }, { " " }
                        { iShop.Address.line3 }
                        </Text>
                    </View>
                    {/* Shops */}
                    <View style={{ borderBottomColor: COLORS.hrLineColor , borderBottomWidth: 1, width: "95%", alignSelf: "center" }} />
                    <View style={ styles.productDetailsContainer }>
                        {/* Product-reviews-heading */}
                        <View style={ styles.productName }>
                            <Text style={ styles.textStyleTitle }>Market-Name:  { iShop.Market.marketName }</Text>
                        </View>
                    </View>
                    <View style={{ borderBottomColor: COLORS.hrLineColor , borderBottomWidth: 1, width: "95%", alignSelf: "center" }} />
                    <View style={ styles.productDetailsContainer }>
                        {/* Product-reviews-heading */}
                        <View style={ styles.productName }>
                            <Text style={ styles.textStyleTitle }>Products of { iShop.shopName }: </Text>
                        </View>
                    </View>
                    <View style={{ borderBottomColor: COLORS.hrLineColor , borderBottomWidth: 1, width: "95%", alignSelf: "center" }} />
                    <View style={ styles.reviewStyling }>
                        {/* Shop-card */}
                        { ( iShop.Product ) ? (
                            iShop.Product.map(( product )=>(
                                <TouchableOpacity
                                    key={ product.productId }
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
                                                    }}>{iShop.shopName}</Text>
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
                            ))
                        ) : (
                            <Text></Text>
                        )}
                    </View>
                </Container>
                ) : (
                    <Text></Text>
                ) }
                
            </ScrollView>
            {/* Product-price */}
            {/* Product-stock */}
            {/* Product-category/sub-category */}
            {/* Product-shop */}
            {/* <ProductCard 
                                    navigation={ navigation }
                                    product={ product }
                                    key={ product.productId }
                                /> */}
        </>
    )
};

export default ShopDetails;

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
        color: COLORS.primary,
        textAlign: "center",
        fontSize: 25,
        // margin: 2,
        padding: 2
    }
});
