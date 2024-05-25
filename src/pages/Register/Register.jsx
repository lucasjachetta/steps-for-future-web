import Logo from "../../assets/Logo.svg"
import s from "./RegisterStyles";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { Link } from "react-router-dom";

function Register() {
  return (
    <s.MainContainer>
         <s.LeftContainer>
            <img src={Logo} width={400} height={400} />
            <h1>Steps for Future</h1>
         </s.LeftContainer>

         <s.RightContainer>
            <s.CenterContainer>
              <Input placeholder="Nome Completo"/>
              <Input placeholder="Nome de usuário"/>
              <Input placeholder="Email"/>
              <Input placeholder="Número de Celular"/>
              <Input placeholder="Senha"/>
              <Input placeholder="Confirmar Senha"/>
              <s.DescriptionContainer>
                Ao se cadastrar, você concorda com nossos Termos, Política de Privacidade e Política de Cookies.
              </s.DescriptionContainer>
              <Link to="/logged-plans">
                <Button variant="secondary"><h3>Cadastrar</h3></Button>
              </Link>
            </s.CenterContainer>
         </s.RightContainer>
    </s.MainContainer>
  );
}

export default Register;
