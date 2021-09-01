import { useEffect } from 'react';
import { cmsBaseUrl } from 'constants/urls';

import { useDispatch, useSelector } from 'react-redux';
import { loadContent } from 'reducers/content';
// import Container from 'components/content/Container';
import ContentComponent from 'components/content/ContentComponent';
const DynamicRoute = (props) => {
    const endpoint = props.match.path;
    const routeTitle = useSelector(
        (state) => state.routes.validRoutes[endpoint]
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadContent({ cmsBaseUrl, endpoint }));
    }, [dispatch, endpoint]);

    const contents = useSelector((state) => state.content[endpoint]);

    return (
        <>
            <h1 style={{ color: 'blue' }}>{routeTitle}</h1>
            {contents
                ? contents.map((content, i) => (
                      <ContentComponent key={i} content={content} />
                  ))
                : null}
        </>
    );
};
export default DynamicRoute;
