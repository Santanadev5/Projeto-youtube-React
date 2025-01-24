import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 55px;
    background-color: #fff;
    padding: 0 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top : 0;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const ButtonContainer = styled.div <{margin?: string}>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: ${ ({margin})=> margin ? margin : 0 } ;
    display: flex;
    justify-content: center ;
    align-items: center;
    cursor: pointer;

    :houver{
        background-color: #f2f2f2;
    }
`;

export const ButtonIcon = styled.img `
    width: 25px;
`;

export const SearchContainer = styled.div `
    display: flex ;
`;

export const SearchInputContainer = styled.div`
    width: 450px;
    height: 35px;
    border: 1px solid #d3d3d3;
    border-radius: 40px 0 0 40px;
    display: flex;
    align-items: center;
    padding: 0 16px;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 25px;
    outline: none;
    border: none;
`;

export const SearchButton = styled.div `
    border-radius: 0 40px 40px 0;
    height: 35px;
    width: 70px;
    background-color: #f8f8f8;
    border: 1px solid #d3d3d3;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const HeaderButton = styled.div `
    width: 200px;
    display: flex;
`;

export const LoginButton = styled.button`
    background-color:  #CC0000;   
    color: white; 
    border: none; 
    border-radius: 20px; 
    padding: 6px 12px; 
    font-size: 14px; 
    cursor: pointer; 
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); 
    transition: background-color 0.3s, box-shadow 0.3s; 

    &:hover {
        background-color: #CC0000; 
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3); 
    }

    &:active {
        background-color: #FF4D4D;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); 
    }
`;
