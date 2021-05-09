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
import { Product } from "../apis/";

export default function SearchBarWithFilter() {

    const [ filterArea, setFilterArea] = useState("none");

    const changeFilterArea = ()=>{
        if( filterArea == "flex" )
            setFilterArea("none");
        else if( filterArea == "none" )
            setFilterArea("flex");
    };

    return (
        <>
            <Container style={ styles.searchBarContainer }>
                <View style={{
                    width: "15%",
                }}>
                    <FontAwesome
                        name="search"
                        style={{
                            textAlign: "center",
                            color: "white",
                            fontSize: 28,
                            marginLeft: 10,
                            marginTop: 20,
                        }}
                    />
                </View>
                <View style={{
                    width: "70%"
                }}>
                    <Form>
                        <Item>
                            <Input
                                placeholder="Seach here...."
                                placeholderTextColor="white"
                                style={{
                                    fontSize: 25,
                                    marginTop: 10
                                }}
                                clearTextOnFocus
                                selectionColor={ COLORS.lightTheme }
                            />
                        </Item>
                    </Form>
                </View>
                <View style={{
                    width: "15%"
                }}>
                    <TouchableOpacity
                        onPress={
                            ()=>{changeFilterArea()}
                        }
                    >
                        <MaterialCommunityIcons
                            name="filter-menu"
                            style={{
                                textAlign: "center",
                                color: "white",
                                fontSize: 30,
                                marginTop: 20,
                                marginRight: 10
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </Container>
            {/* for Filter options... */}
            <Container style={{
                flex: 0.1,
                backgroundColor: COLORS.primaryShade,
                height: "auto",
                display: filterArea,
            }}>
                <View style={{
                    height: "auto",
                    flexDirection: "row",
                    flexWrap: "wrap"
                }}>
                    <Text style={ styles.filterAreaTextTitle }>Category : </Text>
                    <TouchableOpacity>
                        <Text style={ styles.filterAreaTextBody }> Cloths </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={ styles.filterAreaTextBody }> Electronics </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={ styles.filterAreaTextBody }> Kids </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={ styles.filterAreaTextBody }> Ladies </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={ styles.filterAreaTextBody }> Mens </Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    height: "auto",
                    // backgroundColor: "green",
                    flexDirection: "row",
                    flexWrap: "wrap"
                }}>
                    <Text style={ styles.filterAreaTextTitle }>Shops : </Text>
                    <TouchableOpacity>
                        <Text style={ styles.filterAreaTextBody }> John Doe and Co. </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={ styles.filterAreaTextBody }> Raj Emporiem </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={ styles.filterAreaTextBody }> Anupan Saris </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={ styles.filterAreaTextBody }> Raymond Enterprise </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={ styles.filterAreaTextBody }> SakarVala Stores </Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    height: "auto",
                    // backgroundColor: "green",
                    flexDirection: "row",
                    flexWrap: "wrap"
                }}>
                    <Text style={ styles.filterAreaTextTitle }>Price : </Text>
                    <TouchableOpacity>
                        <Text style={ styles.filterAreaTextBody }> 2000-3000 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={ styles.filterAreaTextBody }> 0-1000 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={ styles.filterAreaTextBody }> 3000-5000 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={ styles.filterAreaTextBody }> 5000-7000 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={ styles.filterAreaTextBody }> 7000-10000 </Text>
                    </TouchableOpacity>
                </View>
            </Container>  
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