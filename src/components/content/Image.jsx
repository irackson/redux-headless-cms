const placeholderHeight = 100;
const Image = ({ className, alt = 'alt', height, src }) => {
    return (
        <img
            className={className}
            alt={alt ?? src} // use img src as alt if not provided
            style={{
                maxHeight: `${height}px`,
                alignSelf: 'center',
            }}
            src={src ?? `https://via.placeholder.com/${placeholderHeight}`}
        />
    );
};

export default Image;
