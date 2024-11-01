import { Container, MenuItem, ButtonIcon, Divider } from "./styles";
import InicioIcon from '../../assets/início.png';
import ShortsIcon from '../../assets/shorts-removebg-preview.png';
import InscricaoIcon from '../../assets/inscrição.png';
import BibliotecaIcon from '../../assets/biblioteca.png';
import HistoriciIcon from '../../assets/historico-yt.png';
import FireIcon from '../../assets/fire.png';
import ShoppingIcon from '../../assets/shopping.png';
import MusicaIcon from '../../assets/musica.png';
import FilmeIcon from '../../assets/claquete.png';
import LiveIcon from '../../assets/ao-vivo.png';
import JogoIcon from '../../assets/controle-de-video-game.png';
import NoticiaIcon from '../../assets/jornal-dobrado.png';
import EsporteIcon from '../../assets/trofeu.png';
import IdeiaIcon from '../../assets/ideia.png';


const items = [0]

interface IProps {
    openMenu: boolean ;
}

function Menu({ openMenu }: IProps){
    return(
        <Container openMenu = { openMenu }>

            {items.map(() => (
                <MenuItem openMenu={ openMenu }>
                    <ButtonIcon alt="" src={ InicioIcon } />
                    <span>Início</span>
                </MenuItem>
            ))}

            {items.map(() => (
                <MenuItem openMenu={ openMenu }>
                    <ButtonIcon alt="" src={ ShortsIcon} />
                    <span>Shorts</span>
                </MenuItem>
            ))}
           
           {items.map(() => (
                <MenuItem openMenu={ openMenu }>
                    <ButtonIcon alt="" src={ InscricaoIcon } />
                    <span>Inscrições</span>
                </MenuItem>
            ))}

            <Divider  />

            {items.map(() => (
                <MenuItem openMenu={ openMenu }>
                    <ButtonIcon alt="" src={ BibliotecaIcon } />
                    <span>Biblioteca</span>
                </MenuItem>
            ))}


            {items.map(() => (
                <MenuItem openMenu={ openMenu }>
                    <ButtonIcon alt="" src={ HistoriciIcon } />
                    <span>Histórico</span>
                </MenuItem>
            ))}

            <Divider  />

            <span style={{ fontWeight: 'bold'}}>EXPLORAR</span>
            <br></br>

            {items.map(() => (
                <MenuItem openMenu={ openMenu }>
                    <ButtonIcon alt="" src={ FireIcon } />
                    <span>Em alta</span>
                </MenuItem>
            ))}


            {items.map(() => (
                <MenuItem openMenu={ openMenu }>
                    <ButtonIcon alt="" src={ ShoppingIcon } />
                    <span>Shopping</span>
                </MenuItem>
            ))}


            {items.map(() => (
                <MenuItem openMenu={ openMenu }>
                    <ButtonIcon alt="" src={ MusicaIcon } />
                    <span>Música</span>
                </MenuItem>
            ))}

            
            {items.map(() => (
                <MenuItem openMenu={ openMenu }>
                    <ButtonIcon alt="" src={ FilmeIcon } />
                    <span>Filmes</span>
                </MenuItem>
            ))}


            {items.map(() => (
                <MenuItem openMenu={ openMenu }>
                    <ButtonIcon alt="" src={ LiveIcon } />
                    <span>Ao vivo</span>
                </MenuItem>
            ))}

{items.map(() => (
                <MenuItem openMenu={ openMenu }>
                    <ButtonIcon alt="" src={ JogoIcon } />
                    <span>Jogos</span>
                </MenuItem>
            ))}


            {items.map(() => (
                <MenuItem openMenu={ openMenu }>
                    <ButtonIcon alt="" src={ NoticiaIcon } />
                    <span>Noticias</span>
                </MenuItem>
            ))}

            {items.map(() => (
                <MenuItem openMenu={ openMenu }>
                    <ButtonIcon alt="" src={ EsporteIcon } />
                    <span>Esportes</span>
                </MenuItem>
            ))}

            {items.map(() => (
                <MenuItem openMenu={ openMenu }>
                    <ButtonIcon alt="" src={ IdeiaIcon } />
                    <span>Aprender</span>
                </MenuItem>
            ))}


        </Container>
    )
}

export default Menu ;