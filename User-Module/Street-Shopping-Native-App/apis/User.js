import { urls } from "../constants";
import axios from 'axios';
import AsyncStorage from "@react-native-community/async-storage";

const signIn = async( emailId, password )=>{
    axios.post( urls.SIGNIN, { 
        emailId, password })
    .then(( response )=>{
        console.log( response );
        console.log("---------------------------------------------");
        // getUserByEmailId( emailId );
    })
    .catch(( error )=>{
        console.log( error );
    });
    console.log("From do-signin...end");
};

const signUp = async( firstName, lastName, emailId, password, contactNo )=>{
    axios.post( urls.SIGNUP, {
            firstName, lastName, emailId, password, contactNo
        }).then(( response )=>{
            console.log( response.data );
            AsyncStorage.setItem("user", response.data );
            return response.data;
        }).catch(( error )=>{
            console.log(error);
            return error;
        });
};

const signOut = async()=>{
    axios.get( urls.SIGNOUT )
    .then(( response )=>{
        AsyncStorage.removeItem("user")
        .then(( response )=>{
            console.log("User-Signout succecfuly !!!");
            return response;
        })
        .catch(( error )=>{
            console.log("Error while signout !!!");
            return error;
        });
    })
    .catch(( error )=>{
        console.log("Error while signout !!!");
        return error;
    })
};

const getUserByEmailId = async( emailId )=>{
    let { response } = axios.get( url )
        .then(( response )=>{
            console.log(response);
            console.log("---------------2---");
            console.log(response.data);
            AsyncStorage.setItem("user", response.data);
            console.log( AsyncStorage.getItem("user"));
            return response.data;
        })
        .catch(( error )=>{
            console.log(error);
        });
};

const getAllVendors = async()=>{
    axios.get( urls.GET_ALL_VENDORS )
    .then(( response )=>{
        return response.data;
    })
    .catch(( error )=>{
        return error;
    });
};

const getAllDeliveryBoys = async()=>{
    axios.get( urls.GET_ALL_DELIVERY_BOYS )
    .then(( response )=>{
        return response.data;
    })
    .catch(( error )=>{
        return error;
    });
};

export default{
    signIn,
    signUp,
    signOut,
    getAllVendors, 
    getAllDeliveryBoys,
    getUserByEmailId
};