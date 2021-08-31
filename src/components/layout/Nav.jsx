import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Nav = (props) => {
    const routes = useSelector((state) => state.routes);
    const dispatch = useDispatch();
    return (
        <nav>
            {Object.keys(routes.validRoutes).map((route, i) => (
                <Link to={route} key={i}>
                    {routes.validRoutes[route]}
                </Link>
            ))}
        </nav>
    );
};

export default Nav;
