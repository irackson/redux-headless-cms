import { setContent } from 'actions';
import { SET_CONTENT } from 'constants/action-types';

export const contentReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_CONTENT:
            const updatedState = { ...state };
            updatedState[action.payload.endpoint] = action.payload.data;
            return updatedState;
        default:
            return state;
    }
};

export const loadContent =
    ({ cmsBaseUrl, endpoint, resourceType = 'json' }) =>
    async (dispatch, getState) => {
        if (!getState().content[endpoint]) {
            let data = {};
            try {
                data = await fetch(
                    `${cmsBaseUrl}${endpoint}.${resourceType}`
                ).then((res) => res.json());
            } catch (error) {
                console.error(error.message);
            } finally {
                dispatch(setContent({ endpoint, data }));
            }
        }
    };
