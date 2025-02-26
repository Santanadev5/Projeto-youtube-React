import { Container, LogoContainer, ButtonContainer, ButtonIcon, SearchContainer, SearchInputContainer, SearchInput, SearchButton, HeaderButton } from "./styles";
import HamburguerIcon from '../../assets/hamburger.png';
import Logo from '../../assets/youtube.png';
import SearchIcon from '../../assets/lupa.png';
import MicIcon from '../../assets/formato-preto-do-microfone.png';
import VideoIcon from '../../assets/camera-de-video.png';
import NovoIcon from "../../assets/Novo-video.png"
import NovoIcon2 from "../../assets/icone2.png"
import NotificationIcon from '../../assets/notificacao.png';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { LoginButton } from "./styles";


interface IProps {
    openMenu: boolean,
    setOpenMenu: (openMenu:boolean) => void

}

function Header({ openMenu, setOpenMenu}: IProps){

    const { login } = useContext(UserContext)

    const navigate = useNavigate();

    return(
        <Container>
            <LogoContainer>
                <ButtonContainer onClick={() => setOpenMenu (!openMenu) } margin = '0 10px 0 0'>
                    <ButtonIcon alt="" src={ HamburguerIcon } />
                </ButtonContainer>
                <img 
                    style={{ cursor : 'pointer', width: '100px '}}
                    alt=""
                    src={Logo}
                />
            </LogoContainer>

            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput  placeholder="Pesquisar"/>
                </SearchInputContainer>
                <SearchButton>
                  <ButtonIcon alt="" src={ SearchIcon }/>
                </SearchButton>
                <ButtonContainer margin ='0 0 0 10px'>
                    <ButtonIcon alt="" src={ MicIcon }/>
                </ButtonContainer>
            </SearchContainer>

            <HeaderButton>
                <ButtonContainer margin ='0 0 0 10px'>
                    <ButtonIcon alt="" src={ NovoIcon2 }/>
                </ButtonContainer>

                <ButtonContainer margin ='0 0 0 5px'>
                    <ButtonIcon alt="" src={ NotificationIcon }/>
                </ButtonContainer> 

                {login ? (
    <ButtonContainer margin="0 0 0 10px">N</ButtonContainer>
) : (
    <LoginButton onClick={() => navigate('/login')}>Fazer Login</LoginButton>
)}


                 
            </HeaderButton>

        </Container>
    )
}

export default Header ;