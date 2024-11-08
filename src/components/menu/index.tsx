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
import { useNavigate } from "react-router-dom";


const menuItems = [
    { icon: InicioIcon, label: "Início", link: '/' },
    { icon: ShortsIcon, label: "Shorts", link: '/shorts' },
    { icon: InscricaoIcon, label: "Inscrições" , link: '/registration'},
    { divider: true },
    { icon: BibliotecaIcon, label: "Biblioteca" , link: '/library'},
    { icon: HistoriciIcon, label: "Histórico", link: '/history' },
    { divider: true },
    { label: "EXPLORAR", isHeader: true },
    { icon: FireIcon, label: "Em alta" , link: '/High'},
    { icon: ShoppingIcon, label: "Shopping" , link: '/shopping'},
    { icon: MusicaIcon, label: "Música" , link: '/music'},
    { icon: FilmeIcon, label: "Filmes" , link: '/movie'},
    { icon: LiveIcon, label: "Ao vivo" , link: '/live'},
    { icon: JogoIcon, label: "Jogos" , link: '/game'},
    { icon: NoticiaIcon, label: "Notícias" , link: '/news'},
    { icon: EsporteIcon, label: "Esportes" , link: '/sport'},
    { icon: IdeiaIcon, label: "Aprender" , link: '/learn'},
];

interface IProps {
    openMenu: boolean;
}

function Menu({ openMenu }: IProps) {
    const navigate = useNavigate();



    return (
        <Container openMenu={openMenu}>
            {menuItems.map((item, index) =>
                item.divider ? (
                    <Divider key={index} />
                ) : item.isHeader ? (
                    <span key={index} style={{ fontWeight: 'bold', marginTop: '10px', marginBottom: '10px' }}>{item.label}</span>
                ) : (
                    <MenuItem
                        key={index}
                        openMenu={openMenu}
                        onClick={() => item.link && navigate(item.link)}
                    >
                        <ButtonIcon alt="" src={item.icon} />
                        <span>{item.label}</span>
                    </MenuItem>
                )
            )}
        </Container>
        
    );
}

export default Menu;