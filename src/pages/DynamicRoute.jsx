import { useEffect } from 'react';
import { cmsBaseUrl } from 'constants/urls';

import { useDispatch, useSelector } from 'react-redux';
import { loadContent } from 'reducers/content';
const DynamicRoute = (props) => {
    const endpoint = props.match.path;
    const routeTitle = useSelector(
        (state) => state.routes.validRoutes[endpoint]
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadContent({ cmsBaseUrl, endpoint }));
    }, [dispatch]);

    const content = useSelector((state) => state.content[endpoint]);

    return (
        <div>
            {routeTitle}
            <div>{JSON.stringify(content)}</div>
        </div>
    );
};
export default DynamicRoute;
