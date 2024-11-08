import React from "react";
import VideoComponent from "../../components/videoComponent";
import { Container } from "./styles";

interface HomeProps {
  openMenu: boolean;
}

function Home({ openMenu }: HomeProps) {
  return (
    <Container openMenu={openMenu}>
      {Array.from({ length: 10 }, (_, i) => (
        <VideoComponent key={i} />
      ))}
    </Container>
  );
}

export default Home;
