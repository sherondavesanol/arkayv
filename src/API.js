const token = localStorage.getItem('token');

const SERVER_URL = 'https://arkayv-api.herokuapp.com';
const BASE_URL_ADMIN = SERVER_URL + '/api/admin';
const BASE_URL_ORDERS = SERVER_URL + '/api/orders';
const BASE_URL_PRODUCTS = SERVER_URL + '/api/products';
const BASE_URL_USERS = SERVER_URL + '/api/users';

export const CHECK_EMAIL_URL = BASE_URL_USERS + '/check-email';
export const SIGNUP_URL = BASE_URL_USERS + '/register';
export const LOGIN_URL = BASE_URL_USERS + '/login';
export const GET_USER_DETAILS = BASE_URL_USERS + '/user-details';

export const CREATE_PRODUCT_URL = BASE_URL_PRODUCTS + '/create-product';
export const GET_ALL_PRODUCTS_URL = BASE_URL_PRODUCTS + '/get-all-products';
export const GET_ACTIVE_PRODUCTS_URL = BASE_URL_PRODUCTS + '/get-active-products';
export const VIEW_PRODUCT_URL = BASE_URL_PRODUCTS + '/view-product';
export const ARCHIVE_PRODUCT_URL = BASE_URL_PRODUCTS + '/archive-product';
export const RESTORE_PRODUCT_URL = BASE_URL_PRODUCTS + '/restore-product';
export const UPDATE_PRODUCT_URL = BASE_URL_PRODUCTS + '/update-product';
export const DELETE_PRODUCT_URL = BASE_URL_PRODUCTS + '/delete-product';

export const VIEW_CART_URL = BASE_URL_ORDERS + '/view-cart';
export const VIEW_WISHLIST_URL = BASE_URL_ORDERS + '/view-wishlist';

export const defaultOptions = {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
};