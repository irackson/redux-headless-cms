import { SET_ROUTES, SET_CONTENT } from 'constants/action-types';

export const setRoutes = (apiInfo) => {
    return {
        type: SET_ROUTES,
        payload: apiInfo,
    };
};

export const setContent = ({ endpoint, data }) => {
    return {
        type: SET_CONTENT,
        payload: { endpoint, data },
    };
};
