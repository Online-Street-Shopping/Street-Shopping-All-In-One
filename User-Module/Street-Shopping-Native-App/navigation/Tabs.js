import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import ChangePassword from "../screens/ChangePassword";
import Profile from "../screens/Profile";
import ProductDetails from "../screens/ProductDetails";
import Products from "../screens/Products";

import { StyleSheet } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from "react-native-vector-icons/Entypo";
import { COLORS } from '../constants';
import MyHeader from '../layout/Header';
import ImageUploading from '../screens/ImageUploading';
import Cart from '../screens/Cart';
import Markets from "../screens/Markets";
import MarketDetails from "../screens/MarketDetails";
import ShopDetails from '../screens/ShopDetails';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeStack = createStackNavigator();

const HomeStackScreen = ()=>{
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <HomeStack.Screen
                name="Products" component={ Products }
            />
            <HomeStack.Screen
                name="ProductDetails" component={ ProductDetails }
            />
        </HomeStack.Navigator>
    );
};

const MarketStack = createStackNavigator();

const MarketStackScreen = ()=>{
    return (
        <MarketStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <MarketStack.Screen
                name="Market" component={ Markets }
            />
            <MarketStack.Screen
                name="MarketDetails" component={ MarketDetails }
            />
            <MarketStack.Screen
                name="ShopDetails" component={ ShopDetails }
            />
        </MarketStack.Navigator>
    );
};

const AuthStack = createStackNavigator();

const AuthStackScreen = ()=>{
    return (
        <AuthStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            {/* <AuthStack.Screen
                name="SignIn" component={ SignIn }
            /> */}
            { (AsyncStorage.getItem("@User") ) ? (
                <AuthStack.Screen
                name="Profile" component={ Profile }
            />
            ) : ( <AuthStack.Screen
                name="SignIn" component={ SignIn }
            /> ) }
            
        </AuthStack.Navigator>
    );
};

const Tab = createBottomTabNavigator();

const Tabs = ()=>{
    return (
        <NavigationContainer>
            {/* <Stack.Navigator
                screenOptions={{
                    header: ()=><MyHeader />
                }}
            >
                <Stack.Screen name="Home" component={Products} />
            </Stack.Navigator> */}
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: COLORS.primary,
                    activeBackgroundColor: COLORS.tabSelectionColor,
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={ HomeStackScreen }
                    options={{
                        tabBarLabel: "Home",
                        tabBarIcon: ()=>(
                            <AntDesign
                                name="home"
                                style={ styles.tabIcon }
                                size={30}
                                color={ COLORS.primary }
                            />
                        ),
                        tabBarBadge: 3,
                    }}
                />
                <Tab.Screen
                    name="ImageUploading"
                    component={ MarketStackScreen }
                    options={{
                        tabBarLabel:"Markets",
                        tabBarIcon: ()=>(
                            <Entypo
                                name="shop"
                                style={ styles.tabIcon }
                                size={30}
                                color={ COLORS.primary }
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name="Cart"
                    component={ Cart }
                    style={ styles.tab }
                    options={{
                        tabBarLabel:"Cart",
                        tabBarIcon: ()=>(
                            <Entypo
                                name="shopping-cart"
                                size={30}
                                color={ COLORS.primary }
                                style={ styles.tabIcon }
                            />
                        ),
                        tabBarBadge: 5
                    }}
                />
                <Tab.Screen
                    name="EditProfile"
                    component={ AuthStackScreen }
                    options={{
                        tabBarLabel:"Profile",
                        tabBarIcon: ()=>(
                            <AntDesign
                                name="meh"
                                style={ styles.tabIcon }
                                size={30}
                                color={ COLORS.primary }
                            />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
};

export default Tabs;

const styles = StyleSheet.create({
    tabIcon: {
        textAlign: "center",
        color: COLORS.primary
        // backgroundColor: COLORS.selectionColor
    },
    tab: {
        color: COLORS.primary
    }
});
