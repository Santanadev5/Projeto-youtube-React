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
      thumbnail: "https://yt3.googleusercontent.com/LbAC4_dtY0PwM_yZfSfBe0Q9QjvAskCUgEHutqtZgl2p8MW4DSwROiZ_gsSwHYJgYyltiwl0Pdw=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
      channelName: "Gameplayrj",
      channelColor: "blue",
    },
    {
      id: 4,
      title: "QUEM É O CASAL?",
      date: "11 de abr. de 2024",
      thumbnail: "https://i.ytimg.com/an_webp/9zEfN9wXnnU/mqdefault_6s.webp?du=3000&sqp=CJaZxbwG&rs=AOn4CLAaC1Zjkxk_1eTxDqqecLeBCO1tUQ",
      channelName: "Aqueles Caras",
      channelColor: "black",
    },
    {
      id: 5,
      title: "TIER LIST de DONKEY KONG !!!",
      date: "29 de set. de 2024",
      thumbnail: "https://i.ytimg.com/vi/Entjz3c0xrc/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB3bDPXqmf0do4DaTfWebTzIQf_gw",
      channelName: "BRKsEDU",
      channelColor: "purple",
    },
    {
      id: 6,
      title: "Carreira digital",
      date: "12 de nov. de 2024",
      thumbnail: "https://i.ytimg.com/vi/6VdMedQGNhw/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBeEFG0r7I_aEeFEhelEaTMaoCypg",
      channelName: "Curso em Vídeo",
      channelColor: "blue",
    },
    {
      id: 7,
      title: "PSG X MANCHESTER CITY",
      date: "21 de jan. de 2025",
      thumbnail: "https://i.ytimg.com/an_webp/shPbF0l1U3c/mqdefault_6s.webp?du=3000&sqp=CLubxbwG&rs=AOn4CLCvv0CIDwlpA_xeewf33CaNOyfHXg",
      channelName: "TNT Sports Brasil",
      channelColor: "pink",
    },
    {
      id: 8,
      title: "PROFISSÃO DO FUTURO",
      date: "8 de ago. de 2024",
      thumbnail: "https://i.ytimg.com/vi/Q0YYA8hSV8g/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBA3RkyTJpX-JlF4AI23SLZQBSnFQ",
      channelName: "Cortes do Flow [OFICIAL]",
      channelColor: "black",
    },
    {
      id: 9,
      title: "PROGRAMAÇÃO !!!",
      date: "18 de nov. de 2023",
      thumbnail: "https://i.ytimg.com/vi/o17EjWGHYBo/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD50SlrnAoQ4hn413YInRleDQsCmA",
      channelName: "JovemScript",
      channelColor: "yellow",
    },
    {
      id: 10,
      title: "TOP 5 áreas de TI",
      date: "12 de abr. de 2023",
      thumbnail: "https://i.ytimg.com/vi/nipk9E4SJl8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAC8E0XBLUrTBYkJetggu_ZDUqCJw",
      channelName: "Refatorando",
      channelColor: "yellow",
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
