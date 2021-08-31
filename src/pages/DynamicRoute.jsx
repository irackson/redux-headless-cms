import { useEffect } from 'react';
import { cmsBaseUrl } from 'constants/urls';

import { useDispatch, useSelector } from 'react-redux';
import { loadContent } from 'reducers/content';
import Container from 'components/content/Container';
const DynamicRoute = (props) => {
    const endpoint = props.match.path;
    const routeTitle = useSelector(
        (state) => state.routes.validRoutes[endpoint]
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadContent({ cmsBaseUrl, endpoint }));
    }, [dispatch, endpoint]);

    const content = useSelector((state) => state.content[endpoint]);

    return (
        <div>
            <h1 style={{ color: 'red' }}>{routeTitle}</h1>
            {content
                ? content.map((item, i) => (
                      <Container
                          key={i}
                          items={item.items ?? [item]}
                          className={item.className}
                          flexDirection={item.flexDirection}
                          flexWrap={item.flexWrap}
                          justifyContent={item.justifyContent}
                          alignItems={item.alignItems}
                          width={item.width}
                      />
                  ))
                : null}
        </div>
    );
};
export default DynamicRoute;
