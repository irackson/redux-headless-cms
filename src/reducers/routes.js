import { maintenanceEndpoint } from 'constants/urls';
import { SET_ROUTES } from 'constants/action-types';
import { setRoutes } from 'actions';

const initialState = {
    maintenanceEndpoint: maintenanceEndpoint,
};

export const routeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ROUTES:
            return { ...state, validRoutes: action.payload };
        default:
            return state;
    }
};

export const loadRoutes =
    ({ cmsBaseUrl, restDir }) =>
    async (dispatch, _) => {
        const validRoutes = await fetch(`${cmsBaseUrl}${restDir}`).then((res) =>
            res.json()
        );
        dispatch(setRoutes(validRoutes));
    };
