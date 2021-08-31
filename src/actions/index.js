import { SET_ROUTES } from 'constants/action-types';

export const setRoutes = (apiInfo) => {
    return {
        type: SET_ROUTES,
        payload: apiInfo,
    };
};
