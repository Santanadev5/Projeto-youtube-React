import React from "react";
import VideoComponent from "../../components/videoComponent";
import { Container, Wrapper } from "./styles";
import FilterBar from "../../components/filterBar";

interface HomeProps {
  openMenu: boolean;
}

function Home({ openMenu }: HomeProps) {
  const cards = [
    {
      id: 1,
      title: "The INCREDIBLE...",
      date: "25 de out. de 2012",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeVAvQS6pixpNLxBh99PaV_ysPiGn_aUs6tg&s",
      channelName: "South Park",
      channelColor: "red", // Cor do círculo do canal
    },
    {
      id: 2,
      title: "COMO TUDO DEVE SER",
      date: "25 de abr. de 2014",
      thumbnail: "https://i.ytimg.com/vi/GNGJV7wFAl0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDNaFf1IcyxSeLgfcN6bw4xSCRGfQ",
      channelName: "Charlie Brown Jr.",
      channelColor: "purple",
    },
    {
      id: 3,
      title: "Playstation 6 em FASE AVANÇADA ",
      date: "20 de jan. de 2025",
      thumbnail: "https://i.ytimg.com/an_webp/_OK6W4PpAss/mqdefault_6s.webp?du=3000&sqp=CIihwbwG&rs=AOn4CLAGDwSh_cuABXmHaUULDMwB28p6Og",
      channelName: "Gameplayrj",
      channelColor: "blue",
    },
  ];

  return (
    <Wrapper>
      <FilterBar />
      <Container openMenu={openMenu}>
        {cards.map((card) => (
          <VideoComponent key={card.id} cardData={card} />
        ))}
      </Container>
    </Wrapper>
  );
}

export default Home;
