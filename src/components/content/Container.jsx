import ContentComponent from './ContentComponent';

const Container = ({
    children,
    className,
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    width,
}) => {
    return (
        <div
            className={className}
            style={{
                display: 'flex',
                flexDirection,
                flexWrap,
                justifyContent,
                alignItems,
                width: width ? `${width * 100}%` : null,
            }}
        >
            {children.map((item, i) => (
                <ContentComponent key={i} content={item} />
            ))}
        </div>
    );
};

export default Container;
