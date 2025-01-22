import VideoComponent from "../../components/videoComponent";
import { Container, Wrapper } from "./styles"; 
import FilterBar from "../../components/filterBar";

interface HomeProps {
  openMenu: boolean;
}

function Home({ openMenu }: HomeProps) {
  return (
    <Wrapper>
      <FilterBar /> {}
      <Container openMenu={openMenu}> {}
        {Array.from({ length: 1 }, (_, i) => (
          <VideoComponent key={i} />
        ))}
      </Container>
    </Wrapper>
  );
}

export default Home;