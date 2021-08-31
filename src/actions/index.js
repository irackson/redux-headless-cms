import { FETCH_VALID_ROUTES } from 'constants/action-types';

export const setRoutes = (apiInfo) => {
    return {
        type: FETCH_VALID_ROUTES,
        payload: apiInfo,
    };
};
