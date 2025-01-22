import React from "react";
import { FilterBarContainer, FilterButton } from "./styles";

const FilterBar: React.FC = () => {
  const filters = ["Tudo", "Música", "Jogos", "Mixes", "Hip hop ", "Notícias", "Podcast", "Ao vivo", "Álbuns", "Assistidos", "Bandas", "Novidades para você"];

  return (
    <FilterBarContainer>
      {filters.map((filter, index) => (
        <FilterButton key={index}>{filter}</FilterButton>
      ))}
    </FilterBarContainer>
  );
};

export default FilterBar;