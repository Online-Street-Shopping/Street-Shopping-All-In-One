import React, { useEffect, useState } from 'react'
import {
    Button,
    Container, 
    Content,
    Form,
    H3,
    Input,
    Item,
    Text,
    Thumbnail,
    View
} from "native-base";
import { ScrollView, StatusBar, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { images, COLORS, urls } from "../constants";
import axios from 'axios';
import { User } from "../apis/";

const SignIn = ({ navigation })=>{

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ isSignedIn, setIsSignedIn ] = useState( false );
    const [ user, setUser ] = useState( null );

    const updateEmailIdValue = ()=>{
        console.log(email);
    };

    const updatePassword = ()=>{
        console.log(password);
    };

    useEffect(()=>{
        updateEmailIdValue();
        updatePassword();
    }, []);

    const doSignIn = async()=>{
        // try {
            await axios.post( urls.SIGNIN, { emailId: email, password: password } )
            .then(( response )=>{
                setIsSignedIn( true );
                setUser( response.data.response );
            })
            .catch(( error )=>{
                console.log( error );
            });
        if( isSignedIn ){
            await AsyncStorage.setItem("@User", JSON.stringify( user ))
            .then(( data )=> console.log( "then", data ))
            .catch(( error )=> console.log( error ));
            console.log( JSON.parse( await AsyncStorage.getItem("@User") ) );
            console.log(user.firstName);
            await alert( "Welcome, "+ user.firstName );
            navigation.navigate("Home");
        }
        
    };

    return (
        <>
            <Container style={ styles.container }>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <H3 style={ styles.heading }>
                        Welcome to Street-Shopping....
                    </H3>

                    <Image
                        source={ images.shopping }
                        // style={{ width: null, height: 150, marginTop: 30 }}
                        style={ styles.imageContainer }
                        resizeMode="contain"
                    />

                    <Form style={ styles.form }>
                        {/* EmailId */}
                        <Item regular style={ styles.formItem }>
                            <Input
                                placeholder="Email..."
                                value={ email }
                                onChangeText={ ( text )=>setEmail( text ) }
                                onChange={ updateEmailIdValue() }
                                style={ styles.inputText }
                                placeholderTextColor={ COLORS.placeHolderColor }
                                selectionColor={ COLORS.selectionColor }
                                // ToDO - for change text...
                            />
                        </Item
                        >
                        {/* Password */}
                        <Item regular style={ styles.formItem }>
                            <Input
                                placeholder="Password..."
                                value={ password }
                                onChangeText={ ( text )=>setPassword( text ) }
                                onChange={ updatePassword() }
                                secureTextEntry={ true }
                                style={ styles.inputText }
                                placeholderTextColor={ COLORS.placeHolderColor }
                                selectionColor={ COLORS.selectionColor }
                                // ToDO - for change text...
                            />
                        </Item>
                        {/* SignIp-Button */}
                        <Button regular block 
                        onPress={ doSignIn }
                        style={ styles.buttonColor }
                        >
                            <Text style={ styles.buttonText }>Sign-in</Text>
                        </Button>
                        <TouchableOpacity
                            // onPress={} //navigate to signup screen
                            style={{ marginTop: 10 }}
                        >
                            <Text
                                style={{ color: "#fff", textAlign: "center" }}
                            >
                                Do not have an account ?! Sign-up here...
                            </Text>
                        </TouchableOpacity>
                    </Form>
                </ScrollView>
            </Container>
        </>
    )
};

export default SignIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        justifyContent: "flex-start",
        alignSelf: "center"
    },
    imageContainer: {
        // alignItems: "center",
        // marginVertical: 5,
        // padding: 5
        width: null,
        height: 150,
        marginTop: 30,
        marginBottom: 20
    },
    progress: {
        width: null,
        marginBottom: 20
    },
    form: {
        padding: 15,
        margin: 15
    },
    formItem: {
        marginBottom: 20,
        padding: 5,
        borderRadius: 10,
        borderColor: COLORS.primary
    },
    buttonColor: {
        backgroundColor: COLORS.primary,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 20
    },
    heading: {
        color: "#00D84A",
        textAlign: "center",
        marginHorizontal: 5,
        marginTop: 20
    },
    inputText: {
        color: COLORS.primary,
    }
});
