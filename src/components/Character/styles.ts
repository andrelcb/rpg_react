import styled from "styled-components";


type Props = {
    left: number,
    top: number,
    size: number,
    side: number
}

export const Container = styled.div<Props>`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    position: absolute;
    left: ${props => props.left}px;
    top: ${props => props.top}px;
    background-image: url('/assets/char/char.png');
    background-position: 0px ${props => props.side}px;
`;