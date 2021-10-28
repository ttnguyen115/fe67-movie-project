export const actionTypes = {
  FETCH_CAROUSEL_REQUEST: "FETCH_CAROUSEL_REQUEST",
  FETCH_CAROUSEL_SUCCESS: "FETCH_CAROUSEL_SUCCESS",
  FETCH_CAROUSEL_FAILURE: "FETCH_CAROUSEL_FAILURE",

  FETCH_MOVIES_REQUEST: "FETCH_MOVIES_REQUEST",
  FETCH_MOVIES_SUCCESS: "FETCH_MOVIES_SUCCESS",
  FETCH_MOVIES_FAILURE: "FETCH_MOVIES_FAILURE",

  FETCH_CINEMA_REQUEST: "FETCH_CINEMA_REQUEST",
  FETCH_CINEMA_SUCCESS: "FETCH_CINEMA_SUCCESS",
  FETCH_CINEMA_FAILURE: "FETCH_CINEMA_FAILURE",

  FETCH_CINEMA_TIMES_REQUEST: "FETCH_CINEMA_TIMES_REQUEST",
  FETCH_CINEMA_TIMES_SUCCESS: "FETCH_CINEMA_TIMES_SUCCESS",
  FETCH_CINEMA_TIMES_FAILURE: "FETCH_CINEMA_TIMES_FAILURE",

  FETCH_MOVIE_REQUEST: "FETCH_MOVIE_REQUEST",
  FETCH_MOVIE_SUCCESS: "FETCH_MOVIE_SUCCESS",
  FETCH_MOVIE_FAIL: "FETCH_MOVIE_FAIL",

  FETCH_SHOWTIME_REQUEST: "FETCH_SHOWTIME_REQUEST",
  FETCH_SHOWTIME_SUCCESS: "FETCH_SHOWTIME_SUCCESS",
  FETCH_SHOWTIME_FAIL: "FETCH_SHOWTIME_FAIL",

  POST_BOOK_TICKET_REQUEST: "POST_BOOK_TICKET_REQUEST",
  POST_BOOK_TICKET_SUCCESS: "POST_BOOK_TICKET_SUCCESS",
  POST_BOOK_TICKET_FAIL: "POST_BOOK_TICKET_FAIL",

  //
  BOOKING_TICKET: "BOOKING_TICKET",
};

export const authTypes = {
  SIGN_IN_REQUEST: 'SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
  SIGN_IN_FAIL: 'SIGN_IN_FAIL',

  SIGN_UP_REQUEST: 'SIGN_UP_REQUEST',
  SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
  SIGN_UP_FAIL: 'SIGN_UP_FAIL',

  REFRESH_TOKEN_REQUEST: 'REFRESH_TOKEN_REQUEST',
  REFRESH_TOKEN_SUCCESS: 'REFRESH_TOKEN_SUCCESS',
  REFRESH_TOKEN_FAIL: 'REFRESH_TOKEN_FAIL',
  
  EDIT_USER_REQUEST: 'EDIT_USER_REQUEST',
  EDIT_USER_SUCCESS: 'EDIT_USER_SUCCESS',
  EDIT_USER_FAIL: 'EDIT_USER_FAIL',
}

export const adminTypes = {
  IS_ADMIN: "IS_ADMIN",
  IS_OPEN_SIDEBAR: "IS_OPEN_SIDEBAR",
  CLEAR_FORM: 'CLEAR_FORM',

  ADMIN_GET_MOVIES_REQUEST: 'ADMIN_GET_MOVIES_REQUEST',
  ADMIN_GET_MOVIES_SUCCESS: 'ADMIN_GET_MOVIES_SUCCESS',
  ADMIN_GET_MOVIES_FAILURE: 'ADMIN_GET_MOVIES_FAILURE',
  
  ADMIN_GET_MOVIE_BY_ID_REQUEST: 'ADMIN_GET_MOVIE_BY_ID_REQUEST',
  ADMIN_GET_MOVIE_BY_ID_SUCCESS: 'ADMIN_GET_MOVIE_BY_ID_SUCCESS',
  ADMIN_GET_MOVIE_BY_ID_FAILURE: 'ADMIN_GET_MOVIE_BY_ID_FAILURE',
  
  ADMIN_ADD_MOVIE_REQUEST: 'ADMIN_ADD_MOVIE_REQUEST',
  ADMIN_ADD_MOVIE_SUCCESS: 'ADMIN_ADD_MOVIE_SUCCESS',
  ADMIN_ADD_MOVIE_FAILURE: 'ADMIN_ADD_MOVIE_FAILURE',
  
  ADMIN_EDIT_MOVIE_REQUEST: 'ADMIN_EDIT_MOVIE_REQUEST',
  ADMIN_EDIT_MOVIE_SUCCESS: 'ADMIN_EDIT_MOVIE_SUCCESS',
  ADMIN_EDIT_MOVIE_FAILURE: 'ADMIN_EDIT_MOVIE_FAILURE',
  
  ADMIN_DELETE_MOVIE_REQUEST: 'ADMIN_DELETE_MOVIE_REQUEST',
  ADMIN_DELETE_MOVIE_SUCCESS: 'ADMIN_DELETE_MOVIE_SUCCESS',
  ADMIN_DELETE_MOVIE_FAILURE: 'ADMIN_DELETE_MOVIE_FAILURE',
}