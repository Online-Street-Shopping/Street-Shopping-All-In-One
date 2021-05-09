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

const ProductDetails = ({ navigation, route })=>{

    console.log(route);

    console.log( "Details", route.params.market);

    const market = route.params.market;

    const [ shops, setShops ] = useState( null );

    const getAllShops = async()=>{
        await axios.get( urls.GET_SHOPS_BY_MARKET_ID + market.marketId )
        .then(( response )=>{
            setShops( response.data );
        })
        .catch(( error )=>{
            console.log( error );
        });
    };

    useEffect(()=>{
        getAllShops();
        console.log( shops );
    }, []);

    return (
        <>
            <ScrollView>
                <Container style={ styles.mainContainer }>
                    {/* Product Image */}
                    <Container style={ styles.imageContainer }>
                        <SliderBox
                            autoplay={ true } 
                            circleLoop={ true }  
                            images={[
                                market.marketImage
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
                            <Text style={ styles.textStyleTitle }>{ market.marketName }</Text>
                        </View>
                        {/* Product-rating */}
                        <View  style={ styles.productRating }>
                            <Text style={ styles.textStyleTitle }>
                                { market.rating } <AntDesign name="star" style={ styles.textStyleTitle } />
                            </Text>
                        </View>
                    </View>
                    <View style={{ borderBottomColor: COLORS.hrLineColor , borderBottomWidth: 1, width: "95%", alignSelf: "center" }} />
                    {/* Product-description */}
                    <View style={ styles.productDescription }>
                        <Text style={ styles.textStyleBody }>
                        { market.Address.line1 }, { " " }
                        { market.Address.line2 }, { " " }
                        { market.Address.line3 }
                        </Text>
                    </View>
                    {/* Shops */}
                    <View style={{ borderBottomColor: COLORS.hrLineColor , borderBottomWidth: 1, width: "95%", alignSelf: "center" }} />
                    <View style={ styles.productDetailsContainer }>
                        {/* Product-reviews-heading */}
                        <View style={ styles.productName }>
                            <Text style={ styles.textStyleTitle }>Shops from the { market.marketName }</Text>
                        </View>
                    </View>
                    <View style={{ borderBottomColor: COLORS.hrLineColor , borderBottomWidth: 1, width: "95%", alignSelf: "center" }} />
                    <View style={ styles.reviewStyling }>
                        {/* Shop-card */}
                        {
                            ( shops ) ? (
                                shops.map(( shop =>(
                                    <ShopCard
                                        navigation={ navigation }
                                        shop={ shop }
                                    />
                                )))
                            ) : (
                                <Text></Text>
                            )
                        }                        
                    </View>
                </Container>
            </ScrollView>
            {/* Product-price */}
            {/* Product-stock */}
            {/* Product-category/sub-category */}
            {/* Product-shop */}
        </>
    )
};

export default ProductDetails;

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
