import { Container, MenuItem, ButtonIcon, Divider } from "./styles";
import InicioIcon from '../../assets/início.png';
import ShortsIcon from '../../assets/shorts-removebg-preview.png';
import InscricaoIcon from '../../assets/inscrição.png';
import BibliotecaIcon from '../../assets/biblioteca.png';
import HistoriciIcon from '../../assets/historico-yt.png';

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

            <Divider />

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

            <Divider />

        </Container>
    )
}

export default Menu ;