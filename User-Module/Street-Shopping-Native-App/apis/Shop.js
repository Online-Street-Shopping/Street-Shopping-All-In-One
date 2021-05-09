import { urls } from "../constants/";
import axios from "axios";

const getAllShops = async()=>{
    axios.get( urls.GET_ALL_SHOPS )
    .then(( response )=>{
        return response.data;
    })
    .catch(( error )=>{
        return error;
    });
};

const getShopById = async( shopId )=>{
    axios.get( urls.GET_SHOP_BY_SHOP_ID + shopId )
    .then(( response )=>{
        return response.data;
    })
    .catch(( error )=>{
        return error;
    });
};

const getShopsWithProducts = async()=>{
    axios.get( urls.GET_ALL_SHOPS_WITH_PRODUCTS )
    .then(( response )=>{
        return response.data;
    })
    .catch(( error )=>{
        return error;
    });
};

const getShopWithProducts = async( shopId )=>{
    axios.get( urls.GET_A_SHOP_WITH_PRODUCT + shopId )
    .then(( response )=>{
        return response.data;
    })
    .catch(( error )=>{
        return error;
    });
};

// TODO
const getShopByProduct = async( productId )=>{
    axios.get( urls + shopId )
    .then(( response )=>{
        return response.data;
    })
    .catch(( error )=>{
        return error;
    });
};

const addShop = async( userId, addressId, shopKeeperName, shopName, video, images, marketId, subCategoryId, shopRating )=>{
    axios.post( urls.ADD_SHOP, {
        userId, addressId, shopKeeperName, shopName, video, images, marketId, subCategoryId, shopRating
    }).then(( response )=>{
        return response.data;
    })
    .catch(( error )=>{
        return error;
    });
};

const updateShop = async( shopId, userId, addressId, shopKeeperName, shopName, video, images, marketId, subCategoryId, shopRating )=>{
    axios.put( urls.UPDATE_SHOP + shopId, {
        userId, addressId, shopKeeperName, shopName, video, images, marketId, subCategoryId, shopRating
    }).then(( response )=>{
        return response.data;
    })
    .catch(( error )=>{
        return error;
    });
};

const deleteShop = async( shopId )=>{
    axios.delete( urls.DELETE_SHOP + shopId )
    .then(( response )=>{
        return response.data;
    })
    .catch(( error )=>{
        return error;
    });
};