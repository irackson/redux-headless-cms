import { setRoutes } from 'actions';
import { SET_ROUTES } from 'constants/action-types';
import { maintenanceEndpoint } from 'constants/urls';

const initialState = {
    maintenanceEndpoint: maintenanceEndpoint,
};

export const routesReducer = (state = initialState, action) => {
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
        let validRoutes = {};
        try {
            validRoutes = await fetch(`${cmsBaseUrl}${restDir}`).then((res) =>
                res.json()
            );
        } catch (error) {
            console.error(error.message);
            validRoutes[maintenanceEndpoint] = 'Maintenance';
        } finally {
            dispatch(setRoutes(validRoutes));
        }
    };
