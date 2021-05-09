import { urls } from "../constants/";
import axios from "axios";

const getAllMarkets = async()=>{
    axios.get( urls.GET_ALL_MARKET )
    .then(( response )=>{
        return response.data;
    })
    .catch(( error )=>{
        return error;
    });
};

const addMarket = async( addressId, marketName, rating, marketImage, marketVideo )=>{
    axios.post( urls.ADD_MARKET, {
        addressId, marketName, rating, marketImage, marketVideo
    }).then(( response )=>{
        return response.data;
    }).catch(( error )=>{
        return error;
    });
};

const updateMarket = async( marketId, addressId, marketName, rating, marketImage, marketVideo )=>{
    axios.put( urls.UPDATE_MARKET + marketId, {
        addressId, marketName, rating, marketImage, marketVideo
    }).then(( response )=>{
        return response.data;
    }).catch(( error )=>{
        return error;
    });
        
};

const deleteMarket = async( marketId )=>{
    axios.delete( urls.DELETE_MARKET + marketId )
    .then(( response )=>{
        return response.data;
    })
    .catch(( error )=>{
        return error;
    });
};