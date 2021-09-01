import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import 'App.scss';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import Landing from 'pages/Landing';
import { cmsBaseUrl, maintenanceEndpoint, restDir } from 'constants/urls';
import { useEffect } from 'react';
import { loadRoutes } from 'reducers/routes';
import Maintenance from 'pages/Maintenance';
import DynamicRoute from 'pages/DynamicRoute';

function App() {
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
                    <main>
                        <Switch>
                            <Route
                                exact
                                path="/"
                                render={(rp) => <Landing {...rp} />}
                            ></Route>
                            {Object.keys(routes.validRoutes).map((route, i) => (
                                <Route
                                    key={i}
                                    exact
                                    path={route}
                                    render={(rp) => <DynamicRoute {...rp} />}
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
                    </main>
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
