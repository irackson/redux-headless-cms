import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    const routes = useSelector((state) => state.routes);
    return (
        <nav>
            <ul className="nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link ">
                        Home
                    </Link>
                </li>
                {Object.keys(routes.validRoutes).map((route, i) => (
                    <li key={i} className="nav-item">
                        <Link to={route} className="nav-link">
                            {routes.validRoutes[route]}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
