const Image = ({ className, alt = 'alt', height = 100, src }) => {
    return (
        <img
            className={className}
            alt={alt}
            style={{
                maxHeight: `${height}px`,
                alignSelf: src ? 'initial' : 'center',
            }}
            src={src ?? `https://via.placeholder.com/${height}`}
        />
    );
};

export default Image;
