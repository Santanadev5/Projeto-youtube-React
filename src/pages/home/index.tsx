import React from "react";
import VideoComponent from "../../components/videoComponent";
import { Container, Wrapper } from "./styles"; // Importando Wrapper
import FilterBar from "../../components/filterBar";

interface HomeProps {
  openMenu: boolean;
}

function Home({ openMenu }: HomeProps) {
  return (
    <Wrapper>
      <FilterBar /> {/* Componente de filtro */}
      <Container openMenu={openMenu}> {/* Grid de vídeos */}
        {Array.from({ length: 10 }, (_, i) => (
          <VideoComponent key={i} />
        ))}
      </Container>
    </Wrapper>
  );
}

export default Home;