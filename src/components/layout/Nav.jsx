import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Nav = (props) => {
    const routes = useSelector((state) => state.routes);
    return (
        <nav>
            <Link to="/">Home</Link>
            {Object.keys(routes.validRoutes).map((route, i) => (
                <Link to={route} key={i}>
                    {routes.validRoutes[route]}
                </Link>
            ))}
        </nav>
    );
};

export default Nav;
