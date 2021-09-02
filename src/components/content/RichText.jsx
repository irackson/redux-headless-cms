import DOMPurify from 'dompurify';

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
        const sanitizedHtml = DOMPurify.sanitize(text, {
            USE_PROFILES: { html: true },
        });

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
