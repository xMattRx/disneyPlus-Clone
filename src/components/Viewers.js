import styled from "styled-components";
import disney from '../assets/images/viewers-disney.png';
import marvel from '../assets/images/viewers-marvel.png';
import national from '../assets/images/viewers-national.png';
import pixar from '../assets/images/viewers-pixar.png';
import starwars from '../assets/images/viewers-starwars.png';
const Viewers = (props) => {
    return (
        <Container>
            <Wrap>
                <img src={disney} />
            </Wrap>
            <Wrap>
                <img src={marvel} />
            </Wrap>
            <Wrap>
                <img src={national} />
            </Wrap>
            <Wrap>
                <img src={pixar} />
            </Wrap>
            <Wrap>
                <img src={starwars} />
            </Wrap>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 30px;
    padding: 30px 0px 26px;
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, minmax(0, 1fr))
    }
`

const Wrap = styled.div`
    padding-top: 56.25%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0/ 69%) 0px 26px 30px -10px,
    rgb(0 0 0/ 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition:  all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 3px solid rgba(249, 249, 249, 0.1);
    img{
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        width: 100%;
        z-index:1;
        top: 0;
    }
`

export default Viewers;