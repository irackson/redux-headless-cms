import 'App.scss';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import { cmsBaseUrl, maintenanceEndpoint, restDir } from 'constants/urls';
import DynamicRoute from 'pages/DynamicRoute';
import Landing from 'pages/Landing';
import Maintenance from 'pages/Maintenance';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { loadRoutes } from 'reducers/routes';

function App() {
    const routes = useSelector((state) => state.routes);
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        dispatch(loadRoutes({ cmsBaseUrl, restDir }));
    }, []);

    const loaded = () => {
        return (
            <div className="App">
                {routes.validRoutes[maintenanceEndpoint] ? (
                    <>
                        <Route
                            exact
                            path={maintenanceEndpoint}
                            component={Maintenance}
                        ></Route>
                        <Redirect to={maintenanceEndpoint}></Redirect>
                    </>
                ) : (
                    <>
                        <Header />
                        <main>
                            <Switch>
                                <Route
                                    exact
                                    path="/"
                                    render={(rp) => <Landing {...rp} />}
                                ></Route>
                                {Object.keys(routes.validRoutes).map(
                                    (route, i) => (
                                        <Route
                                            key={i}
                                            exact
                                            path={route}
                                            render={(rp) => (
                                                <DynamicRoute {...rp} />
                                            )}
                                        />
                                    )
                                )}
                                <Route
                                    render={() => (
                                        <Redirect
                                            to={
                                                Object.keys(
                                                    routes.validRoutes
                                                )[0]
                                            }
                                        />
                                    )}
                                />
                            </Switch>
                        </main>
                        <Footer />
                    </>
                )}
            </div>
        );
    };

    const loading = () => {
        return (
            <div className="App">
                <div></div>
                <main>
                    <h1>loading...</h1>
                </main>
                <Footer />
            </div>
        );
    };

    return routes.validRoutes ? loaded() : loading();
}

export default App;
