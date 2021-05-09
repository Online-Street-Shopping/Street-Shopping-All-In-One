import { PermissionsAndroid, ToastAndroid } from 'react-native';

export const requestPermissions = async()=>{
    try{
        const granted = await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
        ]);

        console.log(granted);

        if(
            granted[ "PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE"] === "denied"
        ){
            ToastAndroid.show( "We cannot process without permissions !!", ToastAndroid.LONG );

            requestPermissions();
        }
    } catch( error ){
        console.log( error );
    }
};