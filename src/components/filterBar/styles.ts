import styled from "styled-components";

export const FilterBarContainer = styled.div`
  display: flex;
  gap: 15px;
  overflow-x: auto;
  padding: 0 0;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FilterButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 10px;
  background-color: #f2f2f2;
  cursor: pointer;
  font-size: 14px;
  white-space: nowrap;
  transition: background-color 0.3s;

  &:hover {
    background-color: black;
    color: white;
  }
`;