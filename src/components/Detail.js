import styled from "styled-components";
import iconBlack from "../assets/images/play-icon-black.png";
import iconWhite from "../assets/images/play-icon-white.png";

const Detail = (props) => {
    return (
        <Container>
            <Background>
                <img src="" />
            </Background>
            <ImageTitle>
                <img src="" />
            </ImageTitle>
            <ContentMeta>
                <Controls>
                    <Player>
                        <img src={iconBlack} />
                        <span>Play</span>
                    </Player>
                    <Trailer>
                        <img src={iconWhite} />
                        <span>Trailer</span>
                    </Trailer>
                    <AddList>
                        <span />
                        <span />
                    </AddList>
                </Controls>
            </ContentMeta>
        </Container>
    )
}

const Container = styled.div`
position: relative;
min-height: calc(100vh - 250px);
overflow-x: auto;
display: block;
top: 72px;
padding: 0 calc(3.5vw + 5px);
`

const Background = styled.div`
left: 0px;
opacity: 0.8;
position: fixed;
right: 0px;
top: 0px;
z-index: -1;

img{
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px){
        width: initial;
    }
}
`

const ImageTitle = styled.div`
    align-items: flex-end;
    display: flex;
    -webkit-box-pack-start;
    justify-content: flex-start;
    margin: 0px auto;
    height: 30vw;
    min-height: 170px;
    padding-bottom: 24px;
    width: 100%;

    img{
        max-width: 600px;
        min-width: 200px;
        width: 35vw;
    }
`

const ContentMeta = styled.div`
max-width: 874px;
`

const Controls = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    margin: 24px 8px;
    min-height: 56px;
`

const Player = styled.button`
    font-size: 15px;
    margin: 0px 22px 0px 0px;
    padding: 0px 24px;
    height: 56px;
    border-radius: 4px;
    align-items: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    letter-spacing: 1.8px;
    text-align: center;
    text-transform: uppercase;
    background: rgba(249,249,249);
    border: none;
    color: rgb(0,0,0);

    img{
        width: 32px;
    }
    &:hover{
            background: rgb(198,198,198);
        }

    @media (max-width: 768px) {
        height: 45px;
        padding: 0px 22px;
        font-size:12px;
        margin: 0px 10px 0px 0px;
        img{
            width: 25px;
        }
    }
`

const Trailer = styled(Player)`
    background: rgba(0,0,0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`

const AddList = styled.div`
margin-right: 16px;
height: 44px;
width: 44px;
display: flex;
justify-content: center;
align-items: center;
background-color: rgb(0,0,0, 0.6);
border-radius: 50%;
border: 2px solid white;
cursor: pointer;

span{
    background-color: rgb(249,249,249);
    display: inline-block;

    &:first-child{
        height: 2px;
        transform: translate(1px, 0px) rotate(0deg);
        width: 16px;
    }

    &:nth-child(2){
        height: 16px;
        transform: translateX(-8px) rotate(0deg);
        width: 2px;
    }
}

`


export default Detail;