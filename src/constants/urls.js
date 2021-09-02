export const cmsBaseUrl =
    process.env.NODE_ENV === 'development'
        ? process.env.REACT_APP_CMS_BASE_URL || 'http://localhost:3000'
        : process.env.REACT_APP_CMS_BASE_URL || 'http://localhost:5000';

export const maintenanceEndpoint = '/maintenance';

export const restDir = process.env.REACT_APP_CMS_BASE_URL
    ? '/routes.json'
    : '/locally-defined-routes.json';
