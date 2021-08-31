import { useEffect } from 'react';
import { useHistory } from 'react-router';
const Maintenance = (props) => {
    const history = useHistory();
    useEffect(() => {
        window.location = '/maintenance.html';
    }, []);
    return <></>;
};

export default Maintenance;
