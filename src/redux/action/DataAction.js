import {DATA_DETAILES_TYPE, USER_DETAILS} from '../actiontypes/DataTypes';

export const get_data_action = data => dispatch => {
  dispatch({type: DATA_DETAILES_TYPE, detailsStore: data});
};

export const user_data = data => dispatch => {
  console.log('user', data);
  dispatch({type: USER_DETAILS, userData: data});
};
