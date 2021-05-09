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
import { urls } from "../constants";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import ProductDetails from './ProductDetails';
import { Product } from "../apis/";
import SearchBarWithFilter from '../components/SearchBarWithFilter';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Products = ({ navigation })=>{


    const [ flag, setFlag ] = useState();



    const [ products, setProducts ] = useState(null);

    const fetchProducts = ()=>{
        console.log("Inside fetch products");
		try{
			// Product.getAllProducts()
            // .then(( data )=>{
            //     console.log(data);
            //     setProducts( data );
            // console.log("Products", products);
            // })
            // .catch(( error )=>{
            //     console.log(error);
            // });
            axios.get( urls.GET_ALL_PRODUCTS )
            .then(( response )=>{
                console.log(response.data);
                setProducts( response.data );
                console.log("Product", products );
                // return response.data;
            })
            .then(( response )=>{
                return response.data;
            })
            .catch(( error )=>{
                return error;
            });
		} catch( error ){
			console.log(error);
		}
	};

    useEffect(()=>{
        fetchProducts();

        if( !flag ){
            console.log(".....................flag.............");
            AsyncStorage.removeItem("@CartProducts");
            AsyncStorage.removeItem("@User")
            setFlag( true );
        }
    }, []);

    const [ filterArea, setFilterArea] = useState("none");

    const changeFilterArea = ()=>{
        if( filterArea == "flex" )
            setFilterArea("none");
        else if( filterArea == "none" )
            setFilterArea("flex");
    };

    return (
        <>
            <ScrollView>
                <SearchBarWithFilter/>
                    <Container style={{
                        height: "auto"
                    }}>
                        { products ? (products.map( product =>(
                            <ProductCard
                                navigation={ navigation }
                                product={ product }
                                key={ product.productId }
                            />
                        ))) : (
                            <Text></Text>
                        )}
                    </Container>
            </ScrollView>
        </>
    )
};

export default Products;

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

/*
    AntDesign.ttf
    Entypo.ttf
    FontAwesome.ttf
    MaterialCommunityIcons.ttf
    MaterialIcons.ttf
*/
