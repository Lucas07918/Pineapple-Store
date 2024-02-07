import { Container, Content, UpBox } from "./styles";
import Logo from "../../assets/Pineapple-Logo-Branco.png";

export function Navbar(){
    return(
        <Container>
            <Content>
                <img src={Logo} alt="" className="logo" />
                <UpBox className="socialMedia">
                    <form action="GET" role="search">
                        <input type="text" placeholder="Pesquisar" />
                    </form>
                    <div className="info">
                        <h6>Login</h6>
                        <h6>Carrinho</h6>
                    </div>
                </UpBox>
                <div className="menu">
                    <ul>
                        <li>Loja</li>
                        <li>Pac</li>
                        <li>PiPad</li>
                        <li>PiPhone</li>
                        <li>PairPods</li>
                    </ul>
                </div>
            </Content>
        </Container>
    )
}