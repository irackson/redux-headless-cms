import Image from './Image';
import RichText from './RichText';

const Container = ({
    items = [],
    className,
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    width,
}) => {
    const renderElementType = (item) => {
        switch (item.type) {
            case 'rich-text':
                return (
                    <RichText
                        textType={item.textType}
                        className={item.className}
                        text={item.text}
                        style={item.style}
                    />
                );
            case 'container':
                return (
                    <Container
                        items={item.items}
                        className={item.className}
                        flexDirection={item.flexDirection}
                        flexWrap={item.flexWrap}
                        justifyContent={item.justifyContent}
                        alignItems={item.alignItems}
                        width={item.width}
                    />
                );
            case 'image':
                return (
                    <Image
                        className={item.className}
                        alt={item.alt}
                        height={item.height}
                        src={item.src}
                    />
                );
            default:
                return <></>;
        }
    };

    return (
        <section
            className={className}
            style={{
                display: 'flex',
                flexDirection: flexDirection ?? null,
                flexWrap: flexWrap ?? null,
                justifyContent: justifyContent ?? null,
                alignItems: alignItems ?? null,
                width: width ? `${width * 100}%` : null,
            }}
        >
            {items.map((item, i) => (
                <div
                    key={i}
                    className={item.className}
                    style={{
                        display: 'flex',
                        flexDirection: item.flexDirection ?? null,
                        flexWrap: item.flexWrap ?? null,
                        justifyContent: item.justifyContent ?? null,
                        alignItems: item.alignItems ?? null,
                        width: item.width ? `${item.width * 100}%` : null,
                    }}
                >
                    {renderElementType(item)}
                </div>
            ))}
        </section>
    );
};

export default Container;
