import { maintenanceEndpoint } from 'constants/urls';
import { FETCH_VALID_ROUTES } from 'constants/action-types';
import { getRoutes } from 'utils/api';

const initialState = {
    maintenanceEndpoint: maintenanceEndpoint,
};

export const routeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_VALID_ROUTES:
            return { ...state, validRoutes: getRoutes(action.payload) };
        default:
            return state;
    }
};
