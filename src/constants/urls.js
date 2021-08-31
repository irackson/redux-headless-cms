export const cmsBaseUrl =
    process.env.REACT_APP_CMS_BASE_URL || 'http://localhost:3000';

export const maintenanceEndpoint = '/maintenance';

export const restDir = process.env.REACT_APP_CMS_BASE_URL
    ? '/routes.json'
    : '/locally-defined-routes.json';
