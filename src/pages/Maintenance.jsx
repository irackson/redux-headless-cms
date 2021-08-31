import { useEffect } from 'react';
const Maintenance = () => {
    useEffect(() => {
        window.location = '/maintenance.html';
    }, []);
    return <span></span>;
};

export default Maintenance;
