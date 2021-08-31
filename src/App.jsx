import { Redirect, Route, Switch, useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import 'App.scss';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import Landing from 'pages/Landing';
import { cmsBaseUrl, maintenanceEndpoint, restDir } from 'constants/urls';
import { useEffect } from 'react';
import { loadRoutes } from 'reducers/routes';
import Maintenance from 'pages/Maintenance';

function App() {
    const history = useHistory();

    const routes = useSelector((state) => state.routes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadRoutes({ cmsBaseUrl, restDir }));
    }, [dispatch]);

    const loaded = () => {
        if (routes.validRoutes[maintenanceEndpoint]) {
            return <Maintenance />;
        } else {
            return (
                <div className="App">
                    <Header />
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={(props) => <Landing {...props} />}
                        ></Route>
                        {Object.keys(routes.validRoutes).map((route, i) => (
                            <Route
                                key={i}
                                exact
                                path={route}
                                render={(props) => (
                                    <div>{routes.validRoutes[route]}</div>
                                )}
                            />
                        ))}
                        <Route
                            render={() => (
                                <Redirect
                                    to={Object.keys(routes.validRoutes)[0]}
                                />
                            )}
                        />
                    </Switch>
                    <Footer />
                </div>
            );
        }
    };

    const loading = () => {
        return <div>loading...</div>;
    };

    return routes.validRoutes ? loaded() : loading();
}

export default App;
