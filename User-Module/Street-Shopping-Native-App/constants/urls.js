const BASE_URL = "https://street-shopping-2.herokuapp.com/api";

const SIGNIN = BASE_URL + "/signin";
const SIGNUP = BASE_URL + "/signup";
const SIGNOUT = BASE_URL + "/signout";
const UPDATE_USER_DETAILS = BASE_URL + "/user/";
const UPDATE_PROFILE_PICTURE = BASE_URL + "/user/image/";
const UPDATE_PASSWORD = BASE_URL + "/user/password/"; // -- user/update-password/
const GET_USER_BY_ID = BASE_URL + "/user/details/";
const GET_USER_BY_EMAIL_ID = BASE_URL + "/user/details/email/";
const GET_ALL_ADMINS = BASE_URL + "/user/admins";
const GET_ALL_USERS = BASE_URL + "/user/users";
const GET_ALL_VENDORS = BASE_URL + "/user/vendors";
const GET_ALL_DELIVERY_BOYS = BASE_URL + "/user/delivery-boys";

const ADD_MARKET = BASE_URL + "/market";
const UPDATE_MARKET = BASE_URL + "/market/";
const DELETE_MARKET = BASE_URL + "/market/";
const GET_ALL_MARKET = BASE_URL + "/market";

const ADD_PRODUCT = BASE_URL + "/product";
const UPDATE_PRODUCT = BASE_URL + "/product/";
const DELETE_PRODUCTS = BASE_URL + "/products/";
const GET_ALL_PRODUCTS = BASE_URL + "/products/shops";
const GET_PRODUCT_BY_PRODUCT_ID = BASE_URL + "/products/";
const GET_PRODUCT_BY_SHOP_ID = BASE_URL + "/product/shop/";
const GET_PRODUCT_BY_CATEGORY = BASE_URL + "/product/category/";

const GET_SHOP_BY_SHOP_ID = BASE_URL + "/shop/";
const GET_SHOPS_BY_MARKET_ID = BASE_URL + "/shop/market/";
const GET_ALL_SHOPS = BASE_URL + "/shops";
const GET_ALL_SHOPS_WITH_PRODUCTS = BASE_URL + "/shops/products/";
const GET_A_SHOP_WITH_PRODUCT = BASE_URL + "/shop/product/";
const ADD_SHOP = BASE_URL + "/shop";
const UPDATE_SHOP = BASE_URL + "/shop/";
const DELETE_SHOP = BASE_URL + "/shop/";

const ADD_ORDER = BASE_URL + "/order";
const GET_ALL_ORDERS = BASE_URL + "/orders";
const UPDATE_ORDER_STATUS = BASE_URL + "/order/";

const GET_ALL_DELIVERY_BY_USER_ID = BASE_URL + "/delivery/user/";
const GET_ALL_DELIVERY_BY_DELIVERY_ID = BASE_URL + "/delivery/";
const GET_ALL_DELIVERIES = BASE_URL + "/deliveries";

const GET_ALL_ADDRESSES = BASE_URL + "/addresses";
const GET_ADDRESSES_WITH_USER = BASE_URL + "/address/user";
const UPDATE_ADDRESS = BASE_URL + "/address/";
const ADD_ADDRESS = BASE_URL  + "/address";
const DELETE_ADDRESS = BASE_URL + "/address/";

export default {
    // base-url
    BASE_URL,

    // User-related APIs
    SIGNIN, SIGNUP, SIGNOUT, UPDATE_USER_DETAILS, UPDATE_PASSWORD,
    UPDATE_PROFILE_PICTURE, GET_USER_BY_ID, GET_USER_BY_EMAIL_ID,
    GET_ALL_ADMINS, GET_ALL_VENDORS, GET_ALL_DELIVERY_BOYS, GET_ALL_USERS,

    // Market related APIs
    ADD_MARKET, UPDATE_MARKET, GET_ALL_MARKET, DELETE_MARKET,

    // Product-related APIs
    ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCTS, GET_ALL_PRODUCTS,
    GET_PRODUCT_BY_CATEGORY, GET_PRODUCT_BY_PRODUCT_ID, GET_PRODUCT_BY_SHOP_ID,

    // Shop-related APIs
    GET_SHOP_BY_SHOP_ID, GET_ALL_SHOPS, GET_ALL_SHOPS_WITH_PRODUCTS,
    GET_A_SHOP_WITH_PRODUCT, ADD_SHOP, UPDATE_SHOP, DELETE_SHOP, GET_SHOPS_BY_MARKET_ID,

    // Order related APIs...
    ADD_ORDER, UPDATE_ORDER_STATUS, GET_ALL_ORDERS,

    // Delivery-related APIs...
    GET_ALL_DELIVERY_BY_USER_ID, GET_ALL_DELIVERY_BY_DELIVERY_ID,
    GET_ALL_DELIVERIES,

    // Address related APIs...
    GET_ALL_ADDRESSES, GET_ADDRESSES_WITH_USER, UPDATE_ADDRESS,
    ADD_ADDRESS, DELETE_ADDRESS
};