import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./styles";

function VideoComponent() {

    return (
        <Container>
            <ImageBanner src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeVAvQS6pixpNLxBh99PaV_ysPiGn_aUs6tg&s" />
            <TitleContainer>
                <ChannelImage>
                    NS
                </ChannelImage>
                <TextContainer>
                    <Title>The INCREDIBLE...</Title>
                    <TextCard>South park</TextCard>
                    <TextCard>25 de out. de 2012</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    );
}

export default VideoComponent;