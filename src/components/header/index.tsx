import { Container, LogoContainer, ButtonContainer, ButtonIcon, SearchContainer, SearchInputContainer, SearchInput, SearchButton, HeaderButton } from "./styles";
import HamburguerIcon from '../../assets/hamburger.png';
import Logo from '../../assets/youtube.png';
import SearchIcon from '../../assets/lupa.png';
import MicIcon from '../../assets/formato-preto-do-microfone.png';
import VideoIcon from '../../assets/camera-de-video.png';
import NotificationIcon from '../../assets/notificacao.png';

interface IProps {
    openMenu: boolean,
    setOpenMenu: (openMenu:boolean) => void

}

function Header({ openMenu, setOpenMenu}: IProps){
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
                    <ButtonIcon alt="" src={ VideoIcon }/>
                </ButtonContainer>

                <ButtonContainer margin ='0 0 0 10px'>
                    <ButtonIcon alt="" src={ NotificationIcon }/>
                </ButtonContainer> 

                <ButtonContainer margin ='0 0 0 10px'>
                    n
                </ButtonContainer> 
            </HeaderButton>

        </Container>
    )
}

export default Header ;