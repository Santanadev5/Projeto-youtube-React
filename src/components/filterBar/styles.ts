import styled from "styled-components";

export const FilterBarContainer = styled.div`
  display: flex;
  gap: 15px;
  overflow-x: auto;
  padding: 10px 0;
  background-color: #f8f8f8;
  border-bottom: 1px solid #ddd;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FilterButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 16px;
  background-color: #e0e0e0;
  cursor: pointer;
  font-size: 14px;
  white-space: nowrap;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d0d0d0;
  }
`;