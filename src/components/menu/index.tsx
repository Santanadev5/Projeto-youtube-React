import { Container, MenuItem, ButtonIcon } from "./styles";
import HamburguerIcon from '../../assets/hamburger.png';

const items = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

interface IProps {
    openMenu: boolean ;
}

function Menu({ openMenu }: IProps){
    return(
        <Container openMenu = { openMenu }>

            {items.map(() => (
                <MenuItem openMenu={ openMenu }>
                    <ButtonIcon alt="" src={ HamburguerIcon } />
                    <span>inìcio</span>
                </MenuItem>
            ))}
           
        </Container>
    )
}

export default Menu ;