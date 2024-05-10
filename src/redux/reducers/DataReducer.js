import {
  DATA_DETAILES_TYPE,
  USER_DETAILS,
  LIST_EVENTS,
  LIST_MARKERS,
} from '../actiontypes/DataTypes';
const initialState = {
  detailsStore: [],
  userData: {},
  listEvents: [],
  eventMarkers: [],
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
    case LIST_EVENTS:
      return {
        ...state,
        listEvents: action.listEvents,
      };
    case LIST_MARKERS:
      return {
        ...state,
        eventMarkers: action.eventMarkers,
      };
    default: {
      return state;
    }
  }
}
