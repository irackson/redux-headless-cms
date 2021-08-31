// const createDomPurify = require('dompurify');
// const { JSDOM } = require('jsdom');
// const dompurify = createDomPurify(new JSDOM().window);

const RichText = ({ textType, className, text, style: textTransforms }) => {
    if (textType === 'plain') {
        return (
            <div
                className={className}
                style={{ textTransform: textTransforms }}
            >
                <p>{text}</p>
            </div>
        );
    } else if (textType === 'html') {
        // const sanitizedHtml = dompurify.sanitize(text);
        const sanitizedHtml = text;
        return (
            <div
                className={className}
                style={{ textTransform: textTransforms }}
                dangerouslySetInnerHTML={{
                    __html: sanitizedHtml,
                }}
            ></div>
        );
    } else {
        return <></>;
    }
};

export default RichText;
