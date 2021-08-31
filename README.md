const createDomPurify = require('dompurify');
const { JSDOM } = require('jsdom');
const dompurify = createDomPurify(new JSDOM().window);

const text = ...;
const sanitizedHtml = dompurify.sanitize(text)
