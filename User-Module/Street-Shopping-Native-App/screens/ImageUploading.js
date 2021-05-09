import React from 'react'
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import database from "@react-native-firebase/database";
import { Button, Text } from 'native-base';
import ProgressBar from "react-native-progress/Bar";
import { requestPermissions } from '../Utils/AskPermissions';
import { options } from '../Utils/Options';

export default function ImageUploading() {

    const [ imageUploading, setImageUploading ] = useState( false );
    const [ image, setImage ] = useState( null );
    const [ uploadStatus, setUploadStatus ] = useState( null );

    const chooseImage = async()=>{
        // requestPermissions();
        console.log("-------Choosing image....");

        launchImageLibrary( options, ( response )=>{
            console.log( "Response...ImagePicker", response );

            if( response.didCancel ){
                console.log( "user calcelled Image picker..." );
            } else if( response.error ){
                console.log( "Image Picker error: ", response.error );
            } else if( response.customButton ){
                console.log( "User taps custome button ", response.customButton );
            } else{
                console.log( response );
                console.log("-------Choosing image succesfuly done....");
                uploadImage( response );
            }
        });


        // ImagePicker.showImagePicker( options, ( response )=>{
        //     console.log( "Response...ImagePicker", response );

        //     if( response.didCancel ){
        //         console.log( "user calcelled Image picker..." );
        //     } else if( response.error ){
        //         console.log( "Image Picker error: ", response.error );
        //     } else if( response.customButton ){
        //         console.log( "User taps custome button ", response.customButton );
        //     } else{
        //         console.log( response );
        //         uploadImage( response );
        //     }
        // });
    };

    const uploadImage = async( response )=>{
        console.log("---------Image uploading startrd.....");
        setImageUploading( true );

        const reference = storage().ref( response.fileName );
        const task = reference.putFile( response.uri );

        task.on( "state_changed", ( takeSnapShot )=>{
            console.log("-------From On state changed...");
            const percentage = ( takeSnapShot.bytesTransferred / takeSnapShot.totalBytes ) * 1000;
            setUploadStatus( percentage );
        });

        task.then( async()=>{
            console.log("-------From On task.then ...");
            const url = await reference.getDownloadURL();

            setImage( url );
            console.log( image );
            console.log("------------url-----------");
            console.log(url);

            setImageUploading( false );
        });

        task.catch(( error )=>{
            console.error( error );
        });

        console.log("---------------Immage uploading completed..........");
    };

    return (
        <>
            { imageUploading 
            ?(
               <ProgressBar progress={ uploadStatus } />
            )
            :(
                <Button
                    regular
                    bordered
                    block
                    iconLeft
                    info
                    onPress={ chooseImage }
                >
                    <Text> Choose Image</Text>
                </Button>
            )
            }
        </>
    )
}
