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
      title: "Tour do SETUP 2025!",
      date: "331 mil visualizações há 5 dias",
      thumbnail: "https://i.ytimg.com/vi/Entjz3c0xrc/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB3bDPXqmf0do4DaTfWebTzIQf_gw",
      channelName: "BRKsEDU",
      channelColor: "purple",
    },
    {
      id: 2,
      title: "Carreira digital",
      date: "22 mil visualizações há 2 meses",
      thumbnail: "https://i.ytimg.com/vi/6VdMedQGNhw/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBeEFG0r7I_aEeFEhelEaTMaoCypg",
      channelName: "Curso em Vídeo",
      channelColor: "blue",
    },
    {
      id: 3,
      title: "PROGRAMAÇÃO e SISTEMAS",
      date: "507 mil visualizações  há 1 ano",
      thumbnail: "https://i.ytimg.com/vi/ML1fgVfxuRU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC-lmqPe07GnnBPBRZcqkKvIOfFCw",
      channelName: "Manual do Mundo",
      channelColor: "blue", 
    },
    {
      id: 4,
      title: "PROFISSÃO DO FUTURO",
      date: "531 mil visualizações  há 5 meses",
      thumbnail: "https://i.ytimg.com/vi/Q0YYA8hSV8g/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBA3RkyTJpX-JlF4AI23SLZQBSnFQ",
      channelName: "Cortes do Flow [OFICIAL]",
      channelColor: "black",
    },
    {
      id: 5,
      title: "PROGRAMAÇÃO ?",
      date: "229 mil visualizações há 1 ano",
      thumbnail: "https://i.ytimg.com/vi/o17EjWGHYBo/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD50SlrnAoQ4hn413YInRleDQsCmA",
      channelName: "JovemScript",
      channelColor: "yellow",
    },
    {
      id: 6,
      title: "DEVS EM 2025...",
      date: "115 mil visualizações há 1 mês",
      thumbnail: "https://i.ytimg.com/vi/DAi-TiQZjlg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDU3DBWCmsuy-dC039oqoxW9vLptg",
      channelName: "Código Fonte TV",
      channelColor: "Salmon", 
    },
    {
      id: 7,
      title: "COMO TUDO DEVE SER",
      date: "7,1 mi de visualizações  há 8 meses",
      thumbnail: "https://i.ytimg.com/vi/GNGJV7wFAl0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDNaFf1IcyxSeLgfcN6bw4xSCRGfQ",
      channelName: "Charlie Brown Jr.",
      channelColor: "purple",
    },
    {
      id: 8,
      title: "GTA 6, fãs ENLOUQUECEREM ",
      date: "90 mil visualizações há 7 dia",
      thumbnail: "https://i.ytimg.com/vi/FWgxmZgIKO8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDSOD_PhV4uJM-Rwr2e1sP3TBPOTA",
      channelName: "Gameplayrj",
      channelColor: "blue",
    },
    {
      id: 9,
      title: "QUEM É O PAGODEIRO?",
      date: "1,4 mi de visualizações há 3 dia",
      thumbnail: "https://i.ytimg.com/vi/xK30Iabee_o/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB5B2gGrkzaiieAcsrECC-M3VH5Ew",
      channelName: "Aqueles Caras",
      channelColor: "black",
    },
    {
      id: 10,
      title: "TOP 5 áreas de TI",
      date: "306 mil visualizações há 1 ano",
      thumbnail: "https://i.ytimg.com/vi/nipk9E4SJl8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAC8E0XBLUrTBYkJetggu_ZDUqCJw",
      channelName: "Refatorando",
      channelColor: "Orange",
    },
    {
      id: 11,
      title: "Estudando PROGRAMAÇÃO",
      date: "184 mil visualizações há 1 mês",
      thumbnail: "https://i.ytimg.com/vi/CXXyZq3A_rI/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC0W2CVzgXwKr2xbudNwj33T9V2yA",
      channelName: "Experiência Flamino",
      channelColor: "Brown",
    },
    {
      id: 12,
      title: "PSG X MANCHESTER CITY",
      date: "21 de jan. de 2025",
      thumbnail: "https://i.ytimg.com/vi/DdRzijp3O9A/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAiEXleDlwHpx0EWn5uUTG8dOkPwA",
      channelName: "TNT Sports Brasil",
      channelColor: "pink",
    },
    {
      id: 13,
      title: "Programação, por onde começar ?",
      date: "599 mil visualizações  há 1 ano",
      thumbnail: "https://i.ytimg.com/vi/gMxQ8vxH9Vk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDbeGU1NfrudYilUBrwvtceuhY75A",
      channelName: "Attekita Dev",
      channelColor: "Violet", 
    },
    {
      id: 14,
      title: "Como memorizar TUDO",
      date: "3,3 mi de visualizações  há 9 meses",
      thumbnail: "https://i.ytimg.com/vi/3vdzghRCprU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDTSnUZs6eooPww9tVqzHj5s9qZgQ",
      channelName: "Ciência Todo Dia",
      channelColor: "Turquoise", 
    },
    {
      id: 15,
      title: "O MELHOR JOGO DE FUTEBOL",
      date: "1 mi de visualizações  há 3 semanas",
      thumbnail: "https://i.ytimg.com/vi/WMACMQzkKvU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBT1SQiIf1Tlyr-7XFMGeARMDf0oA",
      channelName: "Julio Cocielo",
      channelColor: "Beige", 
    },
    {
      id: 16,
      title: "Matuê - Máquina do Tempo",
      date: "161 mi de visualizações  há 4 anos",
      thumbnail: "https://i.ytimg.com/vi/ZPcG9PCfagM/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYaSA3KHIwDw==&rs=AOn4CLBdkogz00IZPaA964bGgJr7Gxs84w",
      channelName: "30PRAUM",
      channelColor: "Violet", 
    },
    {
      id: 17,
      title: "Poesia Acústica #7",
      date: "202 mi de visualizações  há 5 anos",
      thumbnail: "https://i.ytimg.com/vi/G4eTjFvp8CU/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYUiBlKFIwDw==&rs=AOn4CLBRzP3H7P3VkU85OXxPpyt0ZiYDLQ",
      channelName: "PineappleStormTV",
      channelColor: "Orange", 
    },
    {
      id: 18,
      title: "Tudo sobre Front-End",
      date: "113 mil visualizações  há 2 anos",
      thumbnail: "https://yt3.ggpht.com/proxy/a9PIoXhDM6ZgD5XsxFMrB3vsC9oZcCpWOaqAJGBKBovfVvudBcVb_Si-Ba61Qqi4kpySc-KVeeoStJzZ2n3msb-17Eu22DSSWdac2eZCx1NOfFHiXPEiA4_XOR467fyc2Q=w1152-h603-nd",
      channelName: "Gabriel Rangel",
      channelColor: "Salmon", 
    },
    {
      id: 19,
      title: "Glass Animals - Heat Waves",
      date: "136 mi de visualizações  há 4 anos",
      thumbnail: "https://i.ytimg.com/vi/KT7F15T9VBI/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC3_JLbqkwqp8ZpuHuKOZU8umzs-w",
      channelName: "Glass Animals",
      channelColor: "Violet", 
    },
    {
      id: 20,
      title: "The INCREDIBLE...",
      date: "202 mi de visualizações  há 5 anos",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeVAvQS6pixpNLxBh99PaV_ysPiGn_aUs6tg&s",
      channelName: "South Park",
      channelColor: "red", 
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
