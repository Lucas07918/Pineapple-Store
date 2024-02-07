import { Cards, Container, Content } from "./styles";
import AppleWacth from "../../assets/AppleWatch.jpg"
import Iphone from '../../assets/IphoneHomeImg.png'
import Slide2 from '../../assets/SlideImg2.png'
import Slide3 from '../../assets/SlideImg3.png'

export function Main(){
    return(
        <Container>
            <Content>
                <div className="propagands">
                <img 
                src={AppleWacth} 
                alt=""
                className="image"
                />
                </div>

                <Cards>
                <div id="container">
                    <div className="content">
                        {/* <div className="img">
                        <img src={Iphone} alt="" />
                        </div> */}
                        <h3>Iphone 15 Pro</h3>
                        <h2>Titânio</h2>
                        <h4>A partir de R$ 9.200,00</h4>   
                    </div>
                    <div className="content">
                        <h3>Apple Watch Series 9</h3>
                        <h2>Brilha mais que tudo</h2>
                        <h4>A partir de R$ 4.999,00</h4>   
                    </div>
                    <div className="content">
                        <h3>Macbook Pro</h3>
                        <h2>Arrepia. Até na beleza</h2>
                        <h4>A partir de R$ 18.499,00</h4>   
                    </div>
                </div>
                </Cards>
            </Content>
        </Container>
        )
}