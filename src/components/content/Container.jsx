import styled from 'styled-components';
import ContentComponent from './ContentComponent';

// 45% comes from an attempt to maintain the margins established by the referenced width of 0.3 --> (0.5 - (1 - 0.3 * 3) / 2) * 100%
const DeliverableNineDiv = styled.div`
    width: ${(props) =>
        props.styledWidth ? `${props.styledWidth * 100}%` : undefined};
    .order-element {
        @media only screen and (max-width: 599px) {
            width: 45%;
        }
    }
`;
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
        <DeliverableNineDiv
            className={className}
            style={{
                display: 'flex',
                flexDirection,
                flexWrap,
                justifyContent,
                alignItems,
            }}
            styledWidth={width}
        >
            {children.map((item, i) => (
                <ContentComponent key={i} content={item} />
            ))}
        </DeliverableNineDiv>
    );
};

export default Container;
