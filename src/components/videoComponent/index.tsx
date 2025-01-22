import {
    ChannelImage,
    Container,
    ImageBanner,
    TextCard,
    TextContainer,
    Title,
    TitleContainer,
  } from "./styles";
  
  interface CardDataProps {
    cardData: {
      title: string;
      date: string;
      thumbnail: string;
      channelName: string;
      channelColor: string; // Nova propriedade para mudar a cor
    };
  }
  
  function VideoComponent({ cardData }: CardDataProps) {
    return (
      <Container>
        <ImageBanner src={cardData.thumbnail} alt={`Thumbnail do ${cardData.title}`} />
        <TitleContainer>
          <ChannelImage style={{ backgroundColor: cardData.channelColor }}>
            {cardData.channelName[0].toUpperCase()} {/* Mostra a inicial do nome do canal */}
          </ChannelImage>
          <TextContainer>
            <Title>{cardData.title}</Title>
            <TextCard>{cardData.channelName}</TextCard>
            <TextCard>{cardData.date}</TextCard>
          </TextContainer>
        </TitleContainer>
      </Container>
    );
  }
  
  export default VideoComponent;
  