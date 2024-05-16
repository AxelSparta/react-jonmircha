import { CRUD_TYPES } from "../actions/crudActions";

export const crudInitialState = {
  db: null,
};

export function crudReducer(state, action) {
  switch (action.type) {
    case CRUD_TYPES.READ_ALL_DATA: {
      return {
        ...state,
        db: action.payload.map((data) => data),
      };
    }
    case CRUD_TYPES.CREATE_DATA: {
    }
    case CRUD_TYPES.UPDATE_DATA: {
    }
    case CRUD_TYPES.DELETE_DATA: {
    }
    case CRUD_TYPES.READ_ONE_DATA: {
    }
    case CRUD_TYPES.NO_DATA: {
    }

    default:
      break;
  }
}
