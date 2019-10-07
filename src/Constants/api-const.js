const LOCAL = 'http://localhost:8080/';
// const PUBLIC = null;
const BASE_URL = LOCAL;

export const API_MOVIES_FIND    = BASE_URL + 'movie/find/';
export const API_MOVIE_GET      = BASE_URL + 'movie/get/';
export const API_MOVIE_CREATE   = BASE_URL + 'movie/create';
export const API_MOVIE_UPDATE   = BASE_URL + 'movie/update/';
export const API_MOVIE_DELETE   = BASE_URL + 'movie/delete/';

export const API_USER_GET       = BASE_URL + 'user/get/';
export const API_USER_REVIEWS   = BASE_URL + 'user/getReviews/';
export const API_USER_CREATE    = BASE_URL + 'user/create';
export const API_USER_UPDATE    = BASE_URL + 'user/update/';
export const API_USER_DELETE    = BASE_URL + 'user/delete/';

export const API_REVIEW_GET     = BASE_URL + 'review/get/';
export const API_REVIEW_CREATE  = BASE_URL + 'review/create';
export const API_REVIEW_UPDATE  = BASE_URL + 'review/update/';
export const API_REVIEW_DELETE  = BASE_URL + 'review/delete/';