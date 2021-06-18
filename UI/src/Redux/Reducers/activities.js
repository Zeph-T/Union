import {FETCH_EVENTS_SUCCESS, FETCH_NOTIFICATIONS_SUCCESS} from '../ActionTypes';

const activities = (state = {events:[],notifications :[]}, action) => {
  switch (action.type) {
    case FETCH_EVENTS_SUCCESS:
      return {...state, events: action.payload.events};
    case FETCH_NOTIFICATIONS_SUCCESS  :
      return {...state, notifications  : action.payload.notifications}
    default:
      return state;
  }
};

export default activities;