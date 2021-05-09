import { urls } from "../constants";
import axios from "axios";

const getAllProducts = async()=>{
    axios.get( urls.GET_ALL_PRODUCTS )
    .then(( response )=>{
        console.log(response.data);
        // return response.data;
    })
    .then(( response )=>{
        return response.data;
    })
    .catch(( error )=>{
        return error;
    });
};

const getProductById = async( productId )=>{
    axios.get( urls.GET_PRODUCT_BY_PRODUCT_ID + productId )
    .then(( response )=>{
        return response.data;
    })
    .catch(( error )=>{
        return error;
    });
};

const getProductByShop = async( shopId )=>{
    axios.get( urls.GET_PRODUCT_BY_SHOP_ID + shopId )
    .then(( response )=>{
        return response.data;
    })
    .catch(( error )=>{
        return error;
    });
};

const getProductByCategory = async( categoryId )=>{
    axios.get( urls.GET_PRODUCT_BY_CATEGORY + categoryId )
    .then(( response )=>{
        return response.data;
    })
    .catch(( error )=>{
        return error;
    });
};

const addProduct = async( shopId, productName, description, price, stock, subCategoryId )=>{
    axios.post( urls.ADD_PRODUCT, {
        shopId, productName, description, price, stock, subCategoryId
    }).then(( response )=>{
        return response.data;
    }).catch(( error )=>{
        return error;
    });
};

const updateProduct = async( productId, shopId, productName, description, price, stock, subCategoryId )=>{
    axios.put( urls.UPDATE_PRODUCT + productId, {
        shopId, productName, description, price, stock, subCategoryId
    }).then(( response )=>{
        return response.data;
    }).catch(( error )=>{
        return error;
    });
};

const deleteProduct = async( productId )=>{
    axios.delete( urls.DELETE_PRODUCTS + productId )
    .then(( response )=>{
        return response.data;
    })
    .catch(( error )=>{
        return error;
    });
};

export default{
    getAllProducts,
    getProductByCategory
};