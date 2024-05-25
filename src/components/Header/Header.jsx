import Logo from "../Logo/Logo";
import { Input } from "../Input/Input";
import ProfilePhoto from "../../assets/Header/ProfilePhoto.svg"
import Appointment from "../../assets/Header/Appointment.svg"
import CapaignIcon from "../../assets/Header/CapaignIcon.svg"
import PointsExchange from "../../assets/Header/PointsExchange.svg"
import WorkoutIcon from "../../assets/Header/WorkoutIcon.svg"
import { Link } from "react-router-dom";
import s from "./HeaderStyles";

function Header() {
  return (
    <s.Header>
      <s.TopContainer>
        <Logo/>
        <Input placeholder="Buscar produto, profissional da saúde..." />
        <img src={ProfilePhoto} width={70} height={70}/>
     
      </s.TopContainer>

      <s.BottomContainer>
      <s.ItemContainer>
          <img src={WorkoutIcon}/> <s.ItemText>Treinos</s.ItemText>
        </s.ItemContainer>
      <s.ItemContainer>
          <img src={CapaignIcon}/> <s.ItemText>Campanhas</s.ItemText>        
        </s.ItemContainer>
      <s.ItemContainer>
          <img src={PointsExchange}/> <s.ItemText>Troque seus Pontos</s.ItemText>
        </s.ItemContainer>
        <s.ItemContainer>
          <img src={Appointment}/> <s.ItemText>Consultas</s.ItemText>
        </s.ItemContainer>
      </s.BottomContainer>
    </s.Header>
  );
}

export default Header;
