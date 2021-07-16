const BASE_URL = `http://192.168.0.101:8000`;

export const LOGIN_URL = BASE_URL+'/auth/login';
export const ADMIN_LOGIN_URL = BASE_URL+'/auth/adminLogin';
export const SIGNUP_URL  = BASE_URL  +'/auth/signup';
export const NOTIFICATIONS_URL = BASE_URL + '/api/getMyNotifications';
export const EVENTS_URL = BASE_URL + '/api/getEvents';
export const CLUB_DATA = BASE_URL  + '/api/getClubData';
export const ADD_EVENT = BASE_URL + '/api/addEvent'