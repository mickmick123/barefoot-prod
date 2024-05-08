import {DATA_DETAILES_TYPE, USER_DETAILS} from '../actiontypes/DataTypes';
const initialState = {
  detailsStore: [],
  userData: {},
};
export default function DataReducer(state = initialState, action) {
  switch (action.type) {
    case DATA_DETAILES_TYPE:
      return {
        ...state,
        detailsStore: action.detailsStore,
      };
    case USER_DETAILS:
      return {
        ...state,
        userData: action.userData,
      };

    default: {
      return state;
    }
  }
}
