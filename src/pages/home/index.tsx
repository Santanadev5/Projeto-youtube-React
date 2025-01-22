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
      channelColor: "red", 
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
      thumbnail: "https://i.ytimg.com/vi/FWgxmZgIKO8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDSOD_PhV4uJM-Rwr2e1sP3TBPOTA",
      channelName: "Gameplayrj",
      channelColor: "blue",
    },
    {
      id: 4,
      title: "QUEM É O PAGODEIRO?",
      date: "11 de abr. de 2024",
      thumbnail: "https://i.ytimg.com/vi/xK30Iabee_o/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB5B2gGrkzaiieAcsrECC-M3VH5Ew",
      channelName: "Aqueles Caras",
      channelColor: "black",
    },
    {
      id: 5,
      title: "Tour do SETUP 2025!",
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
      channelColor: "Orange",
    },
    {
      id: 11,
      title: "Estudando PROGRAMAÇÃO",
      date: "17 de mar. de 2023",
      thumbnail: "https://i.ytimg.com/vi/CXXyZq3A_rI/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC0W2CVzgXwKr2xbudNwj33T9V2yA",
      channelName: "Experiência Flamino",
      channelColor: "Brown",
    },
  ];

  //https://i.ytimg.com/vi/DAi-TiQZjlg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDU3DBWCmsuy-dC039oqoxW9vLptg
  //https://i.ytimg.com/vi/ML1fgVfxuRU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC-lmqPe07GnnBPBRZcqkKvIOfFCw
  //https://i.ytimg.com/vi/gMxQ8vxH9Vk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDbeGU1NfrudYilUBrwvtceuhY75A
 //https://i.ytimg.com/vi/3vdzghRCprU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDTSnUZs6eooPww9tVqzHj5s9qZgQ
 //https://i.ytimg.com/vi/WMACMQzkKvU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBT1SQiIf1Tlyr-7XFMGeARMDf0oA
 //https://i.ytimg.com/vi/ZPcG9PCfagM/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYaSA3KHIwDw==&rs=AOn4CLBdkogz00IZPaA964bGgJr7Gxs84w
 //https://i.ytimg.com/vi/G4eTjFvp8CU/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYUiBlKFIwDw==&rs=AOn4CLBRzP3H7P3VkU85OXxPpyt0ZiYDLQ


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
