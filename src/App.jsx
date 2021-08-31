import { Redirect, Route, Switch } from 'react-router-dom';
import 'App.scss';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import Landing from 'pages/Landing';

function App() {
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
