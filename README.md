const createDomPurify = require('dompurify');
const { JSDOM } = require('jsdom');
const dompurify = createDomPurify(new JSDOM().window);

const text = ...;
const sanitizedHtml = dompurify.sanitize(text)

## if the rest route library index is empty or fails to load, its all the same from user's perspective so directions indicate redirect to maintenance without differentiation
