import Container from './Container';
import Image from './Image';
import RichText from './RichText';

const ContentComponent = ({ content }) => {
    const renderComponentByType = (item) => {
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
                        className={item.className}
                        flexDirection={item.flexDirection}
                        flexWrap={item.flexWrap}
                        justifyContent={item.justifyContent}
                        alignItems={item.alignItems}
                        width={item.width}
                    >
                        {item.items}
                    </Container>
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
    return renderComponentByType(content);
};

export default ContentComponent;
