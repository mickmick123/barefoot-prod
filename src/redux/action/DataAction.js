import {
  DATA_DETAILES_TYPE,
  USER_DETAILS,
  LIST_EVENTS,
  LIST_MARKERS,
} from '../actiontypes/DataTypes';

export const get_data_action = data => dispatch => {
  dispatch({type: DATA_DETAILES_TYPE, detailsStore: data});
};

export const user_data = data => dispatch => {
  console.log('user', data);
  dispatch({type: USER_DETAILS, userData: data});
};

export const list_events = data => dispatch => {
  dispatch({type: LIST_EVENTS, listEvents: data});
};

export const list_markers = data => dispatch => {
  dispatch({type: LIST_MARKERS, eventMarkers: data});
};
