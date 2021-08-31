// export const getRoutes = async (cmsBaseUrl, restDir) => {
//     const routesHeaders = new Headers({
//         Accept: 'application/json',
//         'Content-type': 'application/json',
//     });

//     const requestOptions = {
//         method: 'GET',
//         headers: routesHeaders,
//         // redirect: 'follow',
//     };

//     const response = await fetch(`${cmsBaseUrl}${restDir}`, requestOptions);
//     const data = await response.json();

//     return new Promise(function (resolve) {
//         resolve(data);
//     });
// };

import routes from 'routes.json';

export const getRoutes = ({ cmsBaseUrl, restDir }) => {
    console.log('cmsBaseUrl: ', cmsBaseUrl);
    console.log('restDir: ', restDir);
    return routes;
};
