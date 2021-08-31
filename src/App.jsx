import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import 'App.scss';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import Landing from 'pages/Landing';
import { cmsBaseUrl, restDir } from 'constants/urls';
import { useEffect } from 'react';
import { loadRoutes } from 'reducers/routes';
// import { setRoutes } from 'actions';
function App() {
    const validRoutes = useSelector((state) => state.routes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadRoutes({ cmsBaseUrl, restDir }));
    }, [dispatch]);

    return (
        <div className="App">
            <Header />
            <div>{JSON.stringify(validRoutes)}</div>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={(props) => <Landing {...props} />}
                ></Route>
                <Route render={() => <Redirect to="/maintenance" />} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
