import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import 'App.scss';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import Landing from 'pages/Landing';
import { cmsBaseUrl, restDir } from 'constants/urls';
import { useEffect } from 'react';
import { setRoutes } from 'actions';

function App() {
    const validRoutes = useSelector((state) => state.routes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setRoutes({ cmsBaseUrl, restDir }));
    }, []);

    return (
        <div className="App">
            <Header />
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
