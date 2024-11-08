
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0; /* Ajuste o espaçamento conforme necessário */
`;

export const Container = styled.div<{ openMenu: boolean }>`
  width: 100%;
  max-width: 1600px;
  display: grid;
  grid-template-columns: ${({ openMenu }) => (openMenu ? "repeat(4, 1fr)" : "repeat(5, 1fr)")};
  column-gap: 20px;
  row-gap: 50px;
  margin-top: 20px; /* Espaçamento entre a barra de filtro e o grid de vídeos */
`;
