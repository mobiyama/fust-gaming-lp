import { createClient } from 'microcms-js-sdk'; //ES6

export const cmsApex = createClient({
  serviceDomain: "fust", // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
  apiKey: process.env.CMS_APEX_API_KEY || '',
});
