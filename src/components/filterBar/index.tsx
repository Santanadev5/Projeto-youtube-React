import React from "react";
import { FilterBarContainer, FilterButton } from "./styles";

const FilterBar: React.FC = () => {
  const filters = ["Tudo", "Música", "Jogos", "Mixes", "Hip hop brasileiro", "Notícias", "Os Donos da Bola", "Ao vivo", "Flamengo", "Funk carioca"];

  return (
    <FilterBarContainer>
      {filters.map((filter, index) => (
        <FilterButton key={index}>{filter}</FilterButton>
      ))}
    </FilterBarContainer>
  );
};

export default FilterBar;