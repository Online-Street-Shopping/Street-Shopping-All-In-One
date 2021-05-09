import React from 'react'
import { StyleSheet, TouchableOpacity } from "react-native";
import {
    Body,
    Button,
    Header,
    Left,
    Right,
    Text,
    Title
} from "native-base";
import { COLORS } from "../constants/index";
import AntDesign from 'react-native-vector-icons/AntDesign';

const MyHeader = ()=>{
    return (
        <Header
            androidStatusBarColor={ COLORS.primary }
            style={ styles.header }
        >
            <Text style={ styles.headerText }>
                <AntDesign
                    name="shoppingcart"
                    style={ styles.iconStyling }
                />
            </Text>
            <Text style={ styles.headerText }>
                { "Street-Shopping" }
            </Text>
            <Right>
                <TouchableOpacity>
                    <Text style={ styles.headerRightText }>
                        <AntDesign
                            name="meh"
                            style={ styles.iconStyling }
                        />
                    </Text>
                </TouchableOpacity>
            </Right>
        </Header>
    )
};

export default MyHeader;

const styles = StyleSheet.create({
    header: {
        backgroundColor: COLORS.primary,
        height: 80
    },
    iconStyling: {
        color: "white",
        fontSize: 30,
    },
    headerText: {
        fontSize: 23,
        alignSelf: "center",
        color: "white",
        margin: 5,
    },
    headerRightText: {
        color: "white",
        padding: 10
    },
});
